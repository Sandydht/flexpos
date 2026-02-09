import { describe, it, expect } from "vitest";
import UpdateCategory from "../UpdateCategory";

describe("UpdateCategory Entity", () => {
  const errorMessageKey: string = "UPDATE_CATEGORY";
  const validPayload = {
    name: "Category 1",
    displayOrder: 1,
    isActive: true,
  };

  const category: UpdateCategory = new UpdateCategory(
    validPayload.name,
    validPayload.displayOrder,
    validPayload.isActive,
  );

  describe("constructor success case", () => {
    it("should create UpdateCategory entity when payload is valid", () => {
      expect(category.getName()).toBe(validPayload.name);
      expect(category.getDisplayOrder()).toBe(validPayload.displayOrder);
      expect(category.getIsActive()).toBe(validPayload.isActive);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when name is blank", () => {
      expect(() => {
        new UpdateCategory(
          "",
          validPayload.displayOrder,
          validPayload.isActive,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });
  });

  describe("setter success case", () => {
    it("should update name when valid", () => {
      category.setName(validPayload.name);
      expect(category.getName()).toBe(validPayload.name);
    });

    it("should update displayOrder when valid", () => {
      category.setDisplayOrder(validPayload.displayOrder);
      expect(category.getDisplayOrder()).toBe(validPayload.displayOrder);
    });

    it("should update isActive when valid", () => {
      category.setIsActive(validPayload.isActive);
      expect(category.getIsActive()).toBe(validPayload.isActive);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank id", () => {
      expect(() => category.setName("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
