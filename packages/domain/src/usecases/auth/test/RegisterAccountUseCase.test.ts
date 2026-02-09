import { describe, expect, it, vi } from "vitest";
import UserRegister from "../../../entities/auth/UserRegister";
import { UserItem } from "../../../entities/entities";
import AuthRepository from "../../../repositories/AuthRepository";
import RegisterAccountUseCase from "../RegisterAccountUseCase";

describe("RegisterAccountUseCase", () => {
  const mockUserRegister: UserRegister = new UserRegister(
    "user",
    "example@email.com",
    "081234567890",
    "Valid fullname",
    "Valid address",
    "password123",
  );

  it("should call repository registerAccount and return UserItem entity", async () => {
    const now = new Date("2026-03-02").toISOString();
    const mockUserItem: UserItem = new UserItem(
      "user-1",
      null,
      "validuser123",
      "user@mail.com",
      "081234567890",
      "User 123",
      "Valid Address",
      ["OWNER"],
      now,
      null,
      null,
    );

    const mockAuthRepository: Partial<AuthRepository> = {
      registerAccount: vi.fn().mockResolvedValue(mockUserItem),
    };

    const useCase: RegisterAccountUseCase = new RegisterAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    const result = await useCase.execute(mockUserRegister);

    expect(mockAuthRepository.registerAccount).toHaveBeenCalledWith(
      mockUserRegister,
    );
    expect(result).toStrictEqual(mockUserItem);
  });

  it("should throw error when repository throws error", async () => {
    const mockError: Error = new Error("SERVER_ERROR");

    const mockAuthRepository: Partial<AuthRepository> = {
      registerAccount: vi.fn().mockRejectedValue(mockError),
    };

    const useCase: RegisterAccountUseCase = new RegisterAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    await expect(useCase.execute(mockUserRegister)).rejects.toThrow(
      mockError.message,
    );
  });
});
