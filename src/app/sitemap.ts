import type { MetadataRoute } from "next";
import { SITE_URL, WEBSITE_NAV } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return WEBSITE_NAV.map((item) => ({
    url: new URL(item.href, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
