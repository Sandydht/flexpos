import { describe, expect, it } from "vitest";
import UpdateStore from "../UpdateStore";
import { UPDATE_STORE_ERROR_MESSAGE_KEY } from "../constants";

describe("UpdateStore entity", () => {
  const validPayload = {
    name: "Store 1",
  };

  const store: UpdateStore = new UpdateStore(validPayload.name);

  describe("constructor success case", () => {
    it("should create UpdateStore entity when payload is valid", () => {
      expect(store.getName()).toBe(validPayload.name);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when id is blank", () => {
      expect(() => {
        new UpdateStore("");
      }).toThrowError(
        `${UPDATE_STORE_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update name when valid", () => {
      store.setName(validPayload.name);
      expect(store.getName()).toBe(validPayload.name);
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
