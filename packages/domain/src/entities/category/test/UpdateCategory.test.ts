import { describe, it, expect } from "vitest";
import UpdateCategory from "../UpdateCategory";

describe("UpdateCategory Entity", () => {
  it("should create UpdateCategory correctly when payload is valid", () => {
    const category = new UpdateCategory("Food", 1, true);

    expect(category.getName()).toBe("Food");
    expect(category.getDisplayOrder()).toBe(1);
    expect(category.getIsActive()).toBe(true);
  });

  it("should throw error when name is empty string", () => {
    expect(() => {
      new UpdateCategory("", 1, true);
    }).toThrow();
  });

  it("should throw error when name is only whitespace", () => {
    expect(() => {
      new UpdateCategory("   ", 1, true);
    }).toThrow();
  });

  it("should update name correctly when valid", () => {
    const category = new UpdateCategory("Food", 1, true);

    category.setName("Beverage");

    expect(category.getName()).toBe("Beverage");
  });

  it("should throw error when updating name with invalid value", () => {
    const category = new UpdateCategory("Food", 1, true);

    expect(() => {
      category.setName("");
    }).toThrow();
  });

  it("should update displayOrder correctly", () => {
    const category = new UpdateCategory("Food", 1, true);

    category.setDisplayOrder(10);

    expect(category.getDisplayOrder()).toBe(10);
  });

  it("should update isActive correctly", () => {
    const category = new UpdateCategory("Food", 1, true);

    category.setIsActive(false);

    expect(category.getIsActive()).toBe(false);
  });
});
