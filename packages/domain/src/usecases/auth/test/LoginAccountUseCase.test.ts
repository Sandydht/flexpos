import { describe, it, expect, vi } from "vitest";
import LoginAccountUseCase from "../LoginAccountUseCase";
import UserLogin from "../../../entities/auth/UserLogin";
import NewAuth from "../../../entities/auth/NewAuth";
import AuthRepository from "../../../repositories/AuthRepository";
import {
  makeNewAuthPayload,
  makeUserLoginPayload,
} from "../../../entities/auth/test/authEntityFactory";
import { mockAuthRepository } from "./__mocks__/mockAuthRepository";
import { mockError } from "../../../test/helpers/mockError";

describe("LoginAccountUseCase", () => {
  const mockUserLogin: UserLogin = makeUserLoginPayload();
  let repository: Partial<AuthRepository> = mockAuthRepository();

  it("should call repository loginAccount and return NewAuth entity", async () => {
    const mockNewAuth: NewAuth = makeNewAuthPayload();

    repository.loginAccount = vi.fn().mockResolvedValue(mockNewAuth);

    const useCase: LoginAccountUseCase = new LoginAccountUseCase(
      repository as AuthRepository,
    );

    const result = await useCase.execute(mockUserLogin);

    expect(repository.loginAccount).toHaveBeenCalledWith(mockUserLogin);
    expect(result).toStrictEqual(mockNewAuth);
  });

  it("should throw error when repository throws error", async () => {
    repository.loginAccount = vi.fn().mockRejectedValue(mockError());

    const useCase: LoginAccountUseCase = new LoginAccountUseCase(
      repository as AuthRepository,
    );

    await expect(useCase.execute(mockUserLogin)).rejects.toThrow(mockError());
  });
});
