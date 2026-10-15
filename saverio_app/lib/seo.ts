import { getSeoConfig } from "./seo-config.mjs";
import { contact } from "./site-content";

export const seoConfig = getSeoConfig();
export const siteTitle = "Renato Saverio · Advocacia Criminal";
export const siteDescription = "Atuação em Direito Penal e defesa criminal com ética, responsabilidade e atenção individualizada. Dr. Renato Saverio Souza Costa — OAB/SP 244.018.";

export function getStructuredData() {
  const base = seoConfig.siteUrl;
  if (!base) return null;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: siteTitle,
        alternateName: "Renato Saverio",
        inLanguage: "pt-BR",
        publisher: { "@id": `${base}/#renato-saverio` },
      },
      {
        "@type": "Person",
        "@id": `${base}/#renato-saverio`,
        name: "Renato Saverio Souza Costa",
        jobTitle: "Advogado",
        telephone: contact.phoneHref.replace("tel:", ""),
        identifier: "OAB/SP 244.018",
        url: `${base}/#escritorio`,
        image: `${base}/src/imagemPessoal.webp`,
        knowsAbout: ["Direito Penal", "Defesa criminal"],
      },
    ],
  };
}
