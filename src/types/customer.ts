export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  ordersCount: number;
  /** Lifetime spend in USD. */
  totalSpent: number;
  /** ISO 8601 date string. */
  createdAt: string;
}
