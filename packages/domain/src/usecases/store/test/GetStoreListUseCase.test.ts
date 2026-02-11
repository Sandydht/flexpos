import { beforeEach, describe, expect, it, Mocked, vi } from "vitest";
import { PaginationQuery } from "../../../entities/utils/PaginationQuery";
import { StoreItem, UserItem } from "../../../entities/entities";
import { PaginationMeta } from "../../../entities/utils/PaginationMeta";
import StoreRepository from "../../../repositories/StoreRepository";
import { PaginatedResult } from "../../../entities/utils/PaginatedResult";
import GetStoreListUseCase from "../GetStoreListUseCase";
import { makeMockStoreRepository } from "./__mocks__/mockStoreRepository";
import { makeStoreItemPayload } from "../../../entities/store/test/storeEntityFactory";
import { mockError } from "../../../test/helpers/mockError";

describe("GetStoreListUseCase", () => {
  const mockPaginationQuery: PaginationQuery = {
    page: 1,
    size: 10,
  };
  let mockStoreRepository: Mocked<StoreRepository>;

  beforeEach(() => {
    mockStoreRepository = makeMockStoreRepository();
  });

  it("should call repository and return StoreItem entity", async () => {
    const mockStoreItem: StoreItem<UserItem> = makeStoreItemPayload();

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

    mockStoreRepository.getStoreList.mockResolvedValue(mockPaginatedResult);

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
    const error: Error = mockError();

    mockStoreRepository.getStoreList.mockRejectedValue(error);

    const useCase: GetStoreListUseCase = new GetStoreListUseCase(
      mockStoreRepository as StoreRepository,
    );

    await expect(useCase.execute(mockPaginationQuery)).rejects.toThrow(error);
  });
});
