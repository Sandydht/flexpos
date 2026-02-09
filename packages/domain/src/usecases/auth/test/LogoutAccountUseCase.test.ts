import { describe, it, expect, vi } from "vitest";

import LogoutAccountUseCase from "../LogoutAccountUseCase";
import UserLogout from "../../../entities/auth/UserLogout";
import AuthRepository from "../../../repositories/AuthRepository";

describe("LogoutAccountUseCase", () => {
  const mockUserLogout: UserLogout = new UserLogout("refresh-token");

  it("should call repository logoutAccount and return success message", async () => {
    const successMessage: string = "See you!";
    const mockAuthRepository: Partial<AuthRepository> = {
      logoutAccount: vi.fn().mockResolvedValue(successMessage),
    };

    const useCase = new LogoutAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    const result = await useCase.execute(mockUserLogout);

    expect(mockAuthRepository.logoutAccount).toHaveBeenCalledWith(
      mockUserLogout,
    );
    expect(result).toStrictEqual(successMessage);
  });

  it("should throw error when repository throws error", async () => {
    const mockError: Error = new Error("SERVER_ERROR");

    const mockAuthRepository: Partial<AuthRepository> = {
      logoutAccount: vi.fn().mockRejectedValue(mockError),
    };

    const useCase = new LogoutAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    await expect(useCase.execute(mockUserLogout)).rejects.toThrow(
      mockError.message,
    );
  });
});
