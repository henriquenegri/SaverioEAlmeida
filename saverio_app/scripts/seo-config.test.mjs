import test from "node:test";
import assert from "node:assert/strict";
import { getSeoConfig } from "../lib/seo-config.mjs";

test("a prévia sem domínio fica fora do índice, sem inventar uma URL", () => {
  assert.equal(getSeoConfig({}).indexable, false);
  assert.equal(getSeoConfig({}).siteUrl, undefined);
});
test("indexação exige domínio e liberação explícita", () => {
  assert.equal(getSeoConfig({ SITE_INDEXABLE: "true" }).indexable, false);
  assert.equal(getSeoConfig({ SITE_URL: "https://example.com" }).indexable, false);
  assert.equal(getSeoConfig({ SITE_URL: "https://example.com/", SITE_INDEXABLE: "true" }).indexable, true);
  assert.equal(getSeoConfig({ SITE_URL: "https://example.com/" }).siteUrl, "https://example.com");
});
test("prévias da Vercel e desenvolvimento continuam com noindex", () => {
  const env = { SITE_URL: "https://example.com", SITE_INDEXABLE: "true" };
  assert.equal(getSeoConfig({ ...env, VERCEL_ENV: "preview" }).indexable, false);
  assert.equal(getSeoConfig({ ...env, NODE_ENV: "development" }).indexable, false);
});
test("URLs locais, não HTTPS ou com partes extras são rejeitadas", () => {
  for (const SITE_URL of ["http://example.com", "https://localhost", "https://127.0.0.1", "https://192.168.0.1", "https://example.com/pasta", "https://example.com?q=1", "https://example.com/#x", "https://user:password@example.com", "https://example.com:3000", "https://office.local", "sem-dominio"]) {
    assert.throws(() => getSeoConfig({ SITE_URL }));
  }
});
