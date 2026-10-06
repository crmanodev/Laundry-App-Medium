import Link from "next/link";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_DESCRIPTION,
  SITE_NAME,
  WEBSITE_NAV,
} from "@/lib/constants";
import { getSite } from "@/lib/repositories/site";

export function Footer() {
  const site = getSite();

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div className="flex flex-col gap-3">
          <span className="text-lg font-semibold text-zinc-900">
            {SITE_NAME}
          </span>
          <p className="max-w-sm text-sm leading-6 text-zinc-500">
            {SITE_DESCRIPTION}
          </p>
          <div className="flex gap-3">
            {site.social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-900">Quick links</h3>
          <ul className="mt-3 grid gap-2">
            {WEBSITE_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-900">Contact</h3>
          <ul className="mt-3 grid gap-2 text-sm text-zinc-500">
            <li>{CONTACT_ADDRESS}</li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-zinc-900"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="transition-colors hover:text-zinc-900"
              >
                {CONTACT_PHONE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-100 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
