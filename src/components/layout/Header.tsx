import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Navbar } from "@/components/layout/Navbar";
import { SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900"
        >
          {SITE_NAME}
        </Link>

        <Navbar className="hidden md:flex" />

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="inline-flex h-9 items-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Get a quote
          </Link>
        </div>

        <MobileMenu className="md:hidden" />
      </div>
    </header>
  );
}
