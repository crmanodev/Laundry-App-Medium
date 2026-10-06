"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SuccessModal } from "@/components/ui/SuccessModal";
import { Textarea } from "@/components/ui/Textarea";
import { compose, email as emailValidator, minLength, required } from "@/lib/validation/validators";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [successOpen, setSuccessOpen] = useState(false);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameValidator = compose(required, minLength(2));
    const messageValidator = compose(required, minLength(10));

    const nextErrors: FieldErrors = {};
    const nameError = nameValidator(values.name);
    const emailError = compose(required, emailValidator)(values.email);
    const messageError = messageValidator(values.message);

    if (nameError) nextErrors.name = nameError;
    if (emailError) nextErrors.email = emailError;
    if (messageError) nextErrors.message = messageError;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    // Boilerplate: replace with a server action / API call.
    setValues(initialValues);
    setSuccessOpen(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="grid gap-4">
        <Input
          name="name"
          label="Full name"
          placeholder="Jane Doe"
          value={values.name}
          error={errors.name}
          onChange={(event) => updateField("name", event.target.value)}
        />
        <Input
          name="email"
          type="email"
          label="Email address"
          placeholder="jane@example.com"
          value={values.email}
          error={errors.email}
          onChange={(event) => updateField("email", event.target.value)}
        />
        <Textarea
          name="message"
          label="How can we help?"
          placeholder="Tell us about your laundry needs..."
          value={values.message}
          error={errors.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
        <Button type="submit" className="justify-self-start">
          Send message
        </Button>
      </form>

      <SuccessModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        title="Message sent"
        message="Thanks for reaching out! We'll get back to you within one business day."
      />
    </>
  );
}
