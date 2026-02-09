import InputValidator from "../utils/InputValidator";

class CategoryItem {
  private readonly errorMessageKey: string = "CATEGORY_ITEM";

  private id: string;
  private name: string;
  private displayOrder: number;
  private isActive: boolean;
  private createdAt: string;
  private updatedAt: string | null;
  private deletedAt: string | null;

  constructor(
    id: string,
    name: string,
    displayOrder: number,
    isActive: boolean,
    createdAt: string,
    updatedAt: string | null,
    deletedAt: string | null,
  ) {
    this._verifyPayload(id, name, createdAt);

    this.id = id;
    this.name = name;
    this.displayOrder = displayOrder;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  private _verifyPayload(id: string, name: string, createdAt: string) {
    InputValidator.requireNotBlank(id, this.errorMessageKey);
    InputValidator.requireNotBlank(name, this.errorMessageKey);
    InputValidator.requireNotBlank(createdAt, this.errorMessageKey);
  }

  getId(): string {
    return this.id;
  }

  setId(id: string) {
    InputValidator.requireNotBlank(id, this.errorMessageKey);
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    InputValidator.requireNotBlank(name, this.errorMessageKey);
    this.name = name;
  }

  getDisplayOrder(): number {
    return this.displayOrder;
  }

  setDisplayOrder(displayOrder: number) {
    this.displayOrder = displayOrder;
  }

  getIsActive(): boolean {
    return this.isActive;
  }

  setIsActive(isActive: boolean) {
    this.isActive = isActive;
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

export default CategoryItem;
