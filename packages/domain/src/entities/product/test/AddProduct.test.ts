import { describe, it, expect } from "vitest";
import AddProduct from "../AddProduct";

describe("AddProduct Entity", () => {
  it("should create AddProduct correctly when payload is valid", () => {
    const product = new AddProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
      "cat-123",
    );

    expect(product.getPhotoUrl()).toBeNull();
    expect(product.getSku()).toBe("SKU-001");
    expect(product.getName()).toBe("Laptop");
    expect(product.getDescription()).toBe("High performance laptop");
    expect(product.getCategoryId()).toBe("cat-123");
  });

  it("should throw error when sku is empty", () => {
    expect(() => {
      new AddProduct(null, "", "Laptop", "Desc", "cat-123");
    }).toThrow();
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new AddProduct(null, "SKU-001", "", "Desc", "cat-123");
    }).toThrow();
  });

  it("should throw error when description is empty", () => {
    expect(() => {
      new AddProduct(null, "SKU-001", "Laptop", "", "cat-123");
    }).toThrow();
  });

  it("should throw error when categoryId is empty", () => {
    expect(() => {
      new AddProduct(null, "SKU-001", "Laptop", "Desc", "");
    }).toThrow();
  });

  it("should update photoUrl correctly", () => {
    const product = new AddProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
      "cat-123",
    );

    product.setPhotoUrl("https://image.com/photo.png");

    expect(product.getPhotoUrl()).toBe("https://image.com/photo.png");
  });

  it("should update sku correctly when valid", () => {
    const product = new AddProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
      "cat-123",
    );

    product.setSku("SKU-999");

    expect(product.getSku()).toBe("SKU-999");
  });

  it("should throw error when updating sku with invalid value", () => {
    const product = new AddProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
      "cat-123",
    );

    expect(() => {
      product.setSku("");
    }).toThrow();
  });

  it("should update name correctly when valid", () => {
    const product = new AddProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
      "cat-123",
    );

    product.setName("Gaming Laptop");

    expect(product.getName()).toBe("Gaming Laptop");
  });

  it("should throw error when updating name with invalid value", () => {
    const product = new AddProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
      "cat-123",
    );

    expect(() => {
      product.setName("   ");
    }).toThrow();
  });

  it("should update description correctly when valid", () => {
    const product = new AddProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
      "cat-123",
    );

    product.setDescription("Updated description");

    expect(product.getDescription()).toBe("Updated description");
  });

  it("should throw error when updating description with invalid value", () => {
    const product = new AddProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
      "cat-123",
    );

    expect(() => {
      product.setDescription("");
    }).toThrow();
  });

  it("should update categoryId correctly when valid", () => {
    const product = new AddProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
      "cat-123",
    );

    product.setCategoryId("cat-999");

    expect(product.getCategoryId()).toBe("cat-999");
  });

  it("should throw error when updating categoryId with invalid value", () => {
    const product = new AddProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
      "cat-123",
    );

    expect(() => {
      product.setCategoryId("");
    }).toThrow();
  });
});
