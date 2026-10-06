import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "A look inside Fresh Fold Laundry — our facility, process and the results we deliver.",
  path: "/gallery",
});

const tiles = [
  { src: "/Pic-1.png", caption: "Folded wash & load ready for delivery" },
  { src: "/Pic-2.png", caption: "Industrial washers in action" },
  { src: "/Pic-3.png", caption: "Dry cleaning station" },
  { src: "/Pic-4.png", caption: "Pressing & finishing" },
  { src: "/Pic-5.png", caption: "Sorted and tagged orders" },
  { src: "/Pic-6.png", caption: "Delivery van loading" },
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
        {tiles.map(({ src, caption }) => (
          <figure
            key={src}
            className="overflow-hidden rounded-xl border border-zinc-200 bg-white"
          >
            <div className="relative aspect-[4/3] bg-zinc-100">
              <Image
                src={src}
                alt={caption}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
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
