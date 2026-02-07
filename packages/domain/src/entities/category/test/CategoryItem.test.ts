import { describe, it, expect } from "vitest";
import CategoryItem from "../CategoryItem";

describe("CategoryItem Entity", () => {
  it("should create CategoryItem correctly when payload is valid", () => {
    const categoryItem = new CategoryItem(
      "cat-123",
      1,
      true,
      "2025-02-07",
      null,
      null,
    );

    expect(categoryItem.getId()).toBe("cat-123");
    expect(categoryItem.getDisplayOrder()).toBe(1);
    expect(categoryItem.getIsActive()).toBe(true);
    expect(categoryItem.getCreatedAt()).toBe("2025-02-07");
    expect(categoryItem.getUpdatedAt()).toBeNull();
    expect(categoryItem.getDeletedAt()).toBeNull();
  });

  it("should throw error when id is empty", () => {
    expect(() => {
      new CategoryItem("", 1, true, "2025-02-07", null, null);
    }).toThrow();
  });

  it("should throw error when id is only whitespace", () => {
    expect(() => {
      new CategoryItem("   ", 1, true, "2025-02-07", null, null);
    }).toThrow();
  });

  it("should throw error when createdAt is empty", () => {
    expect(() => {
      new CategoryItem("cat-123", 1, true, "", null, null);
    }).toThrow();
  });

  it("should throw error when createdAt is only whitespace", () => {
    expect(() => {
      new CategoryItem("cat-123", 1, true, "   ", null, null);
    }).toThrow();
  });

  it("should update id correctly when valid", () => {
    const categoryItem = new CategoryItem(
      "cat-123",
      1,
      true,
      "2025-02-07",
      null,
      null,
    );

    categoryItem.setId("cat-999");

    expect(categoryItem.getId()).toBe("cat-999");
  });

  it("should throw error when updating id with invalid value", () => {
    const categoryItem = new CategoryItem(
      "cat-123",
      1,
      true,
      "2025-02-07",
      null,
      null,
    );

    expect(() => {
      categoryItem.setId("");
    }).toThrow();
  });

  it("should update displayOrder correctly", () => {
    const categoryItem = new CategoryItem(
      "cat-123",
      1,
      true,
      "2025-02-07",
      null,
      null,
    );

    categoryItem.setDisplayOrder(10);

    expect(categoryItem.getDisplayOrder()).toBe(10);
  });

  it("should update isActive correctly", () => {
    const categoryItem = new CategoryItem(
      "cat-123",
      1,
      true,
      "2025-02-07",
      null,
      null,
    );

    categoryItem.setIsActive(false);

    expect(categoryItem.getIsActive()).toBe(false);
  });

  it("should update createdAt correctly when valid", () => {
    const categoryItem = new CategoryItem(
      "cat-123",
      1,
      true,
      "2025-02-07",
      null,
      null,
    );

    categoryItem.setCreatedAt("2026-01-01");

    expect(categoryItem.getCreatedAt()).toBe("2026-01-01");
  });

  it("should throw error when updating createdAt with invalid value", () => {
    const categoryItem = new CategoryItem(
      "cat-123",
      1,
      true,
      "2025-02-07",
      null,
      null,
    );

    expect(() => {
      categoryItem.setCreatedAt("");
    }).toThrow();
  });

  it("should update updatedAt correctly", () => {
    const categoryItem = new CategoryItem(
      "cat-123",
      1,
      true,
      "2025-02-07",
      null,
      null,
    );

    categoryItem.setUpdatedAt("2025-02-08");

    expect(categoryItem.getUpdatedAt()).toBe("2025-02-08");
  });

  it("should update deletedAt correctly", () => {
    const categoryItem = new CategoryItem(
      "cat-123",
      1,
      true,
      "2025-02-07",
      null,
      null,
    );

    categoryItem.setDeletedAt("2025-03-01");

    expect(categoryItem.getDeletedAt()).toBe("2025-03-01");
  });
});
