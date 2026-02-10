import { describe, expect, it, vi } from "vitest";
import UpdateStore from "../../../entities/store/UpdateStore";
import { UserItem } from "../../../entities/entities";
import StoreItem from "../../../entities/store/StoreItem";
import StoreRepository from "../../../repositories/StoreRepository";
import UpdateStoreUseCase from "../UpdateStoreUseCase";

describe("UpdateStoreUseCase", () => {
  const mockStoreId: string = "store-1";
  const mockUpdateStore: UpdateStore = new UpdateStore("Store 1");

  it("should call repository updateStore and return StoreItem entity", async () => {
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
      updateStore: vi.fn().mockResolvedValue(mockStoreItem),
    };

    const useCase: UpdateStoreUseCase = new UpdateStoreUseCase(
      mockStoreRepository as StoreRepository,
    );

    const result = await useCase.execute(mockStoreId, mockUpdateStore);

    expect(mockStoreRepository.updateStore).toHaveBeenCalledWith(
      mockStoreId,
      mockUpdateStore,
    );
    expect(result).toStrictEqual(mockStoreItem);
  });

  it("should throw error when repository throws error", async () => {
    const mockError: Error = new Error("SERVER_ERROR");

    const mockStoreRepository: Partial<StoreRepository> = {
      updateStore: vi.fn().mockRejectedValue(mockError),
    };

    const useCase: UpdateStoreUseCase = new UpdateStoreUseCase(
      mockStoreRepository as StoreRepository,
    );

    await expect(useCase.execute(mockStoreId, mockUpdateStore)).rejects.toThrow(
      mockError.message,
    );
  });
});
