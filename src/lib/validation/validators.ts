/**
 * Dependency-free field validators.
 * A validator returns `null` when valid, or an error message when invalid.
 */
export type Validator<T = string> = (value: T) => string | null;

export const required: Validator = (value) =>
  String(value ?? "").trim().length > 0 ? null : "This field is required.";

export const email: Validator = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    ? null
    : "Enter a valid email address.";

export const minLength =
  (min: number): Validator =>
  (value) =>
    value.trim().length >= min
      ? null
      : `Must be at least ${min} character${min === 1 ? "" : "s"}.`;

export const maxLength =
  (max: number): Validator =>
  (value) =>
    value.trim().length <= max
      ? null
      : `Must be at most ${max} character${max === 1 ? "" : "s"}.`;

/** Indian phone numbers: 10–15 digits, optional +/spaces/dashes. */
export const phone: Validator = (value) =>
  /^\+?[\d\s-]{10,16}$/.test(value.trim())
    ? null
    : "Enter a valid phone number.";

/** Runs validators in order and returns the first error, or `null`. */
export const compose =
  (...validators: Validator[]): Validator =>
  (value) => {
    for (const validate of validators) {
      const error = validate(value);
      if (error) return error;
    }
    return null;
  };
