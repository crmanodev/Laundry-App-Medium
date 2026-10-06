export type OrderStatus =
  | "pending"
  | "processing"
  | "washing"
  | "ready"
  | "delivered"
  | "cancelled";

export interface OrderItem {
  serviceId: string;
  name: string;
  quantity: number;
  /** Unit price in USD at the time of order. */
  unitPrice: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  items: OrderItem[];
  status: OrderStatus;
  /** Order total in USD. */
  total: number;
  /** ISO 8601 date strings. */
  placedAt: string;
  dueAt: string;
}
