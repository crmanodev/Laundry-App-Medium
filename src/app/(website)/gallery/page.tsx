import { Section } from "@/components/shared/Section";
import { ImageSlot } from "@/components/website/ImageSlot";
import { Reveal } from "@/components/website/Reveal";
import { SectionHeading } from "@/components/website/SectionHeading";
import { getDict } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "A look at the work of OM SAI STEAM & LAUNDRY HUB — our photo gallery is coming soon.",
  path: "/gallery",
});

export default function GalleryPage() {
  const dict = getDict();

  return (
    <Section className="pt-14">
      <Reveal>
        <SectionHeading
          as="h1"
          title={dict.gallery.title}
          description={dict.gallery.description}
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.gallery.captions.map((caption, index) => (
          <Reveal key={caption} delayMs={index * 50}>
            <figure className="surface overflow-hidden">
              <ImageSlot
                src={null}
                alt={caption}
                label={dict.gallery.placeholderLabel}
              />
              <figcaption className="px-4 py-3 text-sm text-ink-muted">
                {caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
