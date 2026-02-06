import { describe, it, expect, vi } from "vitest";

import GetUserProfileUseCase from "../GetUserProfileUseCase";
import UserProfile from "../../../entities/user/UserProfile";
import { UserRole } from "../../../entities/user/types";
import UserRepository from "../../../repositories/UserRepository";

describe("GetUserProfileUseCase", () => {
  it("should call repository getUserProfile and return UserProfile entity", async () => {
    const mockUserProfile = new UserProfile(
      "user-123",
      "https://example.com/photo.png",
      "test@example.com",
      "081234567890",
      "User",
      "ADMIN" as UserRole,
    );

    const mockUserRepository: UserRepository = {
      getUserProfile: vi.fn().mockResolvedValue(mockUserProfile),
    };

    const useCase = new GetUserProfileUseCase(mockUserRepository);

    const result = await useCase.execute();

    expect(mockUserRepository.getUserProfile).toHaveBeenCalledOnce();
    expect(result).toBe(mockUserProfile);
    expect(result.getEmail()).toBe("test@example.com");
  });

  it("should throw error when repository throws error", async () => {
    const mockUserRepository: UserRepository = {
      getUserProfile: vi.fn().mockRejectedValue(new Error("SERVER_ERROR")),
    };

    const useCase = new GetUserProfileUseCase(mockUserRepository);

    await expect(useCase.execute()).rejects.toThrow("SERVER_ERROR");
  });
});
