import { describe, it, expect, vi } from "vitest";

import LogoutAccountUseCase from "../LogoutAccountUseCase";
import UserLogout from "../../../entities/auth/UserLogout";
import AuthRepository from "../../../repositories/AuthRepository";

describe("LogoutAccountUseCase", () => {
  it("should call repository logoutAccount and return success message", async () => {
    const payload = new UserLogout("refresh-token-123");

    const mockAuthRepository: Partial<AuthRepository> = {
      logoutAccount: vi.fn().mockResolvedValue("Logout success"),
    };

    const useCase = new LogoutAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    const result = await useCase.execute(payload);

    expect(mockAuthRepository.logoutAccount).toHaveBeenCalledOnce();
    expect(mockAuthRepository.logoutAccount).toHaveBeenCalledWith(payload);
    expect(result).toBe("Logout success");
  });

  it("should throw error when repository throws error", async () => {
    const payload = new UserLogout("refresh-token-123");

    const mockAuthRepository: Partial<AuthRepository> = {
      logoutAccount: vi.fn().mockRejectedValue(new Error("SERVER_ERROR")),
    };

    const useCase = new LogoutAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    await expect(useCase.execute(payload)).rejects.toThrow("SERVER_ERROR");
  });
});
