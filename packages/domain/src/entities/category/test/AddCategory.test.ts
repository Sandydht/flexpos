import { describe, it, expect } from "vitest";
import AddCategory from "../AddCategory";

describe("AddCategory Entity", () => {
  const errorMessageKey: string = "ADD_CATEGORY";
  const validPayload = {
    storeId: "store-1",
    name: "Category 1",
    displayOrder: 1,
    isActive: true,
  };

  const category: AddCategory = new AddCategory(
    validPayload.storeId,
    validPayload.name,
    validPayload.displayOrder,
    validPayload.isActive,
  );

  describe("constructor success case", () => {
    it("should create AddCategory entity when payload is valid", () => {
      expect(category.getStoreId()).toBe(validPayload.storeId);
      expect(category.getName()).toBe(validPayload.name);
      expect(category.getDisplayOrder()).toBe(validPayload.displayOrder);
      expect(category.getIsActive()).toBe(validPayload.isActive);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when storeId is blank", () => {
      expect(() => {
        new AddCategory(
          "",
          validPayload.name,
          validPayload.displayOrder,
          validPayload.isActive,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when name is blank", () => {
      expect(() => {
        new AddCategory(
          validPayload.storeId,
          "",
          validPayload.displayOrder,
          validPayload.isActive,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });
  });

  describe("setter success case", () => {
    it("should update storeId when valid", () => {
      category.setStoreId(validPayload.storeId);
      expect(category.getStoreId()).toBe(validPayload.storeId);
    });

    it("should update name when valid", () => {
      category.setName(validPayload.name);
      expect(category.getName()).toBe(validPayload.name);
    });

    it("should update displayOrder when valid", () => {
      category.setDisplayOrder(validPayload.displayOrder);
      expect(category.getDisplayOrder()).toBe(validPayload.displayOrder);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank storeId", () => {
      expect(() => category.setStoreId("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank name", () => {
      expect(() => category.setName("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
