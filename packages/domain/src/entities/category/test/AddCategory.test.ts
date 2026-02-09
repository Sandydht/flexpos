import { describe, it, expect } from "vitest";
import AddCategory from "../AddCategory";

describe("AddCategory Entity", () => {
  const errorMessageKey: string = "ADD_CATEGORY";
  const validPayload = {
    name: "Category 1",
    displayOrder: 1,
    isActive: true,
  };

  const category: AddCategory = new AddCategory(
    validPayload.name,
    validPayload.displayOrder,
    validPayload.isActive,
  );

  describe("constructor success case", () => {
    it("should create AddCategory entity when payload is valid", () => {
      expect(category.getName()).toBe(validPayload.name);
      expect(category.getDisplayOrder()).toBe(validPayload.displayOrder);
      expect(category.getIsActive()).toBe(validPayload.isActive);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when name is blank", () => {
      expect(() => {
        new AddCategory("", validPayload.displayOrder, validPayload.isActive);
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });
  });

  describe("setter success case", () => {
    it("should update name when valid", () => {
      category.setName(validPayload.name);
      expect(category.getName()).toBe(validPayload.name);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank name", () => {
      expect(() => category.setName("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
