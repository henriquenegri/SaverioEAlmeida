/** @param {Record<string, string | undefined>} env */
export function getSeoConfig(env = process.env) {
  const rawUrl = env.SITE_URL?.trim();
  let siteUrl;

  if (rawUrl) {
    const parsed = new URL(rawUrl);
    if (
      parsed.protocol !== "https:" || parsed.username || parsed.password ||
      parsed.pathname !== "/" || parsed.search || parsed.hash || parsed.port ||
      !parsed.hostname.includes(".") ||
      /^(localhost|127\.|0\.|192\.168\.|10\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.)/i.test(parsed.hostname) ||
      /\.(local|localhost|test|invalid)$/i.test(parsed.hostname)
    ) {
      throw new Error("SITE_URL deve ser a origem HTTPS do domínio público, sem caminho, porta ou parâmetros.");
    }
    siteUrl = parsed.origin;
  }

  const indexable = Boolean(siteUrl && env.SITE_INDEXABLE === "true" && env.VERCEL_ENV !== "preview" && env.NODE_ENV !== "development");
  return { siteUrl, indexable, googleVerification: env.GOOGLE_SITE_VERIFICATION?.trim() || undefined };
}
