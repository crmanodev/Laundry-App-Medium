"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { buildThemeTokens } from "@/lib/theme/tokens";
import type { ThemeSettings } from "@/types/theme";

export type ThemeStatus = "idle" | "saving" | "saved" | "error";

interface ThemeContextValue {
  /** Current theme (may be an unsaved live preview). */
  theme: ThemeSettings;
  /** Last persisted theme — used by "Reset". */
  savedTheme: ThemeSettings;
  status: ThemeStatus;
  /** Applies a theme to `<html>` immediately (live preview, not persisted). */
  previewTheme: (theme: ThemeSettings) => void;
  /** Persists the theme via POST /api/theme and applies the result. */
  saveTheme: (theme: ThemeSettings) => Promise<boolean>;
  /** Reverts an unsaved preview back to the last saved theme. */
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyThemeVars(theme: ThemeSettings): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  for (const [name, value] of Object.entries(buildThemeTokens(theme))) {
    root.style.setProperty(name, value);
  }
}

export function ThemeProvider({
  initialTheme,
  children,
}: {
  initialTheme: ThemeSettings;
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeSettings>(initialTheme);
  const [savedTheme, setSavedTheme] = useState<ThemeSettings>(initialTheme);
  const [status, setStatus] = useState<ThemeStatus>("idle");

  // Apply whenever the theme changes (preview or save).
  useEffect(() => {
    applyThemeVars(theme);
  }, [theme]);

  // Reconcile with the server in case the persisted theme changed
  // after this page was rendered/cached.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/theme")
      .then((response) => (response.ok ? response.json() : null))
      .then((remote: ThemeSettings | null) => {
        if (cancelled || !remote?.primary || !remote?.secondary) return;
        const changed =
          remote.primary !== initialTheme.primary ||
          remote.secondary !== initialTheme.secondary;
        if (changed) {
          setTheme(remote);
          setSavedTheme(remote);
        }
      })
      .catch(() => {
        /* offline / API missing — keep current theme */
      });
    return () => {
      cancelled = true;
    };
  }, [initialTheme.primary, initialTheme.secondary]);

  const previewTheme = useCallback((next: ThemeSettings) => {
    setTheme(next);
    setStatus("idle");
  }, []);

  const saveTheme = useCallback(async (next: ThemeSettings) => {
    setStatus("saving");
    try {
      const response = await fetch("/api/theme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(next),
      });
      if (!response.ok) throw new Error("Theme save failed");
      const saved = (await response.json()) as ThemeSettings;
      setTheme(saved);
      setSavedTheme(saved);
      setStatus("saved");
      return true;
    } catch {
      setStatus("error");
      return false;
    }
  }, []);

  const resetTheme = useCallback(() => {
    setTheme(savedTheme);
    setStatus("idle");
  }, [savedTheme]);

  const value = useMemo(
    () => ({ theme, savedTheme, status, previewTheme, saveTheme, resetTheme }),
    [theme, savedTheme, status, previewTheme, saveTheme, resetTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/** Access the live theme state. Must be used inside `ThemeProvider`. */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
