import ordersData from "@/data/orders.json";
import type { Order, OrderStatus } from "@/types/order";

const orders = ordersData as Order[];

export function getOrders(): Order[] {
  return orders;
}

export function getOrderById(id: string): Order | undefined {
  return orders.find((order) => order.id === id);
}

export function getOrdersByStatus(status: OrderStatus): Order[] {
  return orders.filter((order) => order.status === status);
}

/** Newest orders first. */
export function getRecentOrders(limit = 5): Order[] {
  return [...orders]
    .sort((a, b) => b.placedAt.localeCompare(a.placedAt))
    .slice(0, limit);
}
