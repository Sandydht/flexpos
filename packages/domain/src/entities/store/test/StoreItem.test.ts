import { describe, expect, it } from "vitest";
import StoreItem from "../StoreItem";

describe("StoreItem entity", () => {
  const errorMessageKey: string = "STORE_ITEM";
  const now = new Date("2026-03-02").toISOString();
  const validPayload = {
    id: "store-1",
    owner: "user-1",
    name: "Store 1",
    createdAt: now,
    updatedAt: null,
    deletedAt: null,
  };

  const store: StoreItem<string> = new StoreItem<string>(
    validPayload.id,
    validPayload.owner,
    validPayload.name,
    validPayload.createdAt,
    validPayload.updatedAt,
    validPayload.deletedAt,
  );

  describe("constructor success case", () => {
    it("should create StoreItem entity when payload is valid", () => {
      expect(store.getId()).toBe(validPayload.id);
      expect(store.getOwner()).toBe(validPayload.owner);
      expect(store.getName()).toBe(validPayload.name);
      expect(store.getCreatedAt()).toBe(validPayload.createdAt);
      expect(store.getUpdatedAt()).toBe(validPayload.updatedAt);
      expect(store.getDeletedAt()).toBe(validPayload.deletedAt);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when id is blank", () => {
      expect(() => {
        new StoreItem<string>(
          "",
          validPayload.owner,
          validPayload.name,
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when name is blank", () => {
      expect(() => {
        new StoreItem<string>(
          validPayload.id,
          validPayload.owner,
          "",
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when createdAt is blank", () => {
      expect(() => {
        new StoreItem<string>(
          validPayload.id,
          validPayload.owner,
          validPayload.name,
          "",
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });
  });

  describe("setter success case", () => {
    it("should update id when valid", () => {
      store.setId(validPayload.id);
      expect(store.getId()).toBe(validPayload.id);
    });

    it("should update name when valid", () => {
      store.setName(validPayload.name);
      expect(store.getName()).toBe(validPayload.name);
    });

    it("should update createdAt when valid", () => {
      store.setCreatedAt(validPayload.createdAt);
      expect(store.getCreatedAt()).toBe(validPayload.createdAt);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank id", () => {
      expect(() => store.setId("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank name", () => {
      expect(() => store.setName("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank createdAt", () => {
      expect(() => store.setCreatedAt("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
