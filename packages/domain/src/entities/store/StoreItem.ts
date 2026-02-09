import InputValidator from "../utils/InputValidator";

class StoreItem<T> {
  private readonly errorMessageKey: string = "STORE_ITEM";

  private id: string;
  private owner: T;
  private name: string;
  private createdAt: string;
  private updatedAt: string | null;
  private deletedAt: string | null;

  constructor(
    id: string,
    owner: T,
    name: string,
    createdAt: string,
    updatedAt: string | null,
    deletedAt: string | null,
  ) {
    this._verifyPayload(id, name, createdAt);

    this.id = id;
    this.owner = owner;
    this.name = name;
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

  getOwner(): T {
    return this.owner;
  }

  setOwner(owner: T) {
    this.owner = owner;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    InputValidator.requireNotBlank(name, this.errorMessageKey);
    this.name = name;
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

export default StoreItem;
