import InputValidator from "../utils/InputValidator";

class ProductItem {
  private readonly errorMessageKey: string = "PRODUCT_ITEM";

  private id: string;
  private sku: string;
  private name: string;
  private description: string;
  private categoryId: string;
  private createdAt: string;
  private updatedAt: string | null;
  private deletedAt: string | null;

  constructor(
    id: string,
    sku: string,
    name: string,
    description: string,
    categoryId: string,
    createdAt: string,
    updatedAt: string | null,
    deletedAt: string | null,
  ) {
    this._verifyPayload(id, sku, name, description, categoryId, createdAt);

    this.id = id;
    this.sku = sku;
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  private _verifyPayload(
    id: string,
    sku: string,
    name: string,
    description: string,
    categoryId: string,
    createdAt: string,
  ) {
    InputValidator.requireNotBlank(id, this.errorMessageKey);
    InputValidator.requireNotBlank(sku, this.errorMessageKey);
    InputValidator.requireNotBlank(name, this.errorMessageKey);
    InputValidator.requireNotBlank(description, this.errorMessageKey);
    InputValidator.requireNotBlank(categoryId, this.errorMessageKey);
    InputValidator.requireNotBlank(createdAt, this.errorMessageKey);
  }

  getId(): string {
    return this.id;
  }

  setId(id: string) {
    InputValidator.requireNotBlank(id, this.errorMessageKey);
    this.id = id;
  }

  getSku(): string {
    return this.sku;
  }

  setSku(sku: string) {
    InputValidator.requireNotBlank(sku, this.errorMessageKey);
    this.sku = sku;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    InputValidator.requireNotBlank(name, this.errorMessageKey);
    this.name = name;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(description: string) {
    InputValidator.requireNotBlank(description, this.errorMessageKey);
    this.description = description;
  }

  getCategoryId(): string {
    return this.categoryId;
  }

  setCategoryId(categoryId: string) {
    InputValidator.requireNotBlank(categoryId, this.errorMessageKey);
    this.categoryId = categoryId;
  }

  getCreatedAt(): string {
    return this.createdAt;
  }

  setCreatedAt(createdAt: string) {
    InputValidator.requireNotBlank(createdAt, this.errorMessageKey);
    this.createdAt = createdAt;
  }

  getUpdatedAt(): string | null {
    return this.updatedAt;
  }

  setUpdatedAt(updatedAt: string | null) {
    this.updatedAt = updatedAt;
  }

  getDeletedAt(): string | null {
    return this.deletedAt;
  }

  setDeletedAt(deletedAt: string | null) {
    this.deletedAt = deletedAt;
  }
}

export default ProductItem;
