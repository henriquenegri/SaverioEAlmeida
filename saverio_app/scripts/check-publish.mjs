import nextEnv from "@next/env";
import { getSeoConfig } from "../lib/seo-config.mjs";

nextEnv.loadEnvConfig(process.cwd(), false);
try {
  const config = getSeoConfig(process.env);
  if (!config.siteUrl || !config.indexable) {
    throw new Error("Defina SITE_URL com o domínio oficial e SITE_INDEXABLE=true no ambiente de produção antes do build. Prévias não devem liberar indexação.");
  }
  console.log(`Configuração de publicação válida: ${config.siteUrl}`);
  console.log(`Enviar ao Search Console: ${config.siteUrl}/sitemap.xml`);
  console.log("Após publicar, validar HTTPS, redirects, HTTP 200 e indexação com a Inspeção de URL do Google.");
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
