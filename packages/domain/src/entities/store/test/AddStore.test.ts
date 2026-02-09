import { describe, expect, it } from "vitest";
import AddStore from "../AddStore";

describe("AddStore entity", () => {
  const errorMessageKey: string = "ADD_STORE";
  const validPayload = {
    userId: "user-1",
    name: "Store 1",
  };

  const store: AddStore = new AddStore(validPayload.userId, validPayload.name);

  describe("constructor success case", () => {
    it("should create AddStore entity when payload is valid", () => {
      expect(store.getUserId()).toBe(validPayload.userId);
      expect(store.getName()).toBe(validPayload.name);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when userId is blank", () => {
      expect(() => {
        new AddStore("", validPayload.name);
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when name is blank", () => {
      expect(() => {
        new AddStore(validPayload.userId, "");
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });
  });

  describe("setter success case", () => {
    it("should update userId when valid", () => {
      store.setUserId(validPayload.userId);
      expect(store.getUserId()).toBe(validPayload.userId);
    });

    it("should update name when valid", () => {
      store.setName(validPayload.name);
      expect(store.getName()).toBe(validPayload.name);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank userId", () => {
      expect(() => store.setUserId("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank name", () => {
      expect(() => store.setName("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
