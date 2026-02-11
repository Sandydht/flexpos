import { beforeEach, describe, expect, it, vi } from "vitest";
import AddStore from "../../../entities/store/AddStore";
import StoreItem from "../../../entities/store/StoreItem";
import { UserItem } from "../../../entities/entities";
import StoreRepository from "../../../repositories/StoreRepository";
import AddStoreUseCase from "../AddStoreUseCase";
import {
  makeAddStorePayload,
  makeStoreItemPayload,
} from "../../../entities/store/test/storeEntityFactory";
import { mockStoreRepository } from "./__mocks__/mockStoreRepository";
import { mockError } from "../../../test/helpers/mockError";

describe("AddStoreUseCase", () => {
  let mockAddStore: AddStore;
  let repository: Partial<StoreRepository>;

  beforeEach(() => {
    mockAddStore = makeAddStorePayload();
    repository = mockStoreRepository();
  });

  it("should call reporitory addStore and return StoreItem entity", async () => {
    const mockStoreItem: StoreItem<UserItem> = makeStoreItemPayload();

    repository.addStore = vi.fn().mockResolvedValue(mockStoreItem);

    const useCase: AddStoreUseCase = new AddStoreUseCase(
      repository as StoreRepository,
    );

    const result = await useCase.execute(mockAddStore);

    expect(repository.addStore).toHaveBeenCalledWith(mockAddStore);
    expect(result).toStrictEqual(mockStoreItem);
  });

  it("should throw error when repository throws error", async () => {
    repository.addStore = vi.fn().mockRejectedValue(mockError());

    const useCase: AddStoreUseCase = new AddStoreUseCase(
      repository as StoreRepository,
    );

    await expect(useCase.execute(mockAddStore)).rejects.toThrow(mockError());
  });
});
