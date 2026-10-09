import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/website/Reveal";
import { SectionHeading } from "@/components/website/SectionHeading";
import { WhatsAppButton } from "@/components/website/ContactActions";
import { getDict } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Interested in joining OM SAI STEAM & LAUNDRY HUB? Get in touch — we'd be happy to meet you.",
  path: "/careers",
});

export default function CareersPage() {
  const dict = getDict();

  return (
    <Section className="pt-14">
      <Reveal>
        <SectionHeading
          as="h1"
          title={dict.careers.title}
          description={dict.careers.description}
        />
      </Reveal>

      <Reveal delayMs={80}>
        <div className="surface mt-8 flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-ink">
              Tell us about yourself
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
              Share your experience and preferred role on WhatsApp — we&apos;ll
              take it from there.
            </p>
          </div>
          <WhatsAppButton
            message="Hello! I'm interested in working at OM SAI STEAM & LAUNDRY HUB."
            label={dict.careers.cta}
            className="w-full shrink-0 sm:w-auto"
          />
        </div>
      </Reveal>
    </Section>
  );
}
