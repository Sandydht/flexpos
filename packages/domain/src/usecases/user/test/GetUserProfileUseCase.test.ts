import { describe, it, expect, vi, beforeEach, Mocked } from "vitest";

import GetUserProfileUseCase from "../GetUserProfileUseCase";
import UserItem from "../../../entities/user/UserItem";
import { makeUserItemPayload } from "../../../entities/user/test/userEntityFactory";
import { mockError } from "../../../test/helpers/mockError";
import UserRepository from "../../../repositories/UserRepository";
import { makeMockUserRepository } from "./__mocks__/mockUserRepository";

describe("GetUserProfileUseCase", () => {
  let mockUserRepository: Mocked<UserRepository>;

  beforeEach(() => {
    mockUserRepository = makeMockUserRepository();
  });

  it("should call repository getUserProfile and return UserItem entity", async () => {
    const mockUserItem: UserItem = makeUserItemPayload();

    mockUserRepository.getUserProfile.mockResolvedValue(mockUserItem);

    const useCase: GetUserProfileUseCase = new GetUserProfileUseCase(
      mockUserRepository as UserRepository,
    );

    const result = await useCase.execute();

    expect(mockUserRepository.getUserProfile).toHaveBeenCalledOnce();
    expect(result).toStrictEqual(mockUserItem);
  });

  it("should throw error when repository throws error", async () => {
    const error: Error = mockError();

    mockUserRepository.getUserProfile.mockRejectedValue(error);

    const useCase: GetUserProfileUseCase = new GetUserProfileUseCase(
      mockUserRepository as UserRepository,
    );

    await expect(useCase.execute()).rejects.toThrow(error);
  });
});
