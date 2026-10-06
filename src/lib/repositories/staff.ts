import staffData from "@/data/staff.json";
import type { StaffMember } from "@/types/staff";

const staff = staffData as StaffMember[];

export function getStaff(): StaffMember[] {
  return staff;
}

export function getActiveStaff(): StaffMember[] {
  return staff.filter((member) => member.active);
}
