import { siteConfig } from "@/content/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.links.website,
      lastModified: new Date(),
    },
  ];
}
