import { describe, expect, it } from "vitest";
import OpeningHours from "../OpeningHours";
import { UPDATE_OUTLET_ERROR_MESSAGE_KEY } from "../constants";
import UpdateOutlet from "../UpdateOutlet";

describe("UpdateOutlet entity", () => {
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

  const outlet: UpdateOutlet = new UpdateOutlet(
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

  describe("constructor success case", () => {
    it("should create UpdateOutlet entity when payload is valid", () => {
      expect(outlet.getStoreId()).toBe(validPayload.storeId);
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
    });
  });

  describe("constructor error case", () => {
    it("should throw error when storeId is blank", () => {
      expect(() => {
        new UpdateOutlet(
          "",
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours as unknown as OpeningHours,
          validPayload.isActive,
        );
      }).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when name is blank", () => {
      expect(() => {
        new UpdateOutlet(
          validPayload.storeId,
          "",
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours as unknown as OpeningHours,
          validPayload.isActive,
        );
      }).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when code is blank", () => {
      expect(() => {
        new UpdateOutlet(
          validPayload.storeId,
          validPayload.name,
          "",
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours as unknown as OpeningHours,
          validPayload.isActive,
        );
      }).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when address is blank", () => {
      expect(() => {
        new UpdateOutlet(
          validPayload.storeId,
          validPayload.name,
          validPayload.code,
          "",
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours as unknown as OpeningHours,
          validPayload.isActive,
        );
      }).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when city is blank", () => {
      expect(() => {
        new UpdateOutlet(
          validPayload.storeId,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          "",
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours as unknown as OpeningHours,
          validPayload.isActive,
        );
      }).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when province is blank", () => {
      expect(() => {
        new UpdateOutlet(
          validPayload.storeId,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          "",
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours as unknown as OpeningHours,
          validPayload.isActive,
        );
      }).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when postalCode is blank", () => {
      expect(() => {
        new UpdateOutlet(
          validPayload.storeId,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          "",
          validPayload.country,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours as unknown as OpeningHours,
          validPayload.isActive,
        );
      }).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when country is blank", () => {
      expect(() => {
        new UpdateOutlet(
          validPayload.storeId,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          "",
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.openingHours as unknown as OpeningHours,
          validPayload.isActive,
        );
      }).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when email is blank", () => {
      expect(() => {
        new UpdateOutlet(
          validPayload.storeId,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          "",
          validPayload.phoneNumber,
          validPayload.openingHours as unknown as OpeningHours,
          validPayload.isActive,
        );
      }).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when phoneNumber is blank", () => {
      expect(() => {
        new UpdateOutlet(
          validPayload.storeId,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          "",
          validPayload.openingHours as unknown as OpeningHours,
          validPayload.isActive,
        );
      }).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when email format is invalid", () => {
      expect(() => {
        new UpdateOutlet(
          validPayload.storeId,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          "invalid-email",
          validPayload.phoneNumber,
          validPayload.openingHours as unknown as OpeningHours,
          validPayload.isActive,
        );
      }).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.INVALID_EMAIL_FORMAT`,
      );
    });

    it("should throw error when phoneNumber is invalid indonesian format", () => {
      expect(() => {
        new UpdateOutlet(
          validPayload.storeId,
          validPayload.name,
          validPayload.code,
          validPayload.address,
          validPayload.city,
          validPayload.province,
          validPayload.postalCode,
          validPayload.country,
          validPayload.email,
          "invalid-phone-number",
          validPayload.openingHours as unknown as OpeningHours,
          validPayload.isActive,
        );
      }).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update storeId when valid", () => {
      outlet.setStoreId(validPayload.storeId);
      expect(outlet.getStoreId()).toBe(validPayload.storeId);
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
  });

  describe("setter error case", () => {
    it("should throw error when setting blank storeId", () => {
      expect(() => outlet.setStoreId("")).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank name", () => {
      expect(() => outlet.setName("")).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank code", () => {
      expect(() => outlet.setCode("")).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank address", () => {
      expect(() => outlet.setAddress("")).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank city", () => {
      expect(() => outlet.setCity("")).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank province", () => {
      expect(() => outlet.setProvince("")).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank postalCode", () => {
      expect(() => outlet.setPostalCode("")).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank country", () => {
      expect(() => outlet.setCountry("")).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank email", () => {
      expect(() => outlet.setEmail("")).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank phoneNumber", () => {
      expect(() => outlet.setPhoneNumber("")).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting invalid email format", () => {
      expect(() => outlet.setEmail("invalid-email")).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.INVALID_EMAIL_FORMAT`,
      );
    });

    it("should throw error when setting invalid indonesian phoneNumber format", () => {
      expect(() => outlet.setPhoneNumber("1234")).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    });
  });
});
