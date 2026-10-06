import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/shared/Section";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join the Fresh Fold Laundry team — open roles for attendants, drivers and operators.",
  path: "/careers",
});

const openings = [
  {
    title: "Laundry Attendant",
    type: "Full-time",
    location: "Springfield, CA",
    description:
      "Operate washers and dryers, fold and pack orders, and keep the production floor spotless.",
  },
  {
    title: "Delivery Driver",
    type: "Full-time",
    location: "Springfield, CA",
    description:
      "Pick up and deliver customer orders on schedule while providing a friendly front-door experience.",
  },
  {
    title: "Customer Support Specialist",
    type: "Part-time",
    location: "Remote / Hybrid",
    description:
      "Answer customer questions over chat and phone, manage order changes and escalate issues.",
  },
];

export default function CareersPage() {
  return (
    <Section className="pt-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Careers
        </h1>
        <p className="mt-4 leading-7 text-zinc-600">
          We&apos;re growing! If you take pride in clean work and happy
          customers, we&apos;d love to meet you.
        </p>
      </div>

      <div className="mt-10 grid gap-4">
        {openings.map((opening) => (
          <article
            key={opening.title}
            className="surface flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-medium text-zinc-900">{opening.title}</h2>
                <Badge variant="success">{opening.type}</Badge>
                <Badge>{opening.location}</Badge>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                {opening.description}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              Apply now
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
