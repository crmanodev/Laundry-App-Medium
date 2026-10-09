import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/website/Reveal";
import { SectionHeading } from "@/components/website/SectionHeading";
import { WhatsAppButton } from "@/components/website/ContactActions";
import { getDict } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about OM SAI STEAM & LAUNDRY HUB — careful fabric handling, straightforward pricing and a proper steam finish.",
  path: "/about",
});

export default function AboutPage() {
  const dict = getDict();
  const { about } = dict;

  return (
    <Section className="pt-14">
      <div className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            as="h1"
            title={about.title}
            description={about.lead}
          />
          <p className="mt-4 max-w-2xl leading-7 text-ink-muted">
            {about.lead2}
          </p>
        </Reveal>

        {/* Brand promise band */}
        <Reveal>
          <div className="brand-gradient relative overflow-hidden rounded-3xl px-6 py-10 shadow-[var(--shadow-brand)] sm:px-10">
            <div className="dot-grid absolute inset-0 opacity-15" aria-hidden />
            <div className="relative max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-on-primary/80">
                Our promise
              </p>
              <p className="mt-3 text-xl font-semibold leading-8 text-on-primary text-balance sm:text-2xl">
                Clean, simple and done right — every single load.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading title={about.valuesTitle} />
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {about.values.map((value, index) => (
              <Reveal key={value.title} delayMs={index * 70}>
                <div className="surface h-full p-6">
                  <span
                    aria-hidden
                    className="brand-gradient flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-on-primary"
                  >
                    {index + 1}
                  </span>
                  <h2 className="mt-4 font-semibold text-ink">
                    {value.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-ink">
                Have laundry that needs care?
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                Message us — we&apos;ll quote before we start.
              </p>
            </div>
            <WhatsAppButton className="w-full sm:w-auto" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
