import type { MetadataRoute } from "next";
import { seoConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    // Keep crawling available so Google can read noindex on staging builds.
    rules: { userAgent: "*", allow: "/" },
    sitemap: seoConfig.indexable ? `${seoConfig.siteUrl}/sitemap.xml` : undefined,
  };
}
