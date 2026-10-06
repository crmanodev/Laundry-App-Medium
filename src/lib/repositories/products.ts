import productsData from "@/data/products.json";
import type { Product } from "@/types/product";

const products = productsData as Product[];

export function getProducts(): Product[] {
  return products;
}

export function getLowStockProducts(): Product[] {
  return products.filter((product) => product.stock <= product.reorderLevel);
}
