import { describe, expect, it, vi, beforeEach } from "vitest";
import StoreItem from "../../../entities/store/StoreItem";
import { UserItem } from "../../../entities/entities";
import StoreRepository from "../../../repositories/StoreRepository";
import GetStoreDetailUseCase from "../GetStoreDetailUseCase";
import { mockStoreRepository } from "./__mocks__/mockStoreRepository";
import { makeStoreItemPayload } from "../../../entities/store/test/storeEntityFactory";
import { mockError } from "../../../test/helpers/mockError";

describe("GetStoreDetailUseCase", () => {
  const mockStoreId: string = "store-1";

  let repository: Partial<StoreRepository>;

  beforeEach(() => {
    repository = mockStoreRepository();
  });

  it("should call reporitory getStoreDetail and return StoreItem entity", async () => {
    const mockStoreItem: StoreItem<UserItem> = makeStoreItemPayload();

    repository.getStoreDetail = vi.fn().mockResolvedValue(mockStoreItem);

    const useCase: GetStoreDetailUseCase = new GetStoreDetailUseCase(
      repository as StoreRepository,
    );

    const result = await useCase.execute(mockStoreId);

    expect(repository.getStoreDetail).toHaveBeenCalledWith(mockStoreId);
    expect(result).toStrictEqual(mockStoreItem);
  });

  it("should throw error when repository throws error", async () => {
    repository.getStoreDetail = vi.fn().mockRejectedValue(mockError());

    const useCase: GetStoreDetailUseCase = new GetStoreDetailUseCase(
      repository as StoreRepository,
    );

    await expect(useCase.execute(mockStoreId)).rejects.toThrow(mockError());
  });
});
