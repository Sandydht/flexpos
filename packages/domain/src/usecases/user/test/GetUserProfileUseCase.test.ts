import { describe, it, expect, vi } from "vitest";

import GetUserProfileUseCase from "../GetUserProfileUseCase";
import UserItem from "../../../entities/user/UserItem";
import UserRepository from "../../../repositories/UserRepository";

describe("GetUserProfileUseCase", () => {
  it("should call repository getUserProfile and return UserItem entity", async () => {
    const now = new Date("2026-03-02").toISOString();
    const mockUserItem = new UserItem(
      "user-1",
      null,
      "user",
      "example@email.com",
      "081234567890",
      "User",
      "Address",
      ["OWNER"],
      now,
      null,
      null,
    );

    const mockUserRepository: UserRepository = {
      getUserProfile: vi.fn().mockResolvedValue(mockUserItem),
    };

    const useCase: GetUserProfileUseCase = new GetUserProfileUseCase(
      mockUserRepository,
    );

    const result = await useCase.execute();

    expect(mockUserRepository.getUserProfile).toHaveBeenCalledOnce();
    expect(result).toStrictEqual(mockUserItem);
  });

  it("should throw error when repository throws error", async () => {
    const mockError: Error = new Error("SERVER_ERROR");
    const mockUserRepository: UserRepository = {
      getUserProfile: vi.fn().mockRejectedValue(mockError),
    };

    const useCase: GetUserProfileUseCase = new GetUserProfileUseCase(
      mockUserRepository,
    );

    await expect(useCase.execute()).rejects.toThrow(mockError.message);
  });
});
