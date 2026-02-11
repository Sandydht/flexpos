import { describe, expect, it, vi } from "vitest";
import { PaginationQuery } from "../../../entities/utils/PaginationQuery";
import { StoreItem, UserItem } from "../../../entities/entities";
import { PaginationMeta } from "../../../entities/utils/PaginationMeta";
import StoreRepository from "../../../repositories/StoreRepository";
import { PaginatedResult } from "../../../entities/utils/PaginatedResult";
import GetStoreListUseCase from "../GetStoreListUseCase";

describe("GetStoreListUseCase", () => {
  const mockPaginationQuery: PaginationQuery = {
    page: 1,
    size: 10,
  };

  it("should call repository and return StoreItem entity", async () => {
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
      null,
      mockUserItem,
      "Store 1",
      now,
      null,
      null,
    );

    const mockPaginationMeta: PaginationMeta = {
      page: mockPaginationQuery.page || 1,
      size: mockPaginationQuery.size || 10,
      totalItems: 10,
      totalPages: 1,
      hasNextPage: false,
      hasPrevPage: false,
    };

    const mockPaginatedResult: PaginatedResult<StoreItem<UserItem>> = {
      data: [mockStoreItem],
      meta: mockPaginationMeta,
      query: mockPaginationQuery,
    };

    const mockStoreRepository: Partial<StoreRepository> = {
      getStoreList: vi.fn().mockResolvedValue(mockPaginatedResult),
    };

    const useCase: GetStoreListUseCase = new GetStoreListUseCase(
      mockStoreRepository as StoreRepository,
    );

    const result = await useCase.execute(mockPaginationQuery);

    expect(mockStoreRepository.getStoreList).toHaveBeenCalledWith(
      mockPaginationQuery,
    );
    expect(result).toStrictEqual(mockPaginatedResult);
  });

  it("should throw error when repository throws error", async () => {
    const mockError: Error = new Error("SERVER_ERROR");

    const mockStoreRepository: Partial<StoreRepository> = {
      getStoreList: vi.fn().mockRejectedValue(mockError),
    };

    const useCase: GetStoreListUseCase = new GetStoreListUseCase(
      mockStoreRepository as StoreRepository,
    );

    await expect(useCase.execute(mockPaginationQuery)).rejects.toThrow(
      mockError.message,
    );
  });
});
