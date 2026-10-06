export type StaffRole = "manager" | "attendant" | "driver" | "operator";

export type Shift = "morning" | "afternoon" | "evening";

export interface StaffMember {
  id: string;
  name: string;
  role: StaffRole;
  email: string;
  phone: string;
  shift: Shift;
  active: boolean;
}
