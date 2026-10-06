import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/shared/Section";
import { getServices } from "@/lib/repositories/services";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatCurrency } from "@/lib/utils/format";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore our laundry and garment care services: wash & fold, dry cleaning, ironing, stain removal and more.",
  path: "/services",
});

export default function ServicesPage() {
  const services = getServices();

  return (
    <Section className="pt-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Our services
        </h1>
        <p className="mt-4 leading-7 text-zinc-600">
          Everything from everyday laundry to delicate garment care — priced
          transparently and returned fresh.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            className="surface flex flex-col p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-medium text-zinc-900">{service.name}</h2>
              <Badge variant="info">{service.category}</Badge>
            </div>
            <p className="mt-3 flex-1 text-sm leading-6 text-zinc-500">
              {service.description}
            </p>
            <p className="mt-5 text-lg font-semibold text-zinc-900">
              {formatCurrency(service.price)}
              <span className="ml-1 text-sm font-normal text-zinc-500">
                / {service.unit}
              </span>
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
