import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/shared/Section";
import { Hero } from "@/components/website/Hero";
import { getFeaturedServices } from "@/lib/repositories/services";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatCurrency } from "@/lib/utils/format";

export const metadata = buildMetadata();

export default function HomePage() {
  const services = getFeaturedServices();

  return (
    <>
      <Hero />

      <Section>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Popular services
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              The services our customers reach for most often.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.id} className="surface p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium text-zinc-900">{service.name}</h3>
                  <Badge variant="info">{service.category}</Badge>
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {service.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-zinc-900">
                  {formatCurrency(service.price)}{" "}
                  <span className="font-normal text-zinc-500">
                    / {service.unit}
                  </span>
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/services"
            className="self-start text-sm font-medium text-zinc-900 underline-offset-4 hover:underline"
          >
            View all services →
          </Link>
        </div>
      </Section>
    </>
  );
}
