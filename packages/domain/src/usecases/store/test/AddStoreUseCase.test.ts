import { describe, expect, it, vi } from "vitest";
import AddStore from "../../../entities/store/AddStore";
import StoreItem from "../../../entities/store/StoreItem";
import { UserItem } from "../../../entities/entities";
import StoreRepository from "../../../repositories/StoreRepository";
import AddStoreUseCase from "../AddStoreUseCase";

describe("AddStoreUseCase", () => {
  const mockAddStore: AddStore = new AddStore("user-1", "Store 1");

  it("should call reporitory addStore and return StoreItem entity", async () => {
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

    const mockStoreItem: StoreItem<UserItem> = new StoreItem<UserItem>(
      "store-1",
      mockUserItem,
      "Store 1",
      now,
      null,
      null,
    );

    const mockStoreRepository: Partial<StoreRepository> = {
      addStore: vi.fn().mockResolvedValue(mockStoreItem),
    };

    const useCase: AddStoreUseCase = new AddStoreUseCase(
      mockStoreRepository as StoreRepository,
    );

    const result = await useCase.execute(mockAddStore);

    expect(mockStoreRepository.addStore).toHaveBeenCalledWith(mockAddStore);
    expect(result).toStrictEqual(mockStoreItem);
  });

  it("should throw error when repository throws error", async () => {
    const mockError: Error = new Error("SERVER_ERROR");

    const mockStoreRepository: Partial<StoreRepository> = {
      addStore: vi.fn().mockRejectedValue(mockError),
    };

    const useCase: AddStoreUseCase = new AddStoreUseCase(
      mockStoreRepository as StoreRepository,
    );

    await expect(useCase.execute(mockAddStore)).rejects.toThrow(
      mockError.message,
    );
  });
});
