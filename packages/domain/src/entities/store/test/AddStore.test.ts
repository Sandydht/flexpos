import { beforeEach, describe, expect, it } from "vitest";
import AddStore from "../AddStore";
import { ADD_STORE_ERROR_MESSAGE_KEY } from "../constants";
import { makeAddStorePayload } from "./storeEntityFactory";
import { fixtures } from "../../../test/fixtures";

describe("AddStore entity", () => {
  const { user: validPayloadUser, store: validPayloadStore } = fixtures();
  let store: AddStore;

  beforeEach(() => {
    store = makeAddStorePayload();
  });

  describe("constructor success case", () => {
    it("should create AddStore entity when payload is valid", () => {
      expect(store.getUserId()).toBe(validPayloadUser.id);
      expect(store.getName()).toBe(validPayloadStore.name);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when userId is blank", () => {
      expect(() => makeAddStorePayload({ user: { id: "" } })).toThrowError(
        `${ADD_STORE_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when name is blank", () => {
      expect(() => makeAddStorePayload({ store: { name: "" } })).toThrowError(
        `${ADD_STORE_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update userId when valid", () => {
      store.setUserId(validPayloadUser.id);
      expect(store.getUserId()).toBe(validPayloadUser.id);
    });

    it("should update name when valid", () => {
      store.setName(validPayloadStore.name);
      expect(store.getName()).toBe(validPayloadStore.name);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank userId", () => {
      expect(() => store.setUserId("")).toThrowError(
        `${ADD_STORE_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank name", () => {
      expect(() => store.setName("")).toThrowError(
        `${ADD_STORE_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
