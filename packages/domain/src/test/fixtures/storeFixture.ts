import { userFixture } from "./userFixture";

const now = new Date("2026-03-02").toISOString();
export const storeFixture = () => ({
  id: "store-1",
  photoUrl: null,
  owner: userFixture(),
  name: "Store 1",
  createdAt: now,
  updatedAt: null,
  deletedAt: null,
});
