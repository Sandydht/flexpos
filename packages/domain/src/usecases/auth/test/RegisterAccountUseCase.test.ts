import { describe, expect, it, vi } from "vitest";
import UserRegister from "../../../entities/auth/UserRegister";
import { UserItem } from "../../../entities/entities";
import AuthRepository from "../../../repositories/AuthRepository";
import RegisterAccountUseCase from "../RegisterAccountUseCase";
import { makeUserRegisterPayload } from "../../../entities/auth/test/authEntityFactory";
import { mockAuthRepository } from "./__mocks__/mockAuthRepository";
import { makeUserItemPayload } from "../../../entities/user/test/userEntityFactory";
import { mockError } from "../../../test/helpers/mockError";

describe("RegisterAccountUseCase", () => {
  const mockUserRegister: UserRegister = makeUserRegisterPayload();
  const repository: Partial<AuthRepository> = mockAuthRepository();

  it("should call repository registerAccount and return UserItem entity", async () => {
    const mockUserItem: UserItem = makeUserItemPayload();

    repository.registerAccount = vi.fn().mockResolvedValue(mockUserItem);

    const useCase: RegisterAccountUseCase = new RegisterAccountUseCase(
      repository as AuthRepository,
    );

    const result = await useCase.execute(mockUserRegister);

    expect(repository.registerAccount).toHaveBeenCalledWith(mockUserRegister);
    expect(result).toStrictEqual(mockUserItem);
  });

  it("should throw error when repository throws error", async () => {
    repository.registerAccount = vi.fn().mockRejectedValue(mockError());

    const useCase: RegisterAccountUseCase = new RegisterAccountUseCase(
      repository as AuthRepository,
    );

    await expect(useCase.execute(mockUserRegister)).rejects.toThrow(
      mockError(),
    );
  });
});
