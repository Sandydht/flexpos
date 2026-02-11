import { describe, it, vi, expect, Mocked, beforeEach } from "vitest";
import { PaginationQuery } from "../../../entities/utils/PaginationQuery";
import { OutletItem, StoreItem, UserItem } from "../../../entities/entities";
import { PaginationMeta } from "../../../entities/utils/PaginationMeta";
import { PaginatedResult } from "../../../entities/utils/PaginatedResult";
import OutletRepository from "../../../repositories/OutletRepository";
import GetOutletListUseCase from "../GetOutletListUseCase";
import { makeMockOutletRepository } from "./__mocks__/mockOutletRepository";
import { makeOutletItemPayload } from "../../../entities/outlet/test/outletEntityFactory";
import { mockError } from "../../../test/helpers/mockError";

describe("GetOutletListUseCase", () => {
  const mockPaginationQuery: PaginationQuery = {
    page: 1,
    size: 10,
  };

  let mockOutletRepository: Mocked<OutletRepository>;

  beforeEach(() => {
    mockOutletRepository = makeMockOutletRepository();
  });

  it("should call repository and return OutletItem entity", async () => {
    const mockOutletItem: OutletItem<StoreItem<UserItem>> =
      makeOutletItemPayload();

    const mockPaginationMeta: PaginationMeta = {
      page: mockPaginationQuery.page || 1,
      size: mockPaginationQuery.size || 10,
      totalItems: 10,
      totalPages: 1,
      hasNextPage: false,
      hasPrevPage: false,
    };

    const mockPaginatedResult: PaginatedResult<
      OutletItem<StoreItem<UserItem>>
    > = {
      data: [mockOutletItem],
      meta: mockPaginationMeta,
      query: mockPaginationQuery,
    };

    mockOutletRepository.getOutletList.mockResolvedValue(mockPaginatedResult);

    const useCase: GetOutletListUseCase = new GetOutletListUseCase(
      mockOutletRepository as OutletRepository,
    );

    const result = await useCase.execute(mockPaginationQuery);

    expect(mockOutletRepository.getOutletList).toHaveBeenCalledWith(
      mockPaginationQuery,
    );
    expect(result).toStrictEqual(mockPaginatedResult);
  });

  it("should throw error when repository throws error", async () => {
    const error: Error = mockError();

    mockOutletRepository.getOutletList.mockRejectedValue(error);

    const useCase: GetOutletListUseCase = new GetOutletListUseCase(
      mockOutletRepository as OutletRepository,
    );

    await expect(useCase.execute(mockPaginationQuery)).rejects.toThrow(error);
  });
});
