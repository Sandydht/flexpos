import { vi } from "vitest";
import AuthRepository from "../../../../repositories/AuthRepository";

export const mockAuthRepository = (): Partial<AuthRepository> => ({
  registerAccount: vi.fn(),
  loginAccount: vi.fn(),
  logoutAccount: vi.fn(),
});
