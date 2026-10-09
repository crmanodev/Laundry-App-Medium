/**
 * i18n-ready dictionary access.
 *
 * English (`en`) is the default and the only locale shipped today;
 * Tamil (`ta`) can be added later by:
 *   1. creating `src/locales/ta.json` with the same shape as `en.json`
 *   2. importing it here and mapping it in `dictionaries`
 *   3. resolving the locale (e.g. from a cookie or `?lang=` param)
 *      inside `getLocale()`
 *
 * Consumers import `getDict()` (server or client — it's a static map)
 * and read typed, nested keys, e.g. `dict.hero.title`. Missing keys in
 * a future locale fall back to English automatically via `getDict`.
 *
 * Language selection is intentionally independent of theme selection
 * (theme lives in `theme.json` + ThemeProvider; locale lives here).
 */
import en from "@/locales/en.json";

export const SUPPORTED_LOCALES = ["en", "ta"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** The shape every locale file must match (derived from the English file). */
export type Dictionary = typeof en;

const dictionaries: Partial<Record<Locale, Dictionary>> = {
  en,
  // ta: ta, — enable when src/locales/ta.json lands.
};

/**
 * Resolves the active locale.
 * PENDING: read a user-selected cookie / search param once the
 * language switcher ships; English is served meanwhile.
 */
export function getLocale(): Locale {
  return DEFAULT_LOCALE;
}

/** Returns the dictionary for a locale, falling back to English. */
export function getDict(locale: Locale = getLocale()): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE] ?? en;
}
