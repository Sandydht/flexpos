import { describe, it, expect, vi, beforeEach, Mocked } from "vitest";
import LoginAccountUseCase from "../LoginAccountUseCase";
import UserLogin from "../../../entities/auth/UserLogin";
import NewAuth from "../../../entities/auth/NewAuth";
import AuthRepository from "../../../repositories/AuthRepository";
import {
  makeNewAuthPayload,
  makeUserLoginPayload,
} from "../../../entities/auth/test/authEntityFactory";
import { mockError } from "../../../test/helpers/mockError";
import { makeMockAuthRepository } from "./__mocks__/mockAuthRepository";

describe("LoginAccountUseCase", () => {
  let mockUserLogin: UserLogin;
  let mockAuthRepository: Mocked<AuthRepository>;

  beforeEach(() => {
    mockUserLogin = makeUserLoginPayload();
    mockAuthRepository = makeMockAuthRepository();
  });

  it("should call repository loginAccount and return NewAuth entity", async () => {
    const mockNewAuth: NewAuth = makeNewAuthPayload();

    mockAuthRepository.loginAccount.mockResolvedValue(mockNewAuth);

    const useCase: LoginAccountUseCase = new LoginAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    const result = await useCase.execute(mockUserLogin);

    expect(mockAuthRepository.loginAccount).toHaveBeenCalledWith(mockUserLogin);
    expect(result).toStrictEqual(mockNewAuth);
  });

  it("should throw error when repository throws error", async () => {
    const error: Error = mockError();

    mockAuthRepository.loginAccount.mockRejectedValue(error);

    const useCase: LoginAccountUseCase = new LoginAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    await expect(useCase.execute(mockUserLogin)).rejects.toThrow(error);
  });
});
