import type { MetadataRoute } from "next";
import { seoConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!seoConfig.siteUrl || !seoConfig.indexable) return [];
  // Section anchors and external publications are not separate pages on this site.
  return [{ url: `${seoConfig.siteUrl}/` }];
}
