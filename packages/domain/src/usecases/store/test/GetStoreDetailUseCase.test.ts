import { describe, expect, it, vi, beforeEach, Mocked } from "vitest";
import StoreItem from "../../../entities/store/StoreItem";
import { UserItem } from "../../../entities/entities";
import StoreRepository from "../../../repositories/StoreRepository";
import GetStoreDetailUseCase from "../GetStoreDetailUseCase";
import { makeStoreItemPayload } from "../../../entities/store/test/storeEntityFactory";
import { mockError } from "../../../test/helpers/mockError";
import { makeMockStoreRepository } from "./__mocks__/mockStoreRepository";

describe("GetStoreDetailUseCase", () => {
  const mockStoreId: string = "store-1";
  let mockStoreRepository: Mocked<StoreRepository>;

  beforeEach(() => {
    mockStoreRepository = makeMockStoreRepository();
  });

  it("should call reporitory getStoreDetail and return StoreItem entity", async () => {
    const mockStoreItem: StoreItem<UserItem> = makeStoreItemPayload();

    mockStoreRepository.getStoreDetail.mockResolvedValue(mockStoreItem);

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
    const error: Error = mockError();

    mockStoreRepository.getStoreDetail.mockRejectedValue(error);

    const useCase: GetStoreDetailUseCase = new GetStoreDetailUseCase(
      mockStoreRepository as StoreRepository,
    );

    await expect(useCase.execute(mockStoreId)).rejects.toThrow(error);
  });
});
