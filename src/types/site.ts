export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

/** Content for the public website hero / footer, stored in `data/site.json`. */
export interface SiteContent {
  name: string;
  tagline: string;
  description: string;
  social: SocialLink[];
}
