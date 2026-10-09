import type { ThemeSettings } from "@/types/theme";
import {
  darken,
  isHexColor,
  mix,
  normalizeHex,
  readableTextColor,
  withAlpha,
} from "./color";

/**
 * Builds the brand CSS custom properties for a theme.
 *
 * These are applied as inline `--*` variables on `<html>` (SSR, no flash)
 * and re-applied by `ThemeProvider` whenever the admin previews/saves.
 * Surface/ink/state tokens live in `globals.css` and stay fixed —
 * only the brand colors are admin-configurable.
 */
export function buildThemeTokens(theme: ThemeSettings): Record<string, string> {
  const primary = safeHex(theme.primary, "#0878f9");
  const secondary = safeHex(theme.secondary, "#08b9e8");

  return {
    "--primary": primary,
    "--primary-hover": darken(primary, 0.12),
    "--primary-active": darken(primary, 0.22),
    "--primary-soft": mix(primary, "#ffffff", 0.1),
    "--primary-ring": withAlpha(primary, 0.4),
    "--on-primary": readableTextColor(primary),

    "--secondary": secondary,
    "--secondary-hover": darken(secondary, 0.12),
    "--secondary-soft": mix(secondary, "#ffffff", 0.12),
    "--on-secondary": readableTextColor(secondary),

    "--gradient-brand": `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
    "--gradient-brand-strong": `linear-gradient(135deg, ${darken(primary, 0.05)} 0%, ${darken(secondary, 0.05)} 100%)`,
    "--shadow-brand": `0 14px 34px -14px ${withAlpha(primary, 0.55)}`,
  };
}

function safeHex(value: string, fallback: string): string {
  if (!isHexColor(value)) return fallback;
  return normalizeHex(value);
}
