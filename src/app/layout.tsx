import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { getTheme } from "@/lib/repositories/theme";
import { buildThemeTokens } from "@/lib/theme/tokens";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // SSR the active theme as inline CSS variables — zero flash of default colors.
  const themeVars = buildThemeTokens(getTheme()) as CSSProperties;

  return (
    <html
      lang="en"
      style={themeVars}
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/*
         * Global decorative background ("Fresh Laundry Waves and Sparkles").
         * Mounted once here so every route (website, admin, 404) inherits it.
         * `.app-background` in globals.css makes it a fixed, non-interactive
         * (pointer-events: none, aria-hidden) layer that preserves the PNG's
         * transparency and adapts to desktop/mobile viewports.
         */}
        <div className="app-background" aria-hidden="true">
          <Image
            src="/Fresh%20Laundry%20Waves%20and%20Sparkles.png"
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className="app-background__image"
          />
        </div>
        <ThemeProvider initialTheme={getTheme()}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
