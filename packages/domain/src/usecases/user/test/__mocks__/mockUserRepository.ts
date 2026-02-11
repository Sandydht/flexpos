import { Mocked } from "vitest";
import UserRepository from "../../../../repositories/UserRepository";
import { createMockRepository } from "../../../../test/helpers/testRepositoryFactory";

export const makeMockUserRepository = (): Mocked<UserRepository> =>
  createMockRepository<UserRepository>(["getUserProfile"]) as any;
