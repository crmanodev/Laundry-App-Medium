"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/providers/ThemeProvider";
import { THEME_PRESETS } from "@/lib/theme/presets";
import { cn } from "@/lib/utils/cn";
import type { ThemePresetId, ThemeSettings } from "@/types/theme";

/**
 * Admin theme controls: preset palette picker + custom brand colors
 * with instant live preview and persistence (POST /api/theme).
 */
export function ThemeCustomizer() {
  const { theme, savedTheme, status, previewTheme, saveTheme, resetTheme } =
    useTheme();
  const [customPrimary, setCustomPrimary] = useState(theme.primary);
  const [customSecondary, setCustomSecondary] = useState(theme.secondary);

  const applyPreset = (presetId: ThemePresetId) => {
    const preset = THEME_PRESETS.find((item) => item.id === presetId);
    if (!preset) return;
    const next: ThemeSettings = {
      presetId: preset.id,
      primary: preset.primary,
      secondary: preset.secondary,
    };
    setCustomPrimary(preset.primary);
    setCustomSecondary(preset.secondary);
    previewTheme(next);
  };

  const applyCustom = (primary: string, secondary: string) => {
    setCustomPrimary(primary);
    setCustomSecondary(secondary);
    previewTheme({ presetId: "custom", primary, secondary });
  };

  const handleSave = async () => {
    await saveTheme(theme);
  };

  const isDirty =
    theme.primary !== savedTheme.primary ||
    theme.secondary !== savedTheme.secondary;

  return (
    <div className="surface grid gap-6 p-6">
      <div>
        <h2 className="font-semibold text-ink">Website theme</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Choose a palette or set your own brand colors. Changes preview
          instantly across the app and persist when saved.
        </p>
      </div>

      {/* Presets */}
      <div>
        <p className="text-sm font-medium text-ink-muted">Palette presets</p>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {THEME_PRESETS.map((preset) => {
            const active = theme.presetId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset.id)}
                aria-pressed={active}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-3 text-left transition-colors",
                  active
                    ? "border-primary bg-primary-soft"
                    : "border-line hover:border-line-strong",
                )}
              >
                <span className="flex shrink-0 -space-x-1.5" aria-hidden>
                  <span
                    className="h-6 w-6 rounded-full ring-2 ring-surface"
                    style={{ backgroundColor: preset.primary }}
                  />
                  <span
                    className="h-6 w-6 rounded-full ring-2 ring-surface"
                    style={{ backgroundColor: preset.secondary }}
                  />
                </span>
                <span className="text-sm font-medium text-ink">
                  {preset.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom colors */}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex items-center gap-3 rounded-xl border border-line p-3">
          <input
            type="color"
            value={customPrimary}
            onChange={(event) =>
              applyCustom(event.target.value, customSecondary)
            }
            className="h-9 w-9 cursor-pointer rounded border-0 bg-transparent p-0"
            aria-label="Primary brand color"
          />
          <span className="flex flex-col">
            <span className="text-sm font-medium text-ink">Primary</span>
            <span className="text-xs uppercase text-ink-faint">
              {customPrimary}
            </span>
          </span>
        </label>

        <label className="flex items-center gap-3 rounded-xl border border-line p-3">
          <input
            type="color"
            value={customSecondary}
            onChange={(event) => applyCustom(customPrimary, event.target.value)}
            className="h-9 w-9 cursor-pointer rounded border-0 bg-transparent p-0"
            aria-label="Secondary brand color"
          />
          <span className="flex flex-col">
            <span className="text-sm font-medium text-ink">Secondary</span>
            <span className="text-xs uppercase text-ink-faint">
              {customSecondary}
            </span>
          </span>
        </label>
      </div>

      {/* Live preview strip */}
      <div className="rounded-xl border border-line bg-background p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
          Live preview
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="brand-gradient inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold text-on-primary">
            Primary action
          </span>
          <span className="inline-flex h-9 items-center rounded-full bg-primary-soft px-4 text-sm font-semibold text-primary">
            Soft accent
          </span>
          <span className="inline-flex h-9 items-center rounded-full bg-secondary px-4 text-sm font-semibold text-on-secondary">
            Secondary
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        <Button
          onClick={handleSave}
          disabled={!isDirty || status === "saving"}
        >
          {status === "saving" ? "Saving…" : "Save theme"}
        </Button>
        <Button variant="outline" onClick={resetTheme} disabled={!isDirty}>
          Reset
        </Button>
        {status === "saved" ? (
          <span className="text-sm font-medium text-success">
            Theme saved — live site updated.
          </span>
        ) : null}
        {status === "error" ? (
          <span role="alert" className="text-sm font-medium text-danger">
            Could not save. Check server permissions on src/data/theme.json.
          </span>
        ) : null}
      </div>
    </div>
  );
}