import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Navbar } from "@/components/layout/Navbar";
import { SITE_NAME } from "@/lib/constants";
import { getDict } from "@/lib/i18n";
import { CallButton } from "@/components/website/ContactActions";

export function Header() {
  const dict = getDict();

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="brand-gradient flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-on-primary shadow-[var(--shadow-brand)] transition-transform group-hover:scale-105"
          >
            OS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-ink">
              OM SAI
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
              Steam &amp; Laundry Hub
            </span>
          </span>
        </Link>

        <Navbar className="hidden md:flex" />

        <div className="hidden items-center gap-2 md:flex">
          <CallButton
            label={dict.common.call}
            className="h-10 px-4 text-sm"
          />
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-on-primary shadow-[var(--shadow-brand)] transition-colors hover:bg-primary-hover"
          >
            {dict.common.getQuote}
          </Link>
        </div>

        <MobileMenu className="md:hidden" />
      </div>
      <span className="sr-only">{SITE_NAME}</span>
    </header>
  );
}
