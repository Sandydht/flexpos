import { UserRole } from "../../entities/user/types";

const now = new Date("2026-03-02").toISOString();
export const userFixture = () => ({
  id: "user-1",
  photoUrl: null,
  username: "user",
  email: "example@email.com",
  phoneNumber: "081234567890",
  fullName: "User 1",
  address: "Valid Address",
  password: "password123",
  roles: ["OWNER", "MANAGER", "STAFF", "CASHIER"] as UserRole[],
  createdAt: now,
  updatedAt: null,
  deletedAt: null,
});
