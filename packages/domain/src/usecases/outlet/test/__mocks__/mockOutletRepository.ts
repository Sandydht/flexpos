import { Mocked } from "vitest";
import OutletRepository from "../../../../repositories/OutletRepository";
import { createMockRepository } from "../../../../test/helpers/testRepositoryFactory";

export const makeMockOutletRepository = (): Mocked<OutletRepository> =>
  createMockRepository<OutletRepository>([
    "addOutlet",
    "getOutletDetail",
    "getOutletList",
    "updateOutlet",
    "deleteOutlet",
  ]) as any;
