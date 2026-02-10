import { describe, expect, it } from "vitest";
import OutletItem from "../OutletItem";
import OpeningHours from "../OpeningHours";
import { OUTLET_ITEM_ERROR_MESSAGE_KEY } from "../constants";

describe("OutletItem entity", () => {
  const now = new Date("2026-03-02").toISOString();
  const validPayload = {
    id: "store-1",
    store: "store-1",
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
    createdAt: now,
    updatedAt: null,
    deletedAt: null,
  };

  const outlet: OutletItem<string> = new OutletItem<string>(
    validPayload.id,
    validPayload.store,
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
    validPayload.createdAt,
    validPayload.updatedAt,
    validPayload.deletedAt,
  );

  describe("constructor success case", () => {
    it("should create OutletItem entity when payload is valid", () => {
      expect(outlet.getId()).toBe(validPayload.id);
      expect(outlet.getStore()).toBe(validPayload.store);
      expect(outlet.getName()).toBe(validPayload.name);
      expect(outlet.getCode()).toBe(validPayload.code);
      expect(outlet.getAddress()).toBe(validPayload.address);
      expect(outlet.getCity()).toBe(validPayload.city);
      expect(outlet.getProvince()).toBe(validPayload.province);
      expect(outlet.getPostalCode()).toBe(validPayload.postalCode);
      expect(outlet.getCountry()).toBe(validPayload.country);
      expect(outlet.getEmail()).toBe(validPayload.email);
      expect(outlet.getPhoneNumber()).toBe(validPayload.phoneNumber);
      expect(outlet.getOpeningHours()).toBe(validPayload.openingHours);
      expect(outlet.getIsActive()).toBe(validPayload.isActive);
      expect(outlet.getCreatedAt()).toBe(validPayload.createdAt);
      expect(outlet.getUpdatedAt()).toBe(validPayload.updatedAt);
      expect(outlet.getDeletedAt()).toBe(validPayload.deletedAt);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when id is blank", () => {
      expect(() => {
        new OutletItem<string>(
          "",
          validPayload.store,
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
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when name is blank", () => {
      expect(() => {
        new OutletItem<string>(
          validPayload.id,
          validPayload.store,
          "",
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
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when code is blank", () => {
      expect(() => {
        new OutletItem<string>(
          validPayload.id,
          validPayload.store,
          validPayload.name,
          "",
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours,
          validPayload.isActive,
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when address is blank", () => {
      expect(() => {
        new OutletItem<string>(
          validPayload.id,
          validPayload.store,
          validPayload.name,
          validPayload.code,
          "",
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours,
          validPayload.isActive,
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when city is blank", () => {
      expect(() => {
        new OutletItem<string>(
          validPayload.id,
          validPayload.store,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          "",
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours,
          validPayload.isActive,
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when province is blank", () => {
      expect(() => {
        new OutletItem<string>(
          validPayload.id,
          validPayload.store,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          "",
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours,
          validPayload.isActive,
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when postalCode is blank", () => {
      expect(() => {
        new OutletItem<string>(
          validPayload.id,
          validPayload.store,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          "",
          validPayload.country,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours,
          validPayload.isActive,
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when country is blank", () => {
      expect(() => {
        new OutletItem<string>(
          validPayload.id,
          validPayload.store,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          "",
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours,
          validPayload.isActive,
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when email is blank", () => {
      expect(() => {
        new OutletItem<string>(
          validPayload.id,
          validPayload.store,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          "",
          validPayload.phoneNumber,
          validPayload.openingHours,
          validPayload.isActive,
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when phoneNumber is blank", () => {
      expect(() => {
        new OutletItem<string>(
          validPayload.id,
          validPayload.store,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          "",
          validPayload.openingHours,
          validPayload.isActive,
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when createdAt is blank", () => {
      expect(() => {
        new OutletItem<string>(
          validPayload.id,
          validPayload.store,
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
          "",
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when email format is invalid", () => {
      expect(() => {
        new OutletItem<string>(
          validPayload.id,
          validPayload.store,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          "invalid-email",
          validPayload.phoneNumber,
          validPayload.openingHours,
          validPayload.isActive,
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${OUTLET_ITEM_ERROR_MESSAGE_KEY}.INVALID_EMAIL_FORMAT`);
    });

    it("should throw error when phoneNumber is invalid indonesian format", () => {
      expect(() => {
        new OutletItem<string>(
          validPayload.id,
          validPayload.store,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          "invalid-phone-number",
          validPayload.openingHours,
          validPayload.isActive,
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update id when valid", () => {
      outlet.setId(validPayload.id);
      expect(outlet.getId()).toBe(validPayload.id);
    });

    it("should update store when valid", () => {
      outlet.setStore(validPayload.store);
      expect(outlet.getStore()).toBe(validPayload.store);
    });

    it("should update name when valid", () => {
      outlet.setName(validPayload.name);
      expect(outlet.getName()).toBe(validPayload.name);
    });

    it("should update code when valid", () => {
      outlet.setCode(validPayload.code);
      expect(outlet.getCode()).toBe(validPayload.code);
    });

    it("should update address when valid", () => {
      outlet.setAddress(validPayload.address);
      expect(outlet.getAddress()).toBe(validPayload.address);
    });

    it("should update city when valid", () => {
      outlet.setCity(validPayload.city);
      expect(outlet.getCity()).toBe(validPayload.city);
    });

    it("should update province when valid", () => {
      outlet.setProvince(validPayload.province);
      expect(outlet.getProvince()).toBe(validPayload.province);
    });

    it("should update postalCode when valid", () => {
      outlet.setPostalCode(validPayload.postalCode);
      expect(outlet.getPostalCode()).toBe(validPayload.postalCode);
    });

    it("should update country when valid", () => {
      outlet.setCountry(validPayload.country);
      expect(outlet.getCountry()).toBe(validPayload.country);
    });

    it("should update email when valid", () => {
      outlet.setEmail(validPayload.email);
      expect(outlet.getEmail()).toBe(validPayload.email);
    });

    it("should update phoneNumber when valid", () => {
      outlet.setPhoneNumber(validPayload.phoneNumber);
      expect(outlet.getPhoneNumber()).toBe(validPayload.phoneNumber);
    });

    it("should update openingHours when valid", () => {
      outlet.setOpeningHours(validPayload.openingHours);
      expect(outlet.getOpeningHours()).toBe(validPayload.openingHours);
    });

    it("should update isActive when valid", () => {
      outlet.setIsActive(validPayload.isActive);
      expect(outlet.getIsActive()).toBe(validPayload.isActive);
    });

    it("should update createdAt when valid", () => {
      outlet.setCreatedAt(validPayload.createdAt);
      expect(outlet.getCreatedAt()).toBe(validPayload.createdAt);
    });

    it("should update updatedAt when valid", () => {
      outlet.setUpdatedAt(validPayload.updatedAt);
      expect(outlet.getUpdatedAt()).toBe(validPayload.updatedAt);
    });

    it("should update deletedAt when valid", () => {
      outlet.setDeletedAt(validPayload.deletedAt);
      expect(outlet.getDeletedAt()).toBe(validPayload.deletedAt);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank id", () => {
      expect(() => outlet.setId("")).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank name", () => {
      expect(() => outlet.setName("")).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank code", () => {
      expect(() => outlet.setCode("")).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank address", () => {
      expect(() => outlet.setAddress("")).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank city", () => {
      expect(() => outlet.setCity("")).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank province", () => {
      expect(() => outlet.setProvince("")).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank postalCode", () => {
      expect(() => outlet.setPostalCode("")).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank country", () => {
      expect(() => outlet.setCountry("")).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank email", () => {
      expect(() => outlet.setEmail("")).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank phoneNumber", () => {
      expect(() => outlet.setPhoneNumber("")).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank createdAt", () => {
      expect(() => outlet.setCreatedAt("")).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting invalid email format", () => {
      expect(() => outlet.setEmail("invalid-email")).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.INVALID_EMAIL_FORMAT`,
      );
    });

    it("should throw error when setting invalid indonesian phoneNumber format", () => {
      expect(() => outlet.setPhoneNumber("1234")).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    });
  });
});
