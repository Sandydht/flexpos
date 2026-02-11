import { describe, it, expect, vi, beforeEach, Mocked } from "vitest";

import LogoutAccountUseCase from "../LogoutAccountUseCase";
import UserLogout from "../../../entities/auth/UserLogout";
import AuthRepository from "../../../repositories/AuthRepository";
import { makeUserLogoutPayload } from "../../../entities/auth/test/authEntityFactory";
import { mockError } from "../../../test/helpers/mockError";
import { makeMockAuthRepository } from "./__mocks__/mockAuthRepository";

describe("LogoutAccountUseCase", () => {
  let mockUserLogout: UserLogout;
  let mockAuthRepository: Mocked<AuthRepository>;

  beforeEach(() => {
    mockUserLogout = makeUserLogoutPayload();
    mockAuthRepository = makeMockAuthRepository();
  });

  it("should call repository logoutAccount and return success message", async () => {
    const successMessage: string = "See you!";

    mockAuthRepository.logoutAccount.mockResolvedValue(successMessage);

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
    const error: Error = mockError();

    mockAuthRepository.logoutAccount.mockRejectedValue(error);

    const useCase = new LogoutAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    await expect(useCase.execute(mockUserLogout)).rejects.toThrow(error);
  });
});
