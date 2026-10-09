import type { ThemePreset, ThemePresetId } from "@/types/theme";

/**
 * The five one-click theme palettes offered in the admin customizer.
 * `ocean-blue` is the OM SAI STEAM & LAUNDRY HUB brand palette.
 */
export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "ocean-blue",
    label: "Ocean Blue",
    primary: "#0878f9",
    secondary: "#08b9e8",
  },
  {
    id: "emerald-green",
    label: "Emerald",
    primary: "#059669",
    secondary: "#10b981",
  },
  {
    id: "royal-purple",
    label: "Royal Purple",
    primary: "#7c3aed",
    secondary: "#a78bfa",
  },
  {
    id: "sunset-orange",
    label: "Sunset",
    primary: "#ea580c",
    secondary: "#f59e0b",
  },
  {
    id: "crimson-red",
    label: "Crimson",
    primary: "#e11d48",
    secondary: "#fb7185",
  },
];

export const DEFAULT_PRESET_ID: ThemePresetId = "ocean-blue";

export function findPreset(id: string | undefined): ThemePreset | undefined {
  return THEME_PRESETS.find((preset) => preset.id === id);
}
