import type { NextRequest } from "next/server";
import { getTheme, saveTheme } from "@/lib/repositories/theme";
import { isHexColor, normalizeHex } from "@/lib/theme/color";
import { findPreset } from "@/lib/theme/presets";
import type { ThemeSettings } from "@/types/theme";

/** GET /api/theme — current persisted theme. */
export function GET() {
  return Response.json(getTheme());
}

/** POST /api/theme — validate + persist the admin's theme selection. */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { presetId, primary, secondary } = body as Partial<ThemeSettings>;

  if (
    typeof primary !== "string" ||
    typeof secondary !== "string" ||
    !isHexColor(primary) ||
    !isHexColor(secondary)
  ) {
    return Response.json(
      { error: "primary and secondary must be hex colors, e.g. #0878f9." },
      { status: 400 },
    );
  }

  const normalizedPrimary = normalizeHex(primary);
  const normalizedSecondary = normalizeHex(secondary);

  // Store as a preset only when the colors match the preset exactly.
  const preset = findPreset(presetId);
  const settings: ThemeSettings =
    preset &&
    normalizeHex(preset.primary) === normalizedPrimary &&
    normalizeHex(preset.secondary) === normalizedSecondary
      ? {
          presetId: preset.id,
          primary: preset.primary,
          secondary: preset.secondary,
        }
      : {
          presetId: "custom",
          primary: normalizedPrimary,
          secondary: normalizedSecondary,
        };

  try {
    saveTheme(settings);
  } catch {
    return Response.json(
      { error: "Could not persist the theme. Check file permissions." },
      { status: 500 },
    );
  }

  return Response.json(settings);
}
