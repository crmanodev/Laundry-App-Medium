import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { getServices } from "@/lib/repositories/services";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatCurrency } from "@/lib/utils/format";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Simple, transparent per-kilo and per-item pricing for all laundry and dry-cleaning services.",
  path: "/pricing",
});

export default function PricingPage() {
  const services = getServices();

  return (
    <Section className="pt-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Pricing
        </h1>
        <p className="mt-4 leading-7 text-zinc-600">
          Straightforward rates with no hidden fees. Bulk orders and recurring
          pickups qualify for additional discounts.
        </p>
      </div>

      <div className="surface mt-10 divide-y divide-zinc-100">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-between gap-6 px-6 py-4"
          >
            <div>
              <p className="font-medium text-zinc-900">{service.name}</p>
              <p className="mt-0.5 text-sm text-zinc-500">
                {service.description}
              </p>
            </div>
            <p className="shrink-0 text-lg font-semibold text-zinc-900">
              {formatCurrency(service.price)}
              <span className="ml-1 text-sm font-normal text-zinc-500">
                / {service.unit}
              </span>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-start gap-3 rounded-xl bg-zinc-900 px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium">Need a custom quote?</p>
          <p className="mt-1 text-sm text-zinc-300">
            Commercial and bulk orders get tailored rates.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-10 items-center rounded-lg bg-white px-4 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          Request a quote
        </Link>
      </div>
    </Section>
  );
}
