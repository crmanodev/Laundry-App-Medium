"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SuccessModal } from "@/components/ui/SuccessModal";
import { Textarea } from "@/components/ui/Textarea";
import { getDict } from "@/lib/i18n";
import {
  compose,
  minLength,
  phone as phoneValidator,
  required,
} from "@/lib/validation/validators";

interface FormValues {
  name: string;
  phone: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", phone: "", message: "" };

export function ContactForm() {
  const dict = getDict();
  const form = dict.contact.form;

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [successOpen, setSuccessOpen] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameValidator = compose(required, minLength(2));
    const messageValidator = compose(required, minLength(10));

    const nextErrors: FieldErrors = {};
    const nameError = nameValidator(values.name);
    const phoneError = compose(required, phoneValidator)(values.phone);
    const messageError = messageValidator(values.message);

    if (nameError) nextErrors.name = nameError;
    if (phoneError) nextErrors.phone = phoneError;
    if (messageError) nextErrors.message = messageError;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Contact request failed");

      setValues(initialValues);
      setSuccessOpen(true);
    } catch {
      setSubmitError(form.errorFallback);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="grid gap-4">
        <Input
          name="name"
          label={form.nameLabel}
          placeholder={form.namePlaceholder}
          autoComplete="name"
          value={values.name}
          error={errors.name}
          onChange={(event) => updateField("name", event.target.value)}
        />
        <Input
          name="phone"
          type="tel"
          label={form.phoneLabel}
          placeholder={form.phonePlaceholder}
          autoComplete="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(event) => updateField("phone", event.target.value)}
        />
        <Textarea
          name="message"
          label={form.messageLabel}
          placeholder={form.messagePlaceholder}
          value={values.message}
          error={errors.message}
          onChange={(event) => updateField("message", event.target.value)}
        />

        <p className="text-xs leading-5 text-ink-faint">{form.privacyNote}</p>

        {submitError ? (
          <p role="alert" className="text-sm font-medium text-danger">
            {submitError}
          </p>
        ) : null}

        <Button
          type="submit"
          disabled={submitting}
          className="justify-self-start rounded-full px-6"
        >
          {submitting ? "…" : dict.common.sendMessage}
        </Button>
      </form>

      <SuccessModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        title={form.successTitle}
        message={form.successMessage}
      />
    </>
  );
}
