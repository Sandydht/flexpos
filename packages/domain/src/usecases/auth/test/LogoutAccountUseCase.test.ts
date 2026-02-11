import { describe, it, expect, vi } from "vitest";

import LogoutAccountUseCase from "../LogoutAccountUseCase";
import UserLogout from "../../../entities/auth/UserLogout";
import AuthRepository from "../../../repositories/AuthRepository";
import { makeUserLogoutPayload } from "../../../entities/auth/test/authEntityFactory";
import { mockAuthRepository } from "./__mocks__/mockAuthRepository";
import { mockError } from "../../../test/helpers/mockError";

describe("LogoutAccountUseCase", () => {
  const mockUserLogout: UserLogout = makeUserLogoutPayload();
  const repository: Partial<AuthRepository> = mockAuthRepository();

  it("should call repository logoutAccount and return success message", async () => {
    const successMessage: string = "See you!";

    repository.logoutAccount = vi.fn().mockResolvedValue(successMessage);

    const useCase = new LogoutAccountUseCase(repository as AuthRepository);

    const result = await useCase.execute(mockUserLogout);

    expect(repository.logoutAccount).toHaveBeenCalledWith(mockUserLogout);
    expect(result).toStrictEqual(successMessage);
  });

  it("should throw error when repository throws error", async () => {
    repository.logoutAccount = vi.fn().mockRejectedValue(mockError());

    const useCase = new LogoutAccountUseCase(repository as AuthRepository);

    await expect(useCase.execute(mockUserLogout)).rejects.toThrow(mockError());
  });
});
