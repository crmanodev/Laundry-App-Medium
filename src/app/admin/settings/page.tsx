"use client";

import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ThemeCustomizer } from "@/components/admin/ThemeCustomizer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { getSettings } from "@/lib/repositories/settings";

export default function AdminSettingsPage() {
  const settings = getSettings();
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Boilerplate: replace with a server action / API call to persist.
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="grid max-w-4xl gap-6">
      <div className="max-w-2xl">
        <PageHeader
          title="Settings"
          description="Business details used across the app and on the website."
        />
      </div>

      {/* Theme — live preview + persistence */}
      <ThemeCustomizer />

      <form onSubmit={handleSubmit} className="surface grid max-w-2xl gap-4 p-6">
        <h2 className="font-semibold text-ink">Business details</h2>
        <Input
          name="businessName"
          label="Business name"
          defaultValue={settings.businessName}
        />
        <Input
          name="supportEmail"
          type="email"
          label="Support email"
          defaultValue={settings.supportEmail}
          placeholder="Optional"
        />
        <Input
          name="supportPhone"
          label="Support phone"
          defaultValue={settings.supportPhone}
        />
        <Input
          name="address"
          label="Address"
          defaultValue={settings.address}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            name="currency"
            label="Currency"
            defaultValue={settings.currency}
          />
          <Input
            name="timezone"
            label="Timezone"
            defaultValue={settings.timezone}
          />
        </div>
        <Input
          name="openingHours"
          label="Opening hours"
          defaultValue={settings.openingHours}
        />
        <Input
          name="orderPrefix"
          label="Order number prefix"
          defaultValue={settings.orderPrefix}
        />

        <div className="mt-2 flex items-center gap-3">
          <Button type="submit">Save changes</Button>
          {saved ? (
            <span className="text-sm font-medium text-success">
              Settings saved.
            </span>
          ) : null}
        </div>
      </form>
    </div>
  );
}
