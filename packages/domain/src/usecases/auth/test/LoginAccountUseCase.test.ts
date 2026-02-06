import { describe, it, expect, vi } from "vitest";
import LoginAccountUseCase from "../LoginAccountUseCase";
import UserLogin from "../../../entities/auth/UserLogin";
import NewAuth from "../../../entities/auth/NewAuth";
import AuthRepository from "../../../repositories/AuthRepository";

describe("LoginAccountUseCase", () => {
  it("should call repository loginAccount and return NewAuth entity", async () => {
    const mockAuthRepository: Partial<AuthRepository> = {
      loginAccount: vi
        .fn()
        .mockResolvedValue(new NewAuth("access-token", "refresh-token")),
    };

    const useCase = new LoginAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    const payload = new UserLogin("test@example.com", "abc12345");

    const result = await useCase.execute(payload);

    expect(mockAuthRepository.loginAccount).toHaveBeenCalledWith(payload);
    expect(result.getAccessToken()).toBe("access-token");
    expect(result.getRefreshToken()).toBe("refresh-token");
  });

  it("should throw error when repository throws error", async () => {
    const mockAuthRepository: Partial<AuthRepository> = {
      loginAccount: vi.fn().mockRejectedValue(new Error("SERVER_ERROR")),
    };

    const payload = new UserLogin("test@example.com", "abc12345");

    const useCase = new LoginAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    await expect(useCase.execute(payload)).rejects.toThrow("SERVER_ERROR");
  });
});
