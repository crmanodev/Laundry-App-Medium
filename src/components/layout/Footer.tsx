import Link from "next/link";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  OPENING_HOURS,
  SITE_NAME,
  WEBSITE_NAV,
  WHATSAPP_URL,
} from "@/lib/constants";
import { getDict } from "@/lib/i18n";
import { WhatsAppIcon } from "@/components/website/ContactActions";

export function Footer() {
  const dict = getDict();

  return (
    <footer className="border-t border-line bg-surface/85">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="brand-gradient flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-on-primary"
            >
              OS
            </span>
            <span className="text-base font-bold tracking-tight text-ink">
              OM SAI
            </span>
          </span>
          <p className="max-w-xs text-sm leading-6 text-ink-muted">
            {dict.footer.tagline}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold text-ink">
            {dict.common.quickLinks}
          </h3>
          <ul className="mt-3 grid gap-2">
            {WEBSITE_NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-ink">
            {dict.footer.contactTitle}
          </h3>
          <ul className="mt-3 grid gap-2 text-sm text-ink-muted">
            <li>{CONTACT_ADDRESS}</li>
            <li>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {dict.common.whatsapp}
              </a>
            </li>
            {CONTACT_EMAIL ? (
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-primary"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-sm font-semibold text-ink">
            {dict.footer.hoursTitle}
          </h3>
          <p className="mt-3 text-sm leading-6 text-ink-muted">
            {OPENING_HOURS}
          </p>
        </div>
      </div>

      <div className="border-t border-line/70 py-5">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center text-xs text-ink-faint sm:flex-row sm:px-6 sm:text-left">
          <span>
            © {new Date().getFullYear()} {SITE_NAME}. {dict.footer.rights}
          </span>
          <Link href="/admin" className="transition-colors hover:text-primary">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
