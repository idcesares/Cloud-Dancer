import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/content/site";
import { templateConfig } from "@/content/template";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.seo.keywords,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.links.website,
    },
  ],
  creator: siteConfig.seo.twitterHandle ?? siteConfig.name,
  generator: `${templateConfig.name} by ${templateConfig.creator.name}`,
  metadataBase: new URL(siteConfig.links.website),
  alternates: {
    canonical: siteConfig.links.website,
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.links.website,
    siteName: siteConfig.name,
    locale: siteConfig.seo.locale,
    type: "website",
    images: siteConfig.seo.ogImage
      ? [
          {
            url: siteConfig.seo.ogImage,
            width: 1200,
            height: 630,
            alt: siteConfig.seo.title,
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: siteConfig.seo.ogImage ? [siteConfig.seo.ogImage] : undefined,
    creator: siteConfig.seo.twitterHandle,
  },
};

export const viewport: Viewport = {
  themeColor: "#f0eee9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
