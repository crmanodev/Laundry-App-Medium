import { cn } from "@/lib/utils/cn";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Heading level for a11y — `h1` on pages, `h2` in sections (default). */
  as?: "h1" | "h2";
  className?: string;
}

/** Consistent eyebrow + title + description block for pages and sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "mt-2 font-semibold tracking-tight text-ink text-balance",
          Tag === "h1"
            ? "text-3xl sm:text-4xl"
            : "text-2xl sm:text-3xl",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p className="mt-3 text-base leading-7 text-ink-muted">{description}</p>
      ) : null}
    </div>
  );
}
