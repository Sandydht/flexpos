import InputValidator from "../utils/InputValidator";

class UpdateProduct {
  private readonly errorMessageKey: string = "UPDATE_PRODUCT";

  private photoUrl: string | null;
  private sku: string;
  private name: string;
  private description: string;

  constructor(
    photoUrl: string | null,
    sku: string,
    name: string,
    description: string,
  ) {
    this.photoUrl = photoUrl;
    this.sku = sku;
    this.name = name;
    this.description = description;
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
}

export default UpdateProduct;
