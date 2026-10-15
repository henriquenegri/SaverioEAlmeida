import type { Metadata } from "next";
import { getStructuredData, seoConfig, siteDescription, siteTitle } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: seoConfig.siteUrl ? new URL(seoConfig.siteUrl) : undefined,
  title: siteTitle,
  description: siteDescription,
  applicationName: siteTitle,
  alternates: seoConfig.siteUrl ? { canonical: `${seoConfig.siteUrl}/` } : undefined,
  robots: {
    index: seoConfig.indexable,
    follow: true,
    googleBot: { index: seoConfig.indexable, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
    url: seoConfig.siteUrl ? `${seoConfig.siteUrl}/` : undefined,
  },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription },
  verification: { google: seoConfig.googleVerification },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = getStructuredData();
  return <html lang="pt-BR"><body>{structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />}{children}</body></html>;
}
