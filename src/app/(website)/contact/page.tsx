import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
} from "@/lib/constants";
import { Section } from "@/components/shared/Section";
import { ContactForm } from "@/components/website/ContactForm";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Fresh Fold Laundry — request a quote, ask a question or schedule a free pickup.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section className="pt-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Contact us
        </h1>
        <p className="mt-4 leading-7 text-zinc-600">
          Have a question or want a custom quote? Send us a message and
          we&apos;ll respond within one business day.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="surface p-6">
          <ContactForm />
        </div>

        <div className="flex flex-col gap-4">
          <div className="surface p-6">
            <h2 className="font-medium text-zinc-900">Visit our store</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {CONTACT_ADDRESS}
            </p>
          </div>
          <div className="surface p-6">
            <h2 className="font-medium text-zinc-900">Call or email</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="transition-colors hover:text-zinc-900"
              >
                {CONTACT_PHONE}
              </a>
              <br />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-zinc-900"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          <div className="surface p-6">
            <h2 className="font-medium text-zinc-900">Opening hours</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Mon–Sat: 8:00 AM – 8:00 PM
              <br />
              Sun: 10:00 AM – 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
