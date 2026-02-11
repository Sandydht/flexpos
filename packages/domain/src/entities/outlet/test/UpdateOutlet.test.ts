import { beforeEach, describe, expect, it } from "vitest";
import OpeningHours from "../OpeningHours";
import { UPDATE_OUTLET_ERROR_MESSAGE_KEY } from "../constants";
import UpdateOutlet from "../UpdateOutlet";
import { fixtures } from "../../../test/fixtures";
import { makeUpdateOutletPayload } from "./outletEntityFactory";

describe("UpdateOutlet entity", () => {
  const { store: validPayloadStore, outlet: validPayloadOutlet } = fixtures();
  let outlet: UpdateOutlet;

  beforeEach(() => {
    outlet = makeUpdateOutletPayload();
  });

  describe("constructor success case", () => {
    it("should create UpdateOutlet entity when payload is valid", () => {
      expect(outlet.getStoreId()).toBe(validPayloadStore.id);
      expect(outlet.getName()).toBe(validPayloadOutlet.name);
      expect(outlet.getCode()).toBe(validPayloadOutlet.code);
      expect(outlet.getAddress()).toBe(validPayloadOutlet.address);
      expect(outlet.getCity()).toBe(validPayloadOutlet.city);
      expect(outlet.getProvince()).toBe(validPayloadOutlet.province);
      expect(outlet.getPostalCode()).toBe(validPayloadOutlet.postalCode);
      expect(outlet.getCountry()).toBe(validPayloadOutlet.country);
      expect(outlet.getEmail()).toBe(validPayloadOutlet.email);
      expect(outlet.getPhoneNumber()).toBe(validPayloadOutlet.phoneNumber);
      expect(outlet.getOpeningHours()).toEqual(validPayloadOutlet.openingHours);
      expect(outlet.getIsActive()).toBe(validPayloadOutlet.isActive);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when storeId is blank", () => {
      expect(() => makeUpdateOutletPayload({ store: { id: "" } })).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when name is blank", () => {
      expect(() =>
        makeUpdateOutletPayload({ outlet: { name: "" } }),
      ).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when code is blank", () => {
      expect(() =>
        makeUpdateOutletPayload({ outlet: { code: "" } }),
      ).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when address is blank", () => {
      expect(() =>
        makeUpdateOutletPayload({ outlet: { address: "" } }),
      ).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when city is blank", () => {
      expect(() =>
        makeUpdateOutletPayload({ outlet: { city: "" } }),
      ).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when province is blank", () => {
      expect(() =>
        makeUpdateOutletPayload({ outlet: { province: "" } }),
      ).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when postalCode is blank", () => {
      expect(() =>
        makeUpdateOutletPayload({ outlet: { postalCode: "" } }),
      ).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when country is blank", () => {
      expect(() =>
        makeUpdateOutletPayload({ outlet: { country: "" } }),
      ).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when email is blank", () => {
      expect(() =>
        makeUpdateOutletPayload({ outlet: { email: "" } }),
      ).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when phoneNumber is blank", () => {
      expect(() =>
        makeUpdateOutletPayload({ outlet: { phoneNumber: "" } }),
      ).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when email format is invalid", () => {
      expect(() =>
        makeUpdateOutletPayload({ outlet: { email: "invalid-email" } }),
      ).toThrowError(`${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.INVALID_EMAIL_FORMAT`);
    });

    it("should throw error when phoneNumber is invalid indonesian format", () => {
      expect(() =>
        makeUpdateOutletPayload({
          outlet: { phoneNumber: "invalid-phone-number" },
        }),
      ).toThrowError(
        `${UPDATE_OUTLET_ERROR_MESSAGE_KEY}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update storeId when valid", () => {
      outlet.setStoreId(validPayloadStore.id);
      expect(outlet.getStoreId()).toBe(validPayloadStore.id);
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
