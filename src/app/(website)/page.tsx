import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Hero } from "@/components/website/Hero";
import { Reveal } from "@/components/website/Reveal";
import { SectionHeading } from "@/components/website/SectionHeading";
import {
  whatsappLink,
} from "@/components/website/ContactActions";
import { getDict } from "@/lib/i18n";
import { getServices } from "@/lib/repositories/services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  path: "/",
});

/* Small line-icon set for service & feature cards */
const ICON_PATHS = [
  // steam
  "M12 3v3M9 3.5c-1.5 2-1.5 3.5 0 5s1.5 3 0 5M15 6c-1.5 2-1.5 3.5 0 5s1.5 3 0 5M5 17.5c0-1.5 1-2.5 2.5-2.5h9c1.5 0 2.5 1 2.5 2.5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2.5Z",
  // shirt / fabric
  "M8 4 5 6l-2 3 3 1.5V20h12v-9.5L19 9l-2-3-3 2a3 3 0 0 1-6 0L8 4Z",
  // quote tag
  "M7 4h10M7 8h10M7 4c4 0 6 1.5 6 4s-2 4-6 4l7 8",
  // phone
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z",
  // stain / drop
  "M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z",
  // building
  "M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M8 7h4M8 11h4M8 15h4M3 21h18",
];

function FeatureIcon({ index }: { index: number }) {
  return (
    <span
      aria-hidden
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d={ICON_PATHS[index % ICON_PATHS.length]} />
      </svg>
    </span>
  );
}

function StepNumber({ value }: { value: number }) {
  return (
    <span
      aria-hidden
      className="brand-gradient flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-on-primary"
    >
      {value}
    </span>
  );
}

export default function HomePage() {
  const dict = getDict();
  const services = getServices();

  return (
    <>
      <Hero />

      {/* Services */}
      <Section>
        <Reveal>
          <div className="flex flex-col gap-8">
            <SectionHeading
              title={dict.home.services.title}
              description={dict.home.services.subtitle}
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.id} delayMs={index * 60}>
                  <article className="surface surface-hover flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <FeatureIcon index={index} />
                      <span className="rounded-full bg-surface-soft px-2.5 py-0.5 text-xs font-medium text-ink-muted ring-1 ring-line">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-ink">
                      {service.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-ink-muted">
                      {service.description}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-primary">
                      {dict.common.priceOnRequest}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Link
              href="/services"
              className="self-start text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              {dict.home.services.allServicesLink} →
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* Why choose us (anchor: /#why-choose-us) */}
      <section
        id="why-choose-us"
        className="border-y border-line bg-surface/85 py-16"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow={dict.home.whyChooseUs.eyebrow}
              title={dict.home.whyChooseUs.title}
              description={dict.home.whyChooseUs.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dict.home.whyChooseUs.items.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 50}>
                <div className="surface h-full p-6">
                  <FeatureIcon index={index} />
                  <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={dict.home.howItWorks.eyebrow}
            title={dict.home.howItWorks.title}
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {dict.home.howItWorks.steps.map((step, index) => (
            <Reveal key={step.title} delayMs={index * 80}>
              <div className="relative flex h-full flex-col items-start gap-3 rounded-2xl border border-line bg-surface p-6">
                <StepNumber value={index + 1} />
                <h3 className="font-semibold text-ink">{step.title}</h3>
                <p className="text-sm leading-6 text-ink-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Testimonials (placeholder — no invented reviews) */}
      <section className="border-y border-line bg-surface/85 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              title={dict.home.testimonials.title}
              description={dict.home.testimonials.description}
              align="center"
            />
          </Reveal>

          <Reveal delayMs={80}>
            <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 rounded-2xl border border-dashed border-line-strong bg-background p-10 text-center">
              <span
                aria-hidden
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-xl text-primary"
              >
                ★
              </span>
              <p className="text-sm font-semibold text-ink">
                {dict.home.testimonials.placeholder}
              </p>
              <p className="text-xs text-ink-muted">
                {dict.home.testimonials.description}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <Section>
        <Reveal>
          <div className="brand-gradient relative overflow-hidden rounded-3xl px-6 py-12 text-center shadow-[var(--shadow-brand)] sm:px-12">
            <div className="dot-grid absolute inset-0 opacity-15" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-balance text-on-primary">
                {dict.home.cta.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-on-primary opacity-90">
                {dict.home.cta.description}
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={whatsappLink(
                    "Hello! I'd like to place a laundry order with OM SAI STEAM & LAUNDRY HUB.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-surface px-7 text-sm font-semibold text-ink transition-transform hover:brightness-95"
                >
                  {dict.common.whatsapp}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-on-primary/50 px-7 text-sm font-semibold text-on-primary transition-colors hover:bg-on-primary/10"
                >
                  {dict.common.contactUs}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
