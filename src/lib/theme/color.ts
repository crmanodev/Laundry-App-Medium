/**
 * Dependency-free color math used to derive the full theme token set
 * from just two brand colors (primary + secondary).
 *
 * Pure functions only — safe to import from client and server code.
 */

export interface Rgb {
  r: number;
  g: number;
  b: number;
}

const HEX_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

/** Returns true when the value is a 3- or 6-digit hex color, e.g. `#0878f9`. */
export function isHexColor(value: string): boolean {
  return HEX_PATTERN.test(value.trim());
}

/** Normalizes `#abc` → `#aabbcc` and lowercases. Throws on invalid input. */
export function normalizeHex(value: string): string {
  const trimmed = value.trim().toLowerCase();
  if (!HEX_PATTERN.test(trimmed)) {
    throw new Error(`Invalid hex color: ${value}`);
  }
  if (trimmed.length === 4) {
    return `#${trimmed[1]}${trimmed[1]}${trimmed[2]}${trimmed[2]}${trimmed[3]}${trimmed[3]}`;
  }
  return trimmed;
}

export function hexToRgb(hex: string): Rgb {
  const normalized = normalizeHex(hex);
  return {
    r: Number.parseInt(normalized.slice(1, 3), 16),
    g: Number.parseInt(normalized.slice(3, 5), 16),
    b: Number.parseInt(normalized.slice(5, 7), 16),
  };
}

export function rgbToHex({ r, g, b }: Rgb): string {
  const channel = (value: number) =>
    Math.round(Math.min(255, Math.max(0, value)))
      .toString(16)
      .padStart(2, "0");
  return `#${channel(r)}${channel(g)}${channel(b)}`;
}

/**
 * Mixes two hex colors.
 * @param weightOfA how much of color `a` to keep (0–1).
 */
export function mix(a: string, b: string, weightOfA: number): string {
  const w = Math.min(1, Math.max(0, weightOfA));
  const ca = hexToRgb(a);
  const cb = hexToRgb(b);
  return rgbToHex({
    r: ca.r * w + cb.r * (1 - w),
    g: ca.g * w + cb.g * (1 - w),
    b: ca.b * w + cb.b * (1 - w),
  });
}

/** Darkens a color by blending it toward black (amount 0–1). */
export function darken(hex: string, amount: number): string {
  return mix(hex, "#000000", 1 - amount);
}

/** Lightens a color by blending it toward white (amount 0–1). */
export function lighten(hex: string, amount: number): string {
  return mix(hex, "#ffffff", amount);
}

/** Returns an `rgba(...)` string for the hex color with the given alpha. */
export function withAlpha(hex: string, alpha: number): string {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${Math.min(1, Math.max(0, alpha))})`;
}

/** WCAG relative luminance (0 = black, 1 = white). */
export function relativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const linear = (channel: number) => {
    const c = channel / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
}

/**
 * Picks white or near-black text so labels stay readable on any brand color.
 * Threshold chosen for comfortable contrast (≈4.5:1) on both light and dark hues.
 */
export function readableTextColor(background: string): string {
  return relativeLuminance(background) > 0.42 ? "#0b1220" : "#ffffff";
}
