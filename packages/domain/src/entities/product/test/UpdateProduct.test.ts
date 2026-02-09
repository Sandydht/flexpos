import { describe, it, expect } from "vitest";
import UpdateProduct from "../UpdateProduct";

describe("UpdateProduct Entity", () => {
  it("should create UpdateProduct correctly without validation in constructor", () => {
    const product = new UpdateProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
    );

    expect(product.getPhotoUrl()).toBeNull();
    expect(product.getSku()).toBe("SKU-001");
    expect(product.getName()).toBe("Laptop");
    expect(product.getDescription()).toBe("High performance laptop");
  });

  it("should update photoUrl correctly", () => {
    const product = new UpdateProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
    );

    product.setPhotoUrl("https://image.com/photo.png");

    expect(product.getPhotoUrl()).toBe("https://image.com/photo.png");
  });

  it("should update sku correctly when valid", () => {
    const product = new UpdateProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
    );

    product.setSku("SKU-999");

    expect(product.getSku()).toBe("SKU-999");
  });

  it("should throw error when updating sku with empty value", () => {
    const product = new UpdateProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
    );

    expect(() => {
      product.setSku("");
    }).toThrow();
  });

  it("should update name correctly when valid", () => {
    const product = new UpdateProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
    );

    product.setName("Gaming Laptop");

    expect(product.getName()).toBe("Gaming Laptop");
  });

  it("should throw error when updating name with invalid value", () => {
    const product = new UpdateProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
    );

    expect(() => {
      product.setName("   ");
    }).toThrow();
  });

  it("should update description correctly when valid", () => {
    const product = new UpdateProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
    );

    product.setDescription("Updated description");

    expect(product.getDescription()).toBe("Updated description");
  });

  it("should throw error when updating description with empty value", () => {
    const product = new UpdateProduct(
      null,
      "SKU-001",
      "Laptop",
      "High performance laptop",
    );

    expect(() => {
      product.setDescription("");
    }).toThrow();
  });
});
