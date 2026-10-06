import siteData from "@/data/site.json";
import type { SiteContent } from "@/types/site";

const site = siteData as SiteContent;

export function getSite(): SiteContent {
  return site;
}
