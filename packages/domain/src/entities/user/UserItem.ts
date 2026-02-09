import InputValidator from "../utils/InputValidator";
import { UserRole } from "./types";

class UserItem {
  private readonly errorMessageKey: string = "USER_ITEM";

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
    InputValidator.requireNotBlank(id, this.errorMessageKey);
    InputValidator.requireNotBlank(username, this.errorMessageKey);
    InputValidator.requireNotBlank(email, this.errorMessageKey);
    InputValidator.requireNotBlank(phoneNumber, this.errorMessageKey);
    InputValidator.requireNotBlank(fullName, this.errorMessageKey);
    InputValidator.requireNotBlank(address, this.errorMessageKey);
    InputValidator.requireNotBlank(createdAt, this.errorMessageKey);

    InputValidator.requireNotBlankArray<UserRole>(roles, this.errorMessageKey);

    InputValidator.validateUsername(username, this.errorMessageKey);
    InputValidator.emailValidFormat(email, this.errorMessageKey);
    InputValidator.indonesianPhoneNumberValidFormat(
      phoneNumber,
      this.errorMessageKey,
    );
  }

  getId(): string {
    return this.id;
  }

  setId(id: string) {
    InputValidator.requireNotBlank(id, this.errorMessageKey);
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
    InputValidator.requireNotBlank(username, this.errorMessageKey);
    InputValidator.validateUsername(username, this.errorMessageKey);
    this.username = username;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    InputValidator.requireNotBlank(email, this.errorMessageKey);
    InputValidator.emailValidFormat(email, this.errorMessageKey);
    this.email = email;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  setPhoneNumber(phoneNumber: string) {
    InputValidator.requireNotBlank(phoneNumber, this.errorMessageKey);
    InputValidator.indonesianPhoneNumberValidFormat(
      phoneNumber,
      this.errorMessageKey,
    );
    this.phoneNumber = phoneNumber;
  }

  getFullName(): string {
    return this.fullName;
  }

  setFullName(fullName: string) {
    InputValidator.requireNotBlank(fullName, this.errorMessageKey);
    this.fullName = fullName;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string) {
    InputValidator.requireNotBlank(address, this.errorMessageKey);
    this.address = address;
  }

  getRoles(): UserRole[] {
    return this.roles;
  }

  setRoles(roles: UserRole[]) {
    InputValidator.requireNotBlankArray<UserRole>(roles, this.errorMessageKey);
    this.roles = roles;
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

export default UserItem;
