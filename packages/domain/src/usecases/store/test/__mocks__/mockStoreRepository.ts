import { Mocked } from "vitest";
import StoreRepository from "../../../../repositories/StoreRepository";
import { createMockRepository } from "../../../../test/helpers/testRepositoryFactory";

export const makeMockStoreRepository = (): Mocked<StoreRepository> =>
  createMockRepository<StoreRepository>([
    "addStore",
    "getStoreDetail",
    "getStoreList",
    "updateStore",
    "deleteStore",
  ]) as any;
