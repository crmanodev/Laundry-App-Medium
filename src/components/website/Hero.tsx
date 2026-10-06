import Link from "next/link";
import { getSite } from "@/lib/repositories/site";

export function Hero() {
  const site = getSite();

  return (
    <section className="bg-zinc-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-20 sm:px-6 lg:py-28">
        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium tracking-wide text-white">
          Free pickup & delivery
        </span>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 text-balance sm:text-5xl">
          {site.tagline}
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600">
          {site.description}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Explore services
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
