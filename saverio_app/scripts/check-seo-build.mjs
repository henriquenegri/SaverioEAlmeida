import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import nextEnv from "@next/env";
import { getSeoConfig } from "../lib/seo-config.mjs";

nextEnv.loadEnvConfig(process.cwd(), false);
const { siteUrl, indexable } = getSeoConfig();
const html = await readFile(".next/server/app/index.html", "utf8");
const robots = await readFile(".next/server/app/robots.txt.body", "utf8");
const sitemap = await readFile(".next/server/app/sitemap.xml.body", "utf8");
const og = await readFile(".next/server/app/opengraph-image.body");
assert.match(html, /<html lang="pt-BR"/);
assert.match(html, /<h1[^>]*>Sua liberdade/);
assert.match(html, /https:\/\/wa.me\/5511992081799/);
assert.match(html, /name="twitter:card" content="summary_large_image"/);
assert.match(robots, /Allow: \//);
assert.equal(og.subarray(1, 4).toString(), "PNG");
assert.match(html, new RegExp(`name="robots" content="${indexable ? "index" : "noindex"}, follow"`));
const script = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (siteUrl) {
  const canonical = html.match(/rel="canonical" href="([^"]+)"/);
  assert.ok(canonical, "Endereço canônico ausente");
  assert.equal(new URL(canonical[1]).href, `${siteUrl}/`);
  assert.ok(script, "JSON-LD ausente");
  const data = JSON.parse(script[1]);
  assert.equal(data["@graph"][0].url, `${siteUrl}/`);
  assert.equal(data["@graph"][1].telephone, "+5511992081799");
} else {
  assert.equal(script, null);
  assert.doesNotMatch(html, /rel="canonical"/);
}
if (indexable) {
  assert.ok(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`));
  assert.ok(sitemap.includes(`<loc>${siteUrl}/</loc>`));
  assert.equal((sitemap.match(/<loc>/g) || []).length, 1);
  assert.doesNotMatch(sitemap, /localhost|#|<lastmod>/);
} else {
  assert.doesNotMatch(robots, /Sitemap:/);
  assert.doesNotMatch(sitemap, /<loc>/);
}
console.log(`HTML, robots, sitemap, JSON-LD e imagem social verificados (${indexable ? "público" : "prévia"}).`);
