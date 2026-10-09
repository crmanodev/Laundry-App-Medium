import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/website/Reveal";
import { SectionHeading } from "@/components/website/SectionHeading";
import { whatsappLink } from "@/components/website/ContactActions";
import { getDict } from "@/lib/i18n";
import { getServices } from "@/lib/repositories/services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore laundry and garment care services from OM SAI STEAM & LAUNDRY HUB: wash & fold, dry cleaning, steam ironing, stain removal, bedding & curtains.",
  path: "/services",
});

export default function ServicesPage() {
  const dict = getDict();
  const services = getServices();

  return (
    <Section className="pt-14">
      <Reveal>
        <SectionHeading
          as="h1"
          title={dict.servicesPage.title}
          description={dict.servicesPage.description}
        />
        <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-faint">
          {dict.servicesPage.priceNote}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.id} delayMs={index * 60}>
            <article className="surface surface-hover flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-ink">
                  {service.name}
                </h2>
                <span className="shrink-0 rounded-full bg-surface-soft px-2.5 py-0.5 text-xs font-medium text-ink-muted ring-1 ring-line">
                  {service.category}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink-muted">
                {service.description}
              </p>
              <p className="mt-5 text-sm font-semibold text-primary">
                {dict.common.priceOnRequest}
              </p>
              <a
                href={whatsappLink(
                  `Hello! I'd like to enquire about "${service.name}" at OM SAI STEAM & LAUNDRY HUB.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-10 items-center justify-center rounded-full border border-line-strong text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                {dict.servicesPage.viewDetails}
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-ink">
              {dict.pricing.customQuote.title}
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
              {dict.pricing.customQuote.description}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-on-primary shadow-[var(--shadow-brand)] transition-colors hover:bg-primary-hover"
          >
            {dict.common.requestQuote}
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
