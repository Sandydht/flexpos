import { describe, it, expect, vi } from "vitest";
import LoginAccountUseCase from "../LoginAccountUseCase";
import UserLogin from "../../../entities/auth/UserLogin";
import NewAuth from "../../../entities/auth/NewAuth";
import AuthRepository from "../../../repositories/AuthRepository";

describe("LoginAccountUseCase", () => {
  const mockUserLogin: UserLogin = new UserLogin(
    "example@email.com",
    "password123",
  );

  it("should call repository loginAccount and return NewAuth entity", async () => {
    const mockNewAuth: NewAuth = new NewAuth("access-token", "refresh-token");

    const mockAuthRepository: Partial<AuthRepository> = {
      loginAccount: vi.fn().mockResolvedValue(mockNewAuth),
    };

    const useCase: LoginAccountUseCase = new LoginAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    const result = await useCase.execute(mockUserLogin);

    expect(mockAuthRepository.loginAccount).toHaveBeenCalledWith(mockUserLogin);
    expect(result).toStrictEqual(mockNewAuth);
  });

  it("should throw error when repository throws error", async () => {
    const mockError: Error = new Error("SERVER_ERROR");

    const mockAuthRepository: Partial<AuthRepository> = {
      loginAccount: vi.fn().mockRejectedValue(mockError),
    };

    const useCase: LoginAccountUseCase = new LoginAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    await expect(useCase.execute(mockUserLogin)).rejects.toThrow(
      mockError.message,
    );
  });
});
