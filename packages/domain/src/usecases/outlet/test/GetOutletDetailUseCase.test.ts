import { beforeEach, describe, expect, it, Mocked } from "vitest";
import { OutletItem, StoreItem, UserItem } from "../../../entities/entities";
import OutletRepository from "../../../repositories/OutletRepository";
import GetOutletDetailUseCase from "../GetOutletDetailUseCase";
import { makeMockOutletRepository } from "./__mocks__/mockOutletRepository";
import { makeOutletItemPayload } from "../../../entities/outlet/test/outletEntityFactory";
import { mockError } from "../../../test/helpers/mockError";

describe("GetOutletDetailUseCase", () => {
  const mockOutletId: string = "outlet-1";
  let mockOutletRepository: Mocked<OutletRepository>;

  beforeEach(() => {
    mockOutletRepository = makeMockOutletRepository();
  });

  it("should call reporitory getOutletDetail and return OutletItem entity", async () => {
    const mockOutletItem: OutletItem<StoreItem<UserItem>> =
      makeOutletItemPayload();

    mockOutletRepository.getOutletDetail.mockResolvedValue(mockOutletItem);

    const useCase: GetOutletDetailUseCase = new GetOutletDetailUseCase(
      mockOutletRepository as OutletRepository,
    );

    const result = await useCase.execute(mockOutletId);

    expect(mockOutletRepository.getOutletDetail).toHaveBeenCalledWith(
      mockOutletId,
    );
    expect(result).toStrictEqual(mockOutletItem);
  });

  it("should throw error when repository throws error", async () => {
    const error: Error = mockError();

    mockOutletRepository.getOutletDetail.mockRejectedValue(error);

    const useCase: GetOutletDetailUseCase = new GetOutletDetailUseCase(
      mockOutletRepository as OutletRepository,
    );

    await expect(useCase.execute(mockOutletId)).rejects.toThrow(error);
  });
});
