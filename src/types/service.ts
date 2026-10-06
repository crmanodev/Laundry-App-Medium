export type ServiceUnit = "kg" | "item" | "load";

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  /** Price per `unit`. */
  price: number;
  unit: ServiceUnit;
  category: string;
  image?: string;
  featured: boolean;
}
