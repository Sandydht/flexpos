import { beforeEach, describe, expect, it, Mocked, vi } from "vitest";
import { StoreItem, UserItem } from "../../../entities/entities";
import StoreRepository from "../../../repositories/StoreRepository";
import DeleteStoreUseCase from "../DeleteStoreUseCase";
import { makeStoreItemPayload } from "../../../entities/store/test/storeEntityFactory";
import { mockError } from "../../../test/helpers/mockError";
import { makeMockStoreRepository } from "./__mocks__/mockStoreRepository";

describe("DeleteStoreUseCase", () => {
  const mockStoreId: string = "store-1";
  let mockStoreRepository: Mocked<StoreRepository>;

  beforeEach(() => {
    mockStoreRepository = makeMockStoreRepository();
  });

  it("should call repository deleteStore and return StoreItem entity", async () => {
    const mockStoreItem: StoreItem<UserItem> = makeStoreItemPayload();

    mockStoreRepository.deleteStore.mockResolvedValue(mockStoreItem);

    const useCase: DeleteStoreUseCase = new DeleteStoreUseCase(
      mockStoreRepository as StoreRepository,
    );

    const result = await useCase.execute(mockStoreId);

    expect(mockStoreRepository.deleteStore).toHaveBeenCalledWith(mockStoreId);
    expect(result).toStrictEqual(mockStoreItem);
  });

  it("should throw error when repository throws error", async () => {
    const error: Error = mockError();

    mockStoreRepository.deleteStore.mockRejectedValue(error);

    const useCase: DeleteStoreUseCase = new DeleteStoreUseCase(
      mockStoreRepository as StoreRepository,
    );

    await expect(useCase.execute(mockStoreId)).rejects.toThrow(error);
  });
});
