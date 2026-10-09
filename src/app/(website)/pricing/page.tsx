import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/website/Reveal";
import { SectionHeading } from "@/components/website/SectionHeading";
import { getDict } from "@/lib/i18n";
import { getServices } from "@/lib/repositories/services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Straightforward, on-request pricing for laundry and garment care at OM SAI STEAM & LAUNDRY HUB — ask us for a quick quote.",
  path: "/pricing",
});

export default function PricingPage() {
  const dict = getDict();
  const services = getServices();

  return (
    <Section className="pt-14">
      <Reveal>
        <SectionHeading
          as="h1"
          title={dict.pricing.title}
          description={dict.pricing.description}
        />
      </Reveal>

      <Reveal delayMs={60}>
        <div className="surface mt-10 overflow-hidden">
          <div className="border-b border-line bg-surface-soft px-6 py-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
              {dict.pricing.listTitle}
            </h2>
          </div>
          <ul className="divide-y divide-line">
            {services.map((service) => (
              <li
                key={service.id}
                className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="font-semibold text-ink">{service.name}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">
                    {service.description}
                  </p>
                </div>
                <p className="shrink-0 text-sm font-semibold text-primary">
                  {dict.common.priceOnRequest}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delayMs={100}>
        <div className="brand-gradient mt-8 flex flex-col items-start gap-4 rounded-2xl px-6 py-6 text-on-primary shadow-[var(--shadow-brand)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">{dict.pricing.customQuote.title}</p>
            <p className="mt-1 text-sm opacity-90">
              {dict.pricing.customQuote.description}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-surface px-5 text-sm font-semibold text-ink transition-transform hover:brightness-95"
          >
            {dict.common.requestQuote}
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
