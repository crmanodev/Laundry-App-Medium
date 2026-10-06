/** A stock-keeping item used by the admin inventory screen. */
export interface Product {
  id: string;
  name: string;
  category: string;
  /** Current quantity on hand. */
  stock: number;
  unit: string;
  /** Reorder when `stock` falls to or below this value. */
  reorderLevel: number;
  /** Unit cost in USD. */
  price: number;
}
