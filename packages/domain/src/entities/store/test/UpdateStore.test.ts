import { beforeEach, describe, expect, it } from "vitest";
import UpdateStore from "../UpdateStore";
import { UPDATE_STORE_ERROR_MESSAGE_KEY } from "../constants";
import { makeUpdateStorePayload } from "./storeEntityFactory";
import { fixtures } from "../../../test/fixtures";

describe("UpdateStore entity", () => {
  const { store: validPayloadStore } = fixtures();
  let store: UpdateStore;

  beforeEach(() => {
    store = makeUpdateStorePayload();
  });

  describe("constructor success case", () => {
    it("should create UpdateStore entity when payload is valid", () => {
      expect(store.getName()).toBe(validPayloadStore.name);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when name is blank", () => {
      expect(() =>
        makeUpdateStorePayload({ store: { name: "" } }),
      ).toThrowError(
        `${UPDATE_STORE_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update name when valid", () => {
      store.setName(validPayloadStore.name);
      expect(store.getName()).toBe(validPayloadStore.name);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank name", () => {
      expect(() => store.setName("")).toThrowError(
        `${UPDATE_STORE_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
