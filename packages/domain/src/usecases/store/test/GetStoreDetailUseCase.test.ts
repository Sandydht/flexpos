import { describe, expect, it, vi } from "vitest";
import StoreItem from "../../../entities/store/StoreItem";
import { UserItem } from "../../../entities/entities";
import StoreRepository from "../../../repositories/StoreRepository";
import GetStoreDetailUseCase from "../GetStoreDetailUseCase";

describe("GetStoreDetailUseCase", () => {
  const mockStoreId: string = "store-1";

  it("should call reporitory getStoreDetail and return StoreItem entity", async () => {
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
      getStoreDetail: vi.fn().mockResolvedValue(mockStoreItem),
    };

    const useCase: GetStoreDetailUseCase = new GetStoreDetailUseCase(
      mockStoreRepository as StoreRepository,
    );

    const result = await useCase.execute(mockStoreId);

    expect(mockStoreRepository.getStoreDetail).toHaveBeenCalledWith(
      mockStoreId,
    );
    expect(result).toStrictEqual(mockStoreItem);
  });

  it("should throw error when repository throws error", async () => {
    const mockError: Error = new Error("SERVER_ERROR");

    const mockStoreRepository: Partial<StoreRepository> = {
      getStoreDetail: vi.fn().mockRejectedValue(mockError),
    };

    const useCase: GetStoreDetailUseCase = new GetStoreDetailUseCase(
      mockStoreRepository as StoreRepository,
    );

    await expect(useCase.execute(mockStoreId)).rejects.toThrow(
      mockError.message,
    );
  });
});
