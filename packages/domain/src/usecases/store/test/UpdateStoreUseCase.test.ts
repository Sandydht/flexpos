import { beforeEach, describe, expect, it, Mocked, vi } from "vitest";
import UpdateStore from "../../../entities/store/UpdateStore";
import { UserItem } from "../../../entities/entities";
import StoreItem from "../../../entities/store/StoreItem";
import StoreRepository from "../../../repositories/StoreRepository";
import UpdateStoreUseCase from "../UpdateStoreUseCase";
import {
  makeStoreItemPayload,
  makeUpdateStorePayload,
} from "../../../entities/store/test/storeEntityFactory";
import { mockError } from "../../../test/helpers/mockError";
import { makeMockStoreRepository } from "./__mocks__/mockStoreRepository";

describe("UpdateStoreUseCase", () => {
  const mockStoreId: string = "store-1";
  let mockUpdateStore: UpdateStore;
  let mockStoreRepository: Mocked<StoreRepository>;

  beforeEach(() => {
    mockUpdateStore = makeUpdateStorePayload();
    mockStoreRepository = makeMockStoreRepository();
  });

  it("should call repository updateStore and return StoreItem entity", async () => {
    const mockStoreItem: StoreItem<UserItem> = makeStoreItemPayload();

    mockStoreRepository.updateStore.mockResolvedValue(mockStoreItem);

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
    const error: Error = mockError();

    mockStoreRepository.updateStore.mockRejectedValue(error);

    const useCase: UpdateStoreUseCase = new UpdateStoreUseCase(
      mockStoreRepository as StoreRepository,
    );

    await expect(useCase.execute(mockStoreId, mockUpdateStore)).rejects.toThrow(
      error,
    );
  });
});
