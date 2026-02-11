import InputValidator from "../utils/InputValidator";
import { STORE_ITEM_ERROR_MESSAGE_KEY } from "./constants";

class StoreItem<T> {
  private id: string;
  private photoUrl: string | null;
  private owner: T;
  private name: string;
  private createdAt: string;
  private updatedAt: string | null;
  private deletedAt: string | null;

  constructor(
    id: string,
    photoUrl: string | null,
    owner: T,
    name: string,
    createdAt: string,
    updatedAt: string | null,
    deletedAt: string | null,
  ) {
    this._verifyPayload(id, name, createdAt);

    this.id = id;
    this.photoUrl = photoUrl;
    this.owner = owner;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  private _verifyPayload(id: string, name: string, createdAt: string) {
    InputValidator.requireNotBlank(id, STORE_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(name, STORE_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(createdAt, STORE_ITEM_ERROR_MESSAGE_KEY);
  }

  getId(): string {
    return this.id;
  }

  setId(id: string) {
    InputValidator.requireNotBlank(id, STORE_ITEM_ERROR_MESSAGE_KEY);
    this.id = id;
  }

  getPhotoUrl(): string | null {
    return this.photoUrl;
  }

  setPhotoUrl(photoUrl: string | null) {
    this.photoUrl = photoUrl;
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
    InputValidator.requireNotBlank(name, STORE_ITEM_ERROR_MESSAGE_KEY);
    this.name = name;
  }

  getCreatedAt(): string {
    return this.createdAt;
  }

  setCreatedAt(createdAt: string) {
    InputValidator.requireNotBlank(createdAt, STORE_ITEM_ERROR_MESSAGE_KEY);
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
