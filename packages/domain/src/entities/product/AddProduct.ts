import InputValidator from "../utils/InputValidator";

class AddProduct {
  private readonly errorMessageKey: string = "ADD_PRODUCT";

  private photoUrl: string | null;
  private sku: string;
  private name: string;
  private description: string;
  private categoryId: string;

  constructor(
    photoUrl: string | null,
    sku: string,
    name: string,
    description: string,
    categoryId: string,
  ) {
    this._verifyPayload(sku, name, description, categoryId);

    this.photoUrl = photoUrl;
    this.sku = sku;
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
  }

  private _verifyPayload(
    sku: string,
    name: string,
    description: string,
    categoryId: string,
  ) {
    InputValidator.requireNotBlank(sku, this.errorMessageKey);
    InputValidator.requireNotBlank(name, this.errorMessageKey);
    InputValidator.requireNotBlank(description, this.errorMessageKey);
    InputValidator.requireNotBlank(categoryId, this.errorMessageKey);
  }

  getPhotoUrl(): string | null {
    return this.photoUrl;
  }

  setPhotoUrl(photoUrl: string | null) {
    this.photoUrl = photoUrl;
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
}

export default AddProduct;
