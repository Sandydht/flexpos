import { beforeEach, describe, expect, it, Mocked } from "vitest";
import {
  AddOutlet,
  OutletItem,
  StoreItem,
  UserItem,
} from "../../../entities/entities";
import OutletRepository from "../../../repositories/OutletRepository";
import AddOutletUseCase from "../AddOutletUseCase";
import {
  makeAddOutletPayload,
  makeOutletItemPayload,
} from "../../../entities/outlet/test/outletEntityFactory";
import { makeMockOutletRepository } from "./__mocks__/mockOutletRepository";
import { mockError } from "../../../test/helpers/mockError";

describe("AddOutletUseCase", () => {
  let mockAddOutlet: AddOutlet;
  let mockOutletRepository: Mocked<OutletRepository>;

  beforeEach(() => {
    mockAddOutlet = makeAddOutletPayload();
    mockOutletRepository = makeMockOutletRepository();
  });

  it("should call reporitory addOutlet and return OutletItem entity", async () => {
    const mockOutletItem: OutletItem<StoreItem<UserItem>> =
      makeOutletItemPayload();

    mockOutletRepository.addOutlet.mockResolvedValue(mockOutletItem);

    const useCase: AddOutletUseCase = new AddOutletUseCase(
      mockOutletRepository as OutletRepository,
    );

    const result = await useCase.execute(mockAddOutlet);

    expect(mockOutletRepository.addOutlet).toHaveBeenCalledWith(mockAddOutlet);
    expect(result).toStrictEqual(mockOutletItem);
  });

  it("should throw error when repository throws error", async () => {
    const error: Error = mockError();

    mockOutletRepository.addOutlet.mockRejectedValue(error);

    const useCase: AddOutletUseCase = new AddOutletUseCase(
      mockOutletRepository as OutletRepository,
    );

    await expect(useCase.execute(mockAddOutlet)).rejects.toThrow(error);
  });
});
