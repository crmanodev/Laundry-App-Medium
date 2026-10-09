export type ThemePresetId =
  | "ocean-blue"
  | "emerald-green"
  | "royal-purple"
  | "sunset-orange"
  | "crimson-red";

/** Admin-configurable brand theme (persisted in `data/theme.json`). */
export interface ThemeSettings {
  /** Active preset, or `"custom"` when the colors were edited by hand. */
  presetId: ThemePresetId | "custom";
  /** Brand primary color, hex (`#0878f9`). */
  primary: string;
  /** Brand secondary color, hex (`#08b9e8`). */
  secondary: string;
}

export interface ThemePreset {
  id: ThemePresetId;
  label: string;
  primary: string;
  secondary: string;
}
