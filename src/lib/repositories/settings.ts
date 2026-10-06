import settingsData from "@/data/settings.json";
import type { Settings } from "@/types/settings";

const settings = settingsData as Settings;

export function getSettings(): Settings {
  return settings;
}
