import { beforeEach, describe, expect, it, vi } from "vitest";
import { StoreItem, UserItem } from "../../../entities/entities";
import StoreRepository from "../../../repositories/StoreRepository";
import DeleteStoreUseCase from "../DeleteStoreUseCase";
import { mockStoreRepository } from "./__mocks__/mockStoreRepository";
import { makeStoreItemPayload } from "../../../entities/store/test/storeEntityFactory";
import { mockError } from "../../../test/helpers/mockError";

describe("DeleteStoreUseCase", () => {
  const mockStoreId: string = "store-1";
  let repository: Partial<StoreRepository>;

  beforeEach(() => {
    repository = mockStoreRepository();
  });

  it("should call repository deleteStore and return StoreItem entity", async () => {
    const mockStoreItem: StoreItem<UserItem> = makeStoreItemPayload();

    repository.deleteStore = vi.fn().mockResolvedValue(mockStoreItem);

    const useCase: DeleteStoreUseCase = new DeleteStoreUseCase(
      repository as StoreRepository,
    );

    const result = await useCase.execute(mockStoreId);

    expect(repository.deleteStore).toHaveBeenCalledWith(mockStoreId);
    expect(result).toStrictEqual(mockStoreItem);
  });

  it("should throw error when repository throws error", async () => {
    repository.deleteStore = vi.fn().mockRejectedValue(mockError());

    const useCase: DeleteStoreUseCase = new DeleteStoreUseCase(
      repository as StoreRepository,
    );

    await expect(useCase.execute(mockStoreId)).rejects.toThrow(mockError());
  });
});
