import { beforeEach, describe, expect, it, Mocked, vi } from "vitest";
import UserRegister from "../../../entities/auth/UserRegister";
import { UserItem } from "../../../entities/entities";
import AuthRepository from "../../../repositories/AuthRepository";
import RegisterAccountUseCase from "../RegisterAccountUseCase";
import { makeUserRegisterPayload } from "../../../entities/auth/test/authEntityFactory";
import { makeUserItemPayload } from "../../../entities/user/test/userEntityFactory";
import { mockError } from "../../../test/helpers/mockError";
import { makeMockAuthRepository } from "./__mocks__/mockAuthRepository";

describe("RegisterAccountUseCase", () => {
  let mockUserRegister: UserRegister;
  let mockAuthRepository: Mocked<AuthRepository>;

  beforeEach(() => {
    mockUserRegister = makeUserRegisterPayload();
    mockAuthRepository = makeMockAuthRepository();
  });

  it("should call repository registerAccount and return UserItem entity", async () => {
    const mockUserItem: UserItem = makeUserItemPayload();

    mockAuthRepository.registerAccount.mockResolvedValue(mockUserItem);

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
    const error: Error = mockError();

    mockAuthRepository.registerAccount = vi.fn().mockRejectedValue(error);

    const useCase: RegisterAccountUseCase = new RegisterAccountUseCase(
      mockAuthRepository as AuthRepository,
    );

    await expect(useCase.execute(mockUserRegister)).rejects.toThrow(error);
  });
});
