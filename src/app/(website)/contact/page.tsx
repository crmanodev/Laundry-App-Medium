import {
  CONTACT_ADDRESS,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  OPENING_HOURS,
} from "@/lib/constants";
import { Section } from "@/components/shared/Section";
import { ContactForm } from "@/components/website/ContactForm";
import { Reveal } from "@/components/website/Reveal";
import { SectionHeading } from "@/components/website/SectionHeading";
import {
  WhatsAppButton,
} from "@/components/website/ContactActions";
import { getDict } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with OM SAI STEAM & LAUNDRY HUB — call, WhatsApp or send a message for quotes and enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  const dict = getDict();
  const { contact } = dict;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_ADDRESS)}`;

  return (
    <Section className="pt-14">
      <Reveal>
        <SectionHeading
          as="h1"
          title={contact.title}
          description={contact.description}
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Form */}
        <Reveal>
          <div className="surface h-full p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>

        {/* Contact details */}
        <div className="flex flex-col gap-4">
          <Reveal delayMs={60}>
            <div className="surface p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold text-ink">
                    {contact.whatsapp.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-ink-muted">
                    {contact.whatsapp.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton
                  message="Hello! I'd like to enquire about your laundry services."
                  className="w-full sm:w-auto"
                />
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="surface p-6">
              <h2 className="font-semibold text-ink">{contact.visit.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                {CONTACT_ADDRESS}
              </p>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {contact.mapNote} →
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={180}>
            <div className="surface p-6">
              <h2 className="font-semibold text-ink">{contact.hours.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                {OPENING_HOURS}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
