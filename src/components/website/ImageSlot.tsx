import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export interface ImageSlotProps {
  /** Public path, e.g. `/images/steam-press.jpg`. Empty = placeholder. */
  src?: string | null;
  alt: string;
  /** Shown under the icon in placeholder mode. */
  label?: string;
  /** `fill` (object-cover, fills parent) or `trinsic` (fixed aspect box). */
  layout?: "fill" | "box";
  sizes?: string;
  className?: string;
}

/**
 * Image slot for brand imagery. Renders the real photo when `src` is
 * provided; otherwise a branded placeholder ready for final assets —
 * drop files into `public/images/` and pass the path via the data files.
 */
export function ImageSlot({
  src,
  alt,
  label,
  layout = "box",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className,
}: ImageSlotProps) {
  if (src) {
    if (layout === "fill") {
      return (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={cn("object-cover", className)}
        />
      );
    }
    return (
      <Image
        src={src}
        alt={alt}
        width={640}
        height={480}
        sizes={sizes}
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-surface-soft",
        layout === "box" && "aspect-[4/3] w-full",
        layout === "fill" && "absolute inset-0",
        className,
      )}
    >
      <div className="dot-grid absolute inset-0 opacity-60" aria-hidden />
      <div
        className="brand-glow absolute inset-0"
        aria-hidden
        style={{ opacity: 0.7 }}
      />
      <span
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl brand-gradient shadow-[var(--shadow-brand)]"
        aria-hidden
      >
        {/* steam / shirt glyph */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--on-primary)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <path d="M12 3v3M9 3.5c-1.5 2-1.5 3.5 0 5s1.5 3 0 5" />
          <path d="M15 6c-1.5 2-1.5 3.5 0 5s1.5 3 0 5" />
          <path d="M5 17.5c0-1.5 1-2.5 2.5-2.5h9c1.5 0 2.5 1 2.5 2.5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2.5Z" />
        </svg>
      </span>
      {label ? (
        <span className="relative text-xs font-medium tracking-wide text-ink-muted">
          {label}
        </span>
      ) : null}
    </div>
  );
}
