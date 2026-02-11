import { Mocked } from "vitest";
import AuthRepository from "../../../../repositories/AuthRepository";
import { createMockRepository } from "../../../../test/helpers/testRepositoryFactory";

export const makeMockAuthRepository = (): Mocked<AuthRepository> =>
  createMockRepository<AuthRepository>([
    "registerAccount",
    "loginAccount",
    "logoutAccount",
  ]) as any;
