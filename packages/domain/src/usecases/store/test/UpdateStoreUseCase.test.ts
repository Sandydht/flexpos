import { beforeEach, describe, expect, it, vi } from "vitest";
import UpdateStore from "../../../entities/store/UpdateStore";
import { UserItem } from "../../../entities/entities";
import StoreItem from "../../../entities/store/StoreItem";
import StoreRepository from "../../../repositories/StoreRepository";
import UpdateStoreUseCase from "../UpdateStoreUseCase";
import {
  makeStoreItemPayload,
  makeUpdateStorePayload,
} from "../../../entities/store/test/storeEntityFactory";
import { mockStoreRepository } from "./__mocks__/mockStoreRepository";
import { mockError } from "../../../test/helpers/mockError";

describe("UpdateStoreUseCase", () => {
  const mockStoreId: string = "store-1";
  let mockUpdateStore: UpdateStore;
  let repository: Partial<StoreRepository>;

  beforeEach(() => {
    mockUpdateStore = makeUpdateStorePayload();
    repository = mockStoreRepository();
  });

  it("should call repository updateStore and return StoreItem entity", async () => {
    const mockStoreItem: StoreItem<UserItem> = makeStoreItemPayload();

    repository.updateStore = vi.fn().mockResolvedValue(mockStoreItem);

    const useCase: UpdateStoreUseCase = new UpdateStoreUseCase(
      repository as StoreRepository,
    );

    const result = await useCase.execute(mockStoreId, mockUpdateStore);

    expect(repository.updateStore).toHaveBeenCalledWith(
      mockStoreId,
      mockUpdateStore,
    );
    expect(result).toStrictEqual(mockStoreItem);
  });

  it("should throw error when repository throws error", async () => {
    repository.updateStore = vi.fn().mockRejectedValue(mockError());

    const useCase: UpdateStoreUseCase = new UpdateStoreUseCase(
      repository as StoreRepository,
    );

    await expect(useCase.execute(mockStoreId, mockUpdateStore)).rejects.toThrow(
      mockError(),
    );
  });
});
