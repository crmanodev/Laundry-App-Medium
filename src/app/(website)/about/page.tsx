import { Section } from "@/components/shared/Section";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Fresh Fold Laundry — our story, our mission and the values behind our 24-hour laundry service.",
  path: "/about",
});

const values = [
  {
    title: "Quality first",
    description:
      "Every garment is inspected, sorted and treated individually before it enters a machine.",
  },
  {
    title: "Transparent pricing",
    description:
      "No hidden fees. You see the price per kilo or per item before you confirm an order.",
  },
  {
    title: "Sustainable care",
    description:
      "Eco-friendly detergents, low-energy machines and reusable packaging on every delivery.",
  },
];

const stats = [
  { value: "10k+", label: "Orders delivered" },
  { value: "24h", label: "Average turnaround" },
  { value: "4.9/5", label: "Customer rating" },
];

export default function AboutPage() {
  return (
    <Section className="pt-12">
      <div className="flex flex-col gap-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
            About us
          </h1>
          <p className="mt-4 leading-7 text-zinc-600">
            Fresh Fold Laundry started as a single washer and a promise: give
            people their time back. Today we clean thousands of garments every
            week with the same care, combining modern machines with a
            detail-obsessed team.
          </p>
          <p className="mt-4 leading-7 text-zinc-600">
            From wash &amp; fold to delicate dry cleaning, we treat every order
            as if it were our own — and deliver it back fresh, on time, every
            time.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="surface p-5 text-center">
              <p className="text-3xl font-semibold tracking-tight text-zinc-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
            Our values
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="surface p-5">
                <h3 className="font-medium text-zinc-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
