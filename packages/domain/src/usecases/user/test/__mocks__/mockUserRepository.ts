import { vi } from "vitest";
import UserRepository from "../../../../repositories/UserRepository";

export const mockUserRepository = (): Partial<UserRepository> => ({
  getUserProfile: vi.fn(),
});
