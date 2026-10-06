/**
 * Minimal class-name joiner (clsx-style) so no extra dependency is required.
 * Accepts strings and falsy values; falsy values are dropped.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
