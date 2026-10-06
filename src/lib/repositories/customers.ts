import customersData from "@/data/customers.json";
import type { Customer } from "@/types/customer";

const customers = customersData as Customer[];

export function getCustomers(): Customer[] {
  return customers;
}

export function getCustomerById(id: string): Customer | undefined {
  return customers.find((customer) => customer.id === id);
}
