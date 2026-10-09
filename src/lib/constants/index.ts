import type { OrderStatus } from "@/types/order";
import type { NavLink } from "@/types/site";

// TODO: replace with your production URL before deploying.
export const SITE_URL = "https://laundry-app-medium.vercel.app";

export const SITE_NAME = "OM SAI STEAM & LAUNDRY HUB";

export const SITE_DESCRIPTION =
  "OM SAI STEAM & LAUNDRY HUB — professional steam laundry, wash & fold, dry cleaning, ironing and stain care for homes and businesses. Message or call us on +91 98430 09971.";

/* ------------------------------------------------------------------ */
/* Contact details — single source of truth.                          */
/* PENDING: address & opening hours to be provided by the business.   */
/* ------------------------------------------------------------------ */

/** Raw digits for `tel:` links. */
export const CONTACT_PHONE = "+919843009971";
/** Formatted for display, e.g. "+91 98430 09971". */
export const CONTACT_PHONE_DISPLAY = "+91 98430 09971";
/** Digits (country code included) for wa.me links. */
export const WHATSAPP_NUMBER = "919843009971";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * PENDING: exact shop address from the business.
 * Replace this single value once provided — footer, contact page and
 * maps link all read from here.
 */
export const CONTACT_ADDRESS =
  "[Shop address — to be provided by the business]";

/** Optional email; rendered only when non-empty. */
export const CONTACT_EMAIL = "";

/**
 * PENDING: opening hours from the business.
 * Read by the footer and contact page.
 */
export const OPENING_HOURS =
  "[Opening hours — to be provided by the business]";

export const WEBSITE_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
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
