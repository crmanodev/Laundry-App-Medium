import { Section } from "@/components/shared/Section";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "A look inside Fresh Fold Laundry — our facility, process and the results we deliver.",
  path: "/gallery",
});

const tiles = [
  "Folded wash & load ready for delivery",
  "Industrial washers in action",
  "Dry cleaning station",
  "Pressing & finishing",
  "Sorted and tagged orders",
  "Delivery van loading",
];

export default function GalleryPage() {
  return (
    <Section className="pt-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Gallery
        </h1>
        <p className="mt-4 leading-7 text-zinc-600">
          A peek behind the scenes at how we care for your clothes.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((caption, index) => (
          <figure
            key={caption}
            className="overflow-hidden rounded-xl border border-zinc-200 bg-white"
          >
            {/* Boilerplate: replace with next/image once real photos exist. */}
            <div className="flex aspect-[4/3] items-center justify-center bg-zinc-100 text-sm text-zinc-400">
              Photo {index + 1}
            </div>
            <figcaption className="px-4 py-3 text-sm text-zinc-600">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
