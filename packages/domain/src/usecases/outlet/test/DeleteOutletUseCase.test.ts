import { describe, it, expect, Mocked, beforeEach } from "vitest";
import { OutletItem, StoreItem, UserItem } from "../../../entities/entities";
import OutletRepository from "../../../repositories/OutletRepository";
import DeleteOutletUseCase from "../DeleteOutletUseCase";
import { makeMockOutletRepository } from "./__mocks__/mockOutletRepository";
import { makeOutletItemPayload } from "../../../entities/outlet/test/outletEntityFactory";
import { mockError } from "../../../test/helpers/mockError";

describe("DeleteOutletUseCase", () => {
  const mockOutletId: string = "outlet-1";
  let mockOutletRepository: Mocked<OutletRepository>;

  beforeEach(() => {
    mockOutletRepository = makeMockOutletRepository();
  });

  it("should call reporitory deleteOutlet and return OutletItem entity", async () => {
    const mockOutletItem: OutletItem<StoreItem<UserItem>> =
      makeOutletItemPayload();

    mockOutletRepository.deleteOutlet.mockResolvedValue(mockOutletItem);

    const useCase: DeleteOutletUseCase = new DeleteOutletUseCase(
      mockOutletRepository as OutletRepository,
    );

    const result = await useCase.execute(mockOutletId);

    expect(mockOutletRepository.deleteOutlet).toHaveBeenCalledWith(
      mockOutletId,
    );
    expect(result).toStrictEqual(mockOutletItem);
  });

  it("should throw error when repository throws error", async () => {
    const error: Error = mockError();

    mockOutletRepository.deleteOutlet.mockRejectedValue(error);

    const useCase: DeleteOutletUseCase = new DeleteOutletUseCase(
      mockOutletRepository as OutletRepository,
    );

    await expect(useCase.execute(mockOutletId)).rejects.toThrow(error);
  });
});
