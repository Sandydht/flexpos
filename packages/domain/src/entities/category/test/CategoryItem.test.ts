import { describe, it, expect } from "vitest";
import CategoryItem from "../CategoryItem";

describe("CategoryItem Entity", () => {
  const errorMessageKey: string = "CATEGORY_ITEM";
  const now = new Date("2026-03-02").toISOString();
  const validPayload = {
    id: "category-1",
    name: "Category 1",
    displayOrder: 1,
    isActive: true,
    createdAt: now,
    updatedAt: null,
    deletedAt: null,
  };

  const category: CategoryItem = new CategoryItem(
    validPayload.id,
    validPayload.name,
    validPayload.displayOrder,
    validPayload.isActive,
    validPayload.createdAt,
    validPayload.updatedAt,
    validPayload.deletedAt,
  );

  describe("constructor success case", () => {
    it("should create CategoryItem entity when payload is valid", () => {
      expect(category.getId()).toBe(validPayload.id);
      expect(category.getName()).toBe(validPayload.name);
      expect(category.getDisplayOrder()).toBe(validPayload.displayOrder);
      expect(category.getIsActive()).toBe(validPayload.isActive);
      expect(category.getCreatedAt()).toBe(validPayload.createdAt);
      expect(category.getUpdatedAt()).toBe(validPayload.updatedAt);
      expect(category.getDeletedAt()).toBe(validPayload.deletedAt);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when id is blank", () => {
      expect(() => {
        new CategoryItem(
          "",
          validPayload.name,
          validPayload.displayOrder,
          validPayload.isActive,
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when name is blank", () => {
      expect(() => {
        new CategoryItem(
          validPayload.id,
          "",
          validPayload.displayOrder,
          validPayload.isActive,
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when createdAt is blank", () => {
      expect(() => {
        new CategoryItem(
          validPayload.id,
          validPayload.name,
          validPayload.displayOrder,
          validPayload.isActive,
          "",
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });
  });

  describe("setter success case", () => {
    it("should update id when valid", () => {
      category.setId(validPayload.id);
      expect(category.getId()).toBe(validPayload.id);
    });

    it("should update name when valid", () => {
      category.setName(validPayload.name);
      expect(category.getName()).toBe(validPayload.name);
    });

    it("should update createdAt when valid", () => {
      category.setCreatedAt(now);
      expect(category.getCreatedAt()).toBe(now);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank id", () => {
      expect(() => category.setId("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank name", () => {
      expect(() => category.setName("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank createdAt", () => {
      expect(() => category.setCreatedAt("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
