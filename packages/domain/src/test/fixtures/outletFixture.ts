import OpeningHours from "../../entities/outlet/OpeningHours";
import { storeFixture } from "./storeFixture";

const now = new Date("2026-03-02").toISOString();
export const outletFixture = () => ({
  id: "outlet-1",
  store: storeFixture(),
  name: "Outlet 1",
  code: "OUTLET-1",
  address: "Valid Address",
  city: "Sout Jakarta",
  province: "DKI Jakarta",
  postalCode: "1234",
  country: "Indonesia",
  email: "example@email.com",
  phoneNumber: "081234567890",
  openingHours: {
    monday: { open: "08:00", close: "22:00", isClosed: false },
    tuesday: { open: "08:00", close: "22:00", isClosed: false },
  } as unknown as OpeningHours,
  isActive: true,
  createdAt: now,
  updatedAt: null,
  deletedAt: null,
});
