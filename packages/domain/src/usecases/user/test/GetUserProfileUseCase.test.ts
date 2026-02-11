import { describe, it, expect, vi } from "vitest";

import GetUserProfileUseCase from "../GetUserProfileUseCase";
import UserItem from "../../../entities/user/UserItem";
import { makeUserItemPayload } from "../../../entities/user/test/userEntityFactory";
import { mockUserRepository } from "./__mocks__/mockUserRepository";
import { mockError } from "../../../test/helpers/mockError";
import UserRepository from "../../../repositories/UserRepository";

describe("GetUserProfileUseCase", () => {
  const repository: Partial<UserRepository> = mockUserRepository();

  it("should call repository getUserProfile and return UserItem entity", async () => {
    const mockUserItem: UserItem = makeUserItemPayload();

    repository.getUserProfile = vi.fn().mockResolvedValue(mockUserItem);

    const useCase: GetUserProfileUseCase = new GetUserProfileUseCase(
      repository as UserRepository,
    );

    const result = await useCase.execute();

    expect(repository.getUserProfile).toHaveBeenCalledOnce();
    expect(result).toStrictEqual(mockUserItem);
  });

  it("should throw error when repository throws error", async () => {
    repository.getUserProfile = vi.fn().mockRejectedValue(mockError());

    const useCase: GetUserProfileUseCase = new GetUserProfileUseCase(
      repository as UserRepository,
    );

    await expect(useCase.execute()).rejects.toThrow(mockError());
  });
});
