import servicesData from "@/data/services.json";
import type { Service } from "@/types/service";

const services = servicesData as Service[];

export function getServices(): Service[] {
  return services;
}

export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
