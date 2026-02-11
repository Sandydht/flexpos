import { beforeEach, describe, expect, it, Mocked } from "vitest";
import AddStore from "../../../entities/store/AddStore";
import StoreItem from "../../../entities/store/StoreItem";
import { UserItem } from "../../../entities/entities";
import StoreRepository from "../../../repositories/StoreRepository";
import AddStoreUseCase from "../AddStoreUseCase";
import {
  makeAddStorePayload,
  makeStoreItemPayload,
} from "../../../entities/store/test/storeEntityFactory";
import { mockError } from "../../../test/helpers/mockError";
import { makeMockStoreRepository } from "./__mocks__/mockStoreRepository";

describe("AddStoreUseCase", () => {
  let mockAddStore: AddStore;
  let mockStoreRepository: Mocked<StoreRepository>;

  beforeEach(() => {
    mockAddStore = makeAddStorePayload();
    mockStoreRepository = makeMockStoreRepository();
  });

  it("should call reporitory addStore and return StoreItem entity", async () => {
    const mockStoreItem: StoreItem<UserItem> = makeStoreItemPayload();

    mockStoreRepository.addStore.mockResolvedValue(mockStoreItem);

    const useCase: AddStoreUseCase = new AddStoreUseCase(
      mockStoreRepository as StoreRepository,
    );

    const result = await useCase.execute(mockAddStore);

    expect(mockStoreRepository.addStore).toHaveBeenCalledWith(mockAddStore);
    expect(result).toStrictEqual(mockStoreItem);
  });

  it("should throw error when repository throws error", async () => {
    const error: Error = mockError();

    mockStoreRepository.addStore.mockRejectedValue(error);

    const useCase: AddStoreUseCase = new AddStoreUseCase(
      mockStoreRepository as StoreRepository,
    );

    await expect(useCase.execute(mockAddStore)).rejects.toThrow(error);
  });
});
