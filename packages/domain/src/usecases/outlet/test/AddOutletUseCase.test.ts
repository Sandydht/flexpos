import { describe, expect, it, vi } from "vitest";
import {
  AddOutlet,
  OutletItem,
  StoreItem,
  UserItem,
} from "../../../entities/entities";
import OpeningHours from "../../../entities/outlet/OpeningHours";
import { UserRole } from "../../../entities/user/types";
import OutletRepository from "../../../repositories/OutletRepository";
import AddOutletUseCase from "../AddOutletUseCase";

describe("AddOutletUseCase", () => {
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

  const mockAddOutlet: AddOutlet = new AddOutlet(
    validPayload.storeId,
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
  );

  it("should call reporitory addOutlet and return OutletItem entity", async () => {
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

    const mockOutletRepository: Partial<OutletRepository> = {
      addOutlet: vi.fn().mockResolvedValue(mockOutletItem),
    };

    const useCase: AddOutletUseCase = new AddOutletUseCase(
      mockOutletRepository as OutletRepository,
    );

    const result = await useCase.execute(mockAddOutlet);

    expect(mockOutletRepository.addOutlet).toHaveBeenCalledWith(mockAddOutlet);
    expect(result).toStrictEqual(mockOutletItem);
  });

  it("should throw error when repository throws error", async () => {
    const mockError: Error = new Error("SERVER_ERROR");

    const mockOutletRepository: Partial<OutletRepository> = {
      addOutlet: vi.fn().mockRejectedValue(mockError),
    };

    const useCase: AddOutletUseCase = new AddOutletUseCase(
      mockOutletRepository as OutletRepository,
    );

    await expect(useCase.execute(mockAddOutlet)).rejects.toThrow(
      mockError.message,
    );
  });
});
