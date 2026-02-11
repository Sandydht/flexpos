import { beforeEach, describe, expect, it, Mocked, vi } from "vitest";
import OpeningHours from "../../../entities/outlet/OpeningHours";
import {
  OutletItem,
  StoreItem,
  UpdateOutlet,
  UserItem,
} from "../../../entities/entities";
import { UserRole } from "../../../entities/user/types";
import OutletRepository from "../../../repositories/OutletRepository";
import UpdateOutletUseCase from "../UpdateOutletUseCase";
import {
  makeOutletItemPayload,
  makeUpdateOutletPayload,
} from "../../../entities/outlet/test/outletEntityFactory";
import { makeMockOutletRepository } from "./__mocks__/mockOutletRepository";
import { mockError } from "../../../test/helpers/mockError";

describe("UpdateOutletUseCase", () => {
  const mockOutletId: string = "outlet-1";
  let mockUpdateOutlet: UpdateOutlet;
  let mockOutletRepository: Mocked<OutletRepository>;

  beforeEach(() => {
    mockUpdateOutlet = makeUpdateOutletPayload();
    mockOutletRepository = makeMockOutletRepository();
  });

  it("should call reporitory updateOutlet and return OutletItem entity", async () => {
    const mockOutletItem: OutletItem<StoreItem<UserItem>> =
      makeOutletItemPayload();

    mockOutletRepository.updateOutlet.mockResolvedValue(mockOutletItem);

    const useCase: UpdateOutletUseCase = new UpdateOutletUseCase(
      mockOutletRepository as OutletRepository,
    );

    const result = await useCase.execute(mockOutletId, mockUpdateOutlet);

    expect(mockOutletRepository.updateOutlet).toHaveBeenCalledWith(
      mockOutletId,
      mockUpdateOutlet,
    );
    expect(result).toStrictEqual(mockOutletItem);
  });

  it("should throw error when repository throws error", async () => {
    const error: Error = mockError();

    mockOutletRepository.updateOutlet.mockRejectedValue(error);

    const useCase: UpdateOutletUseCase = new UpdateOutletUseCase(
      mockOutletRepository as OutletRepository,
    );

    await expect(
      useCase.execute(mockOutletId, mockUpdateOutlet),
    ).rejects.toThrow(error);
  });
});
