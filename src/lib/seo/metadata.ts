import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

export interface BuildMetadataOptions {
  /** Page title without the site-name suffix (added via the root title template). */
  title?: string;
  description?: string;
  /** Route path, e.g. "/about". Used to build the canonical URL. */
  path?: string;
  noIndex?: boolean;
}

/**
 * Central helper so every page gets consistent title/description,
 * canonical URL and Open Graph fields.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const pageDescription = description ?? SITE_DESCRIPTION;
  const url = new URL(path, SITE_URL).toString();

  return {
    title: title ? fullTitle : { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
    description: pageDescription,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
