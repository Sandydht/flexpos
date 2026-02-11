import { vi } from "vitest";
import StoreRepository from "../../../../repositories/StoreRepository";

export const mockStoreRepository = (): Partial<StoreRepository> => ({
  addStore: vi.fn(),
  getStoreDetail: vi.fn(),
  getStoreList: vi.fn(),
  updateStore: vi.fn(),
  deleteStore: vi.fn(),
});
