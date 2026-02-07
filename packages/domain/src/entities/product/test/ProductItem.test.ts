import { describe, it, expect } from "vitest";
import ProductItem from "../ProductItem";

describe("ProductItem Entity", () => {
  const validPayload = {
    id: "prod-123",
    sku: "SKU-001",
    name: "Laptop",
    description: "High performance laptop",
    categoryId: "cat-123",
    createdAt: "2025-02-07",
    updatedAt: null,
    deletedAt: null,
  };

  it("should create ProductItem correctly when payload is valid", () => {
    const product = new ProductItem(
      validPayload.id,
      validPayload.sku,
      validPayload.name,
      validPayload.description,
      validPayload.categoryId,
      validPayload.createdAt,
      validPayload.updatedAt,
      validPayload.deletedAt,
    );

    expect(product.getId()).toBe(validPayload.id);
    expect(product.getSku()).toBe(validPayload.sku);
    expect(product.getName()).toBe(validPayload.name);
    expect(product.getDescription()).toBe(validPayload.description);
    expect(product.getCategoryId()).toBe(validPayload.categoryId);
    expect(product.getCreatedAt()).toBe(validPayload.createdAt);
    expect(product.getUpdatedAt()).toBeNull();
    expect(product.getDeletedAt()).toBeNull();
  });

  it("should throw error when id is empty", () => {
    expect(() => {
      new ProductItem(
        "",
        validPayload.sku,
        validPayload.name,
        validPayload.description,
        validPayload.categoryId,
        validPayload.createdAt,
        null,
        null,
      );
    }).toThrow();
  });

  it("should throw error when sku is empty", () => {
    expect(() => {
      new ProductItem(
        validPayload.id,
        "",
        validPayload.name,
        validPayload.description,
        validPayload.categoryId,
        validPayload.createdAt,
        null,
        null,
      );
    }).toThrow();
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new ProductItem(
        validPayload.id,
        validPayload.sku,
        "",
        validPayload.description,
        validPayload.categoryId,
        validPayload.createdAt,
        null,
        null,
      );
    }).toThrow();
  });

  it("should throw error when description is empty", () => {
    expect(() => {
      new ProductItem(
        validPayload.id,
        validPayload.sku,
        validPayload.name,
        "",
        validPayload.categoryId,
        validPayload.createdAt,
        null,
        null,
      );
    }).toThrow();
  });

  it("should throw error when categoryId is empty", () => {
    expect(() => {
      new ProductItem(
        validPayload.id,
        validPayload.sku,
        validPayload.name,
        validPayload.description,
        "",
        validPayload.createdAt,
        null,
        null,
      );
    }).toThrow();
  });

  it("should throw error when createdAt is empty", () => {
    expect(() => {
      new ProductItem(
        validPayload.id,
        validPayload.sku,
        validPayload.name,
        validPayload.description,
        validPayload.categoryId,
        "",
        null,
        null,
      );
    }).toThrow();
  });

  it("should update id correctly when valid", () => {
    const product = new ProductItem(
      validPayload.id,
      validPayload.sku,
      validPayload.name,
      validPayload.description,
      validPayload.categoryId,
      validPayload.createdAt,
      null,
      null,
    );

    product.setId("prod-999");

    expect(product.getId()).toBe("prod-999");
  });

  it("should throw error when updating id with invalid value", () => {
    const product = new ProductItem(
      validPayload.id,
      validPayload.sku,
      validPayload.name,
      validPayload.description,
      validPayload.categoryId,
      validPayload.createdAt,
      null,
      null,
    );

    expect(() => {
      product.setId("");
    }).toThrow();
  });

  it("should update sku correctly", () => {
    const product = new ProductItem(
      validPayload.id,
      validPayload.sku,
      validPayload.name,
      validPayload.description,
      validPayload.categoryId,
      validPayload.createdAt,
      null,
      null,
    );

    product.setSku("SKU-999");

    expect(product.getSku()).toBe("SKU-999");
  });

  it("should update name correctly", () => {
    const product = new ProductItem(
      validPayload.id,
      validPayload.sku,
      validPayload.name,
      validPayload.description,
      validPayload.categoryId,
      validPayload.createdAt,
      null,
      null,
    );

    product.setName("Gaming Laptop");

    expect(product.getName()).toBe("Gaming Laptop");
  });

  it("should update description correctly", () => {
    const product = new ProductItem(
      validPayload.id,
      validPayload.sku,
      validPayload.name,
      validPayload.description,
      validPayload.categoryId,
      validPayload.createdAt,
      null,
      null,
    );

    product.setDescription("Updated description");

    expect(product.getDescription()).toBe("Updated description");
  });

  it("should update categoryId correctly", () => {
    const product = new ProductItem(
      validPayload.id,
      validPayload.sku,
      validPayload.name,
      validPayload.description,
      validPayload.categoryId,
      validPayload.createdAt,
      null,
      null,
    );

    product.setCategoryId("cat-999");

    expect(product.getCategoryId()).toBe("cat-999");
  });

  it("should update createdAt correctly", () => {
    const product = new ProductItem(
      validPayload.id,
      validPayload.sku,
      validPayload.name,
      validPayload.description,
      validPayload.categoryId,
      validPayload.createdAt,
      null,
      null,
    );

    product.setCreatedAt("2026-01-01");

    expect(product.getCreatedAt()).toBe("2026-01-01");
  });

  it("should update updatedAt correctly", () => {
    const product = new ProductItem(
      validPayload.id,
      validPayload.sku,
      validPayload.name,
      validPayload.description,
      validPayload.categoryId,
      validPayload.createdAt,
      null,
      null,
    );

    product.setUpdatedAt("2025-02-08");

    expect(product.getUpdatedAt()).toBe("2025-02-08");
  });

  it("should update deletedAt correctly", () => {
    const product = new ProductItem(
      validPayload.id,
      validPayload.sku,
      validPayload.name,
      validPayload.description,
      validPayload.categoryId,
      validPayload.createdAt,
      null,
      null,
    );

    product.setDeletedAt("2025-03-01");

    expect(product.getDeletedAt()).toBe("2025-03-01");
  });
});
