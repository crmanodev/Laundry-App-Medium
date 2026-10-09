import fs from "node:fs";
import path from "node:path";
import defaultTheme from "@/data/theme.json";
import type { ThemeSettings } from "@/types/theme";

/**
 * Server-only repository for the persisted theme.
 * Reads/writes `src/data/theme.json` at runtime so admin changes
 * are visible without a rebuild. Do not import from client components.
 */

const THEME_FILE = path.join(process.cwd(), "src", "data", "theme.json");

export function getTheme(): ThemeSettings {
  try {
    const raw = fs.readFileSync(THEME_FILE, "utf8");
    const parsed = JSON.parse(raw) as ThemeSettings;
    if (typeof parsed?.primary === "string" && typeof parsed?.secondary === "string") {
      return parsed;
    }
  } catch {
    // Fall through to the bundled default.
  }
  return defaultTheme as ThemeSettings;
}

export function saveTheme(theme: ThemeSettings): void {
  fs.writeFileSync(THEME_FILE, `${JSON.stringify(theme, null, 2)}\n`, "utf8");
}
