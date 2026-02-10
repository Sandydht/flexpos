import InputValidator from "../utils/InputValidator";
import { USER_ITEM_ERROR_MESSAGE_KEY } from "./constants";
import { UserRole } from "./types";

class UserItem {
  private id: string;
  private photoUrl: string | null;
  private username: string;
  private email: string;
  private phoneNumber: string;
  private fullName: string;
  private address: string;
  private roles: UserRole[];
  private createdAt: string;
  private updatedAt: string | null;
  private deletedAt: string | null;

  constructor(
    id: string,
    photoUrl: string | null,
    username: string,
    email: string,
    phoneNumber: string,
    fullName: string,
    address: string,
    roles: UserRole[],
    createdAt: string,
    updatedAt: string | null,
    deletedAt: string | null,
  ) {
    this._verifyPayload(
      id,
      username,
      email,
      phoneNumber,
      fullName,
      address,
      roles,
      createdAt,
    );

    this.id = id;
    this.photoUrl = photoUrl;
    this.username = username;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.fullName = fullName;
    this.address = address;
    this.roles = roles;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  private _verifyPayload(
    id: string,
    username: string,
    email: string,
    phoneNumber: string,
    fullName: string,
    address: string,
    roles: UserRole[],
    createdAt: string,
  ) {
    InputValidator.requireNotBlank(id, USER_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(username, USER_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(email, USER_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(phoneNumber, USER_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(fullName, USER_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(address, USER_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(createdAt, USER_ITEM_ERROR_MESSAGE_KEY);

    InputValidator.requireNotBlankArray<UserRole>(
      roles,
      USER_ITEM_ERROR_MESSAGE_KEY,
    );

    InputValidator.validateUsername(username, USER_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.emailValidFormat(email, USER_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.indonesianPhoneNumberValidFormat(
      phoneNumber,
      USER_ITEM_ERROR_MESSAGE_KEY,
    );
  }

  getId(): string {
    return this.id;
  }

  setId(id: string) {
    InputValidator.requireNotBlank(id, USER_ITEM_ERROR_MESSAGE_KEY);
    this.id = id;
  }

  getPhotoUrl(): string | null {
    return this.photoUrl;
  }

  setPhotoUrl(photoUrl: string | null) {
    this.photoUrl = photoUrl;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(username: string) {
    InputValidator.requireNotBlank(username, USER_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.validateUsername(username, USER_ITEM_ERROR_MESSAGE_KEY);
    this.username = username;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    InputValidator.requireNotBlank(email, USER_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.emailValidFormat(email, USER_ITEM_ERROR_MESSAGE_KEY);
    this.email = email;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  setPhoneNumber(phoneNumber: string) {
    InputValidator.requireNotBlank(phoneNumber, USER_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.indonesianPhoneNumberValidFormat(
      phoneNumber,
      USER_ITEM_ERROR_MESSAGE_KEY,
    );
    this.phoneNumber = phoneNumber;
  }

  getFullName(): string {
    return this.fullName;
  }

  setFullName(fullName: string) {
    InputValidator.requireNotBlank(fullName, USER_ITEM_ERROR_MESSAGE_KEY);
    this.fullName = fullName;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string) {
    InputValidator.requireNotBlank(address, USER_ITEM_ERROR_MESSAGE_KEY);
    this.address = address;
  }

  getRoles(): UserRole[] {
    return this.roles;
  }

  setRoles(roles: UserRole[]) {
    InputValidator.requireNotBlankArray<UserRole>(
      roles,
      USER_ITEM_ERROR_MESSAGE_KEY,
    );
    this.roles = roles;
  }

  getCreatedAt(): string {
    return this.createdAt;
  }

  setCreatedAt(createdAt: string) {
    InputValidator.requireNotBlank(createdAt, USER_ITEM_ERROR_MESSAGE_KEY);
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

export default UserItem;
