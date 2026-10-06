export interface Settings {
  businessName: string;
  supportEmail: string;
  supportPhone: string;
  address: string;
  /** ISO 4217 currency code used for display. */
  currency: string;
  timezone: string;
  openingHours: string;
  /** Prefix used when generating order numbers, e.g. "FF-1001". */
  orderPrefix: string;
}
