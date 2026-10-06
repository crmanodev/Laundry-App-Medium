import type { OrderStatus } from "@/types/order";
import type { NavLink } from "@/types/site";

// TODO: replace with your production URL before deploying.
export const SITE_URL = "https://laundry-app-medium.vercel.app";

export const SITE_NAME = "Fresh Fold Laundry";

export const SITE_DESCRIPTION =
  "Fresh Fold Laundry is a full-service laundry, dry-cleaning and garment care platform — wash & fold, ironing, stain removal and free pickup and delivery.";

export const CONTACT_EMAIL = "hello@freshfold.example";
export const CONTACT_PHONE = "+1 (555) 010-2030";
export const CONTACT_ADDRESS = "123 Market Street, Springfield, CA 90210";

export const WEBSITE_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const ADMIN_NAV: NavLink[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "Customers", href: "/admin/customers" },
  { label: "Orders", href: "/admin/orders" },
  { label: "Services", href: "/admin/services" },
  { label: "Staff", href: "/admin/staff" },
  { label: "Expenses", href: "/admin/expenses" },
  { label: "Inventory", href: "/admin/inventory" },
  { label: "Settings", href: "/admin/settings" },
];

export const ORDER_STATUSES: OrderStatus[] = [
  "pending",
  "processing",
  "washing",
  "ready",
  "delivered",
  "cancelled",
];
