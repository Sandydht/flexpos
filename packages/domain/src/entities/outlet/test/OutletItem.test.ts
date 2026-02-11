import { beforeEach, describe, expect, it } from "vitest";
import type OutletItem from "../OutletItem";
import { OUTLET_ITEM_ERROR_MESSAGE_KEY } from "../constants";
import { fixtures } from "../../../test/fixtures";
import { makeOutletItemPayload } from "./outletEntityFactory";
import { StoreItem, UserItem } from "../../entities";

describe("OutletItem entity", () => {
  const { outlet: validPayloadOutlet } = fixtures();
  let outlet: OutletItem<StoreItem<UserItem>>;

  beforeEach(() => {
    outlet = makeOutletItemPayload();
  });

  describe("constructor success case", () => {
    it("should create OutletItem entity when payload is valid", () => {
      expect(outlet.getId()).toBe(validPayloadOutlet.id);
      expect(outlet.getStore().getId()).toBe(validPayloadOutlet.store.id);
      expect(outlet.getName()).toBe(validPayloadOutlet.name);
      expect(outlet.getCode()).toBe(validPayloadOutlet.code);
      expect(outlet.getAddress()).toBe(validPayloadOutlet.address);
      expect(outlet.getCity()).toBe(validPayloadOutlet.city);
      expect(outlet.getProvince()).toBe(validPayloadOutlet.province);
      expect(outlet.getPostalCode()).toBe(validPayloadOutlet.postalCode);
      expect(outlet.getCountry()).toBe(validPayloadOutlet.country);
      expect(outlet.getEmail()).toBe(validPayloadOutlet.email);
      expect(outlet.getPhoneNumber()).toBe(validPayloadOutlet.phoneNumber);
      expect(outlet.getOpeningHours().monday).toEqual(
        validPayloadOutlet.openingHours.monday,
      );
      expect(outlet.getIsActive()).toBe(validPayloadOutlet.isActive);
      expect(outlet.getCreatedAt()).toBe(validPayloadOutlet.createdAt);
      expect(outlet.getUpdatedAt()).toBe(validPayloadOutlet.updatedAt);
      expect(outlet.getDeletedAt()).toBe(validPayloadOutlet.deletedAt);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when id is blank", () => {
      expect(() => makeOutletItemPayload({ id: "" })).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when name is blank", () => {
      expect(() => makeOutletItemPayload({ name: "" })).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when code is blank", () => {
      expect(() => makeOutletItemPayload({ code: "" })).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when address is blank", () => {
      expect(() => makeOutletItemPayload({ address: "" })).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when city is blank", () => {
      expect(() => makeOutletItemPayload({ city: "" })).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when province is blank", () => {
      expect(() => makeOutletItemPayload({ province: "" })).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when postalCode is blank", () => {
      expect(() => makeOutletItemPayload({ postalCode: "" })).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when country is blank", () => {
      expect(() => makeOutletItemPayload({ country: "" })).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when email is blank", () => {
      expect(() => makeOutletItemPayload({ email: "" })).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when phoneNumber is blank", () => {
      expect(() => makeOutletItemPayload({ phoneNumber: "" })).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when createdAt is blank", () => {
      expect(() => makeOutletItemPayload({ createdAt: "" })).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when email format is invalid", () => {
      expect(() =>
        makeOutletItemPayload({ email: "invalid-email" }),
      ).toThrowError(`${OUTLET_ITEM_ERROR_MESSAGE_KEY}.INVALID_EMAIL_FORMAT`);
    });

    it("should throw error when phoneNumber is invalid indonesian format", () => {
      expect(() =>
        makeOutletItemPayload({ phoneNumber: "invalid-phone-number" }),
      ).toThrowError(
        `${OUTLET_ITEM_ERROR_MESSAGE_KEY}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update id when valid", () => {
      outlet.setId(validPayloadOutlet.id);
      expect(outlet.getId()).toBe(validPayloadOutlet.id);
    });

    it("should update store when valid", () => {
      outlet.setStore(
        validPayloadOutlet.store as unknown as StoreItem<UserItem>,
      );
      expect(outlet.getStore()).toBe(validPayloadOutlet.store);
    });

    it("should update name when valid", () => {
      outlet.setName(validPayloadOutlet.name);
      expect(outlet.getName()).toBe(validPayloadOutlet.name);
    });

    it("should update code when valid", () => {
      outlet.setCode(validPayloadOutlet.code);
      expect(outlet.getCode()).toBe(validPayloadOutlet.code);
    });

    it("should update address when valid", () => {
      outlet.setAddress(validPayloadOutlet.address);
      expect(outlet.getAddress()).toBe(validPayloadOutlet.address);
    });

    it("should update city when valid", () => {
      outlet.setCity(validPayloadOutlet.city);
      expect(outlet.getCity()).toBe(validPayloadOutlet.city);
    });

    it("should update province when valid", () => {
      outlet.setProvince(validPayloadOutlet.province);
      expect(outlet.getProvince()).toBe(validPayloadOutlet.province);
    });

    it("should update postalCode when valid", () => {
      outlet.setPostalCode(validPayloadOutlet.postalCode);
      expect(outlet.getPostalCode()).toBe(validPayloadOutlet.postalCode);
    });

    it("should update country when valid", () => {
      outlet.setCountry(validPayloadOutlet.country);
      expect(outlet.getCountry()).toBe(validPayloadOutlet.country);
    });

    it("should update email when valid", () => {
      outlet.setEmail(validPayloadOutlet.email);
      expect(outlet.getEmail()).toBe(validPayloadOutlet.email);
    });

    it("should update phoneNumber when valid", () => {
      outlet.setPhoneNumber(validPayloadOutlet.phoneNumber);
      expect(outlet.getPhoneNumber()).toBe(validPayloadOutlet.phoneNumber);
    });

    it("should update openingHours when valid", () => {
      outlet.setOpeningHours(validPayloadOutlet.openingHours);
      expect(outlet.getOpeningHours()).toBe(validPayloadOutlet.openingHours);
    });

    it("should update isActive when valid", () => {
      outlet.setIsActive(validPayloadOutlet.isActive);
      expect(outlet.getIsActive()).toBe(validPayloadOutlet.isActive);
    });

    it("should update createdAt when valid", () => {
      outlet.setCreatedAt(validPayloadOutlet.createdAt);
      expect(outlet.getCreatedAt()).toBe(validPayloadOutlet.createdAt);
    });

    it("should update updatedAt when valid", () => {
      outlet.setUpdatedAt(validPayloadOutlet.updatedAt);
      expect(outlet.getUpdatedAt()).toBe(validPayloadOutlet.updatedAt);
    });

    it("should update deletedAt when valid", () => {
      outlet.setDeletedAt(validPayloadOutlet.deletedAt);
      expect(outlet.getDeletedAt()).toBe(validPayloadOutlet.deletedAt);
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
