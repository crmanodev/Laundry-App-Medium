export type ServiceUnit = "kg" | "item" | "load";

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  /**
   * Price per `unit`, or `null` when pricing is provided on request.
   * The website falls back to "Contact Us for Pricing".
   */
  price: number | null;
  unit: ServiceUnit;
  category: string;
  image?: string;
  featured: boolean;
}
