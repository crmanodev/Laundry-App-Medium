import Link from "next/link";
import { getDict } from "@/lib/i18n";
import { CONTACT_PHONE_DISPLAY } from "@/lib/constants";
import {
  CallButton,
  WhatsAppButton,
} from "@/components/website/ContactActions";
import { ImageSlot } from "@/components/website/ImageSlot";

export function Hero() {
  const dict = getDict();

  return (
    // bg-surface/85 — subtle white overlay over the global background art
    <section className="relative overflow-hidden border-b border-line bg-surface/85">
      {/* decorative layers */}
      <div className="brand-glow absolute inset-0" aria-hidden />
      <div
        className="dot-grid absolute inset-x-0 bottom-0 h-40 opacity-50"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />
            {dict.hero.eyebrow}
          </span>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl">
            {dict.hero.title}
          </h1>

          <p className="max-w-xl text-lg leading-8 text-ink-muted">
            {dict.hero.description}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              message="Hello! I'd like to enquire about laundry services at OM SAI STEAM & LAUNDRY HUB."
              className="w-full sm:w-auto"
            />
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              {dict.common.viewServices}
            </Link>
          </div>

          <ul className="flex flex-wrap gap-2 pt-1">
            {dict.hero.trustChips.map((chip) => (
              <li
                key={chip}
                className="rounded-full bg-surface-soft px-3 py-1 text-xs font-medium text-ink-muted ring-1 ring-line"
              >
                {chip}
              </li>
            ))}
          </ul>

          <p className="text-sm text-ink-faint">
            Or call us directly on{" "}
            <a
              href="tel:+919843009971"
              className="font-semibold text-primary hover:underline"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>

        {/* Hero visual — replace placeholder with final brand imagery */}
        <div className="relative hidden lg:block">
          <div className="surface overflow-hidden p-2 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.4)]">
            <ImageSlot
              src={null}
              alt="Freshly steam-pressed clothes at OM SAI STEAM & LAUNDRY HUB"
              label="Steam pressing & finishing"
              className="aspect-[4/3] rounded-xl"
            />
            <div className="flex items-center justify-between gap-3 px-3 py-3">
              <div>
                <p className="text-sm font-semibold text-ink">
                  Ready-to-wear finish
                </p>
                <p className="text-xs text-ink-muted">
                  Washed, dried & steam-pressed with care
                </p>
              </div>
              <CallButton
                label={dict.common.callNow}
                className="h-9 shrink-0 px-4 text-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
