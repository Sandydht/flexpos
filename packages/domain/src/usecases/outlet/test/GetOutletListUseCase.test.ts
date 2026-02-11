import { describe, it, vi, expect } from "vitest";
import { PaginationQuery } from "../../../entities/utils/PaginationQuery";
import OpeningHours from "../../../entities/outlet/OpeningHours";
import { OutletItem, StoreItem, UserItem } from "../../../entities/entities";
import { UserRole } from "../../../entities/user/types";
import { PaginationMeta } from "../../../entities/utils/PaginationMeta";
import { PaginatedResult } from "../../../entities/utils/PaginatedResult";
import OutletRepository from "../../../repositories/OutletRepository";
import GetOutletListUseCase from "../GetOutletListUseCase";

describe("GetOutletListUseCase", () => {
  const mockPaginationQuery: PaginationQuery = {
    page: 1,
    size: 10,
  };

  const validPayload = {
    storeId: "store-1",
    name: "Outlet 1",
    code: "OUTLET-01",
    address: "Address",
    city: "South Jakarta",
    province: "DKI Jakarta",
    postalCode: "12345",
    country: "Indonesia",
    email: "outlet1@email.com",
    phoneNumber: "081234567890",
    openingHours: {
      monday: { open: "08:00", close: "22:00", isClosed: false },
      tuesday: { open: "08:00", close: "22:00", isClosed: false },
    } as unknown as OpeningHours,
    isActive: true,
  };

  it("should call repository and return StoreItem entity", async () => {
    const now = new Date("2026-03-02").toISOString();
    const mockUserItem: UserItem = new UserItem(
      "user-1",
      null,
      "validuser123",
      "user@mail.com",
      "081234567890",
      "User 123",
      "Valid Address",
      ["OWNER"] as unknown as UserRole[],
      now,
      null,
      null,
    );

    const mockStoreItem: StoreItem<UserItem> = new StoreItem<UserItem>(
      "store-1",
      mockUserItem,
      "Store 1",
      now,
      null,
      null,
    );

    const mockOutletItem: OutletItem<StoreItem<UserItem>> = new OutletItem<
      StoreItem<UserItem>
    >(
      "store-1",
      mockStoreItem,
      validPayload.name,
      validPayload.code,
      validPayload.address,
      validPayload.city,
      validPayload.province,
      validPayload.postalCode,
      validPayload.country,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.openingHours,
      validPayload.isActive,
      now,
      null,
      null,
    );

    const mockPaginationMeta: PaginationMeta = {
      page: mockPaginationQuery.page || 1,
      size: mockPaginationQuery.size || 10,
      totalItems: 10,
      totalPages: 1,
      hasNextPage: false,
      hasPrevPage: false,
    };

    const mockPaginatedResult: PaginatedResult<StoreItem<UserItem>> = {
      data: [mockStoreItem],
      meta: mockPaginationMeta,
      query: mockPaginationQuery,
    };

    const mockOutletRepository: Partial<OutletRepository> = {
      getOutletList: vi.fn().mockResolvedValue(mockPaginatedResult),
    };

    const useCase: GetOutletListUseCase = new GetOutletListUseCase(
      mockOutletRepository as OutletRepository,
    );

    const result = await useCase.execute(mockPaginationQuery);

    expect(mockOutletRepository.getOutletList).toHaveBeenCalledWith(
      mockPaginationQuery,
    );
    expect(result).toStrictEqual(mockPaginatedResult);
  });

  it("should throw error when repository throws error", async () => {
    const mockError: Error = new Error("SERVER_ERROR");

    const mockOutletRepository: Partial<OutletRepository> = {
      getOutletList: vi.fn().mockRejectedValue(mockError),
    };

    const useCase: GetOutletListUseCase = new GetOutletListUseCase(
      mockOutletRepository as OutletRepository,
    );

    await expect(useCase.execute(mockPaginationQuery)).rejects.toThrow(
      mockError.message,
    );
  });
});
