import { UserRole } from "./types";
import InputValidator from "../utils/InputValidator";

class UserProfile {
  private readonly errorMessageKey: string = "USER_PROFILE";

  private id: string;
  private photoUrl: string | null;
  private email: string;
  private phoneNumber: string;
  private fullName: string;
  private address: string;
  private role: UserRole;
  private createdAt: string;
  private updatedAt: string | null;
  private deletedAt: string | null;

  constructor(
    id: string,
    photoUrl: string | null,
    email: string,
    phoneNumber: string,
    fullName: string,
    address: string,
    role: UserRole,
    createdAt: string,
    updatedAt: string | null,
    deletedAt: string | null,
  ) {
    this._verifyPayload(
      id,
      email,
      phoneNumber,
      fullName,
      address,
      role,
      createdAt,
    );

    this.id = id;
    this.photoUrl = photoUrl;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.fullName = fullName;
    this.address = address;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  private _verifyPayload(
    id: string,
    email: string,
    phoneNumber: string,
    fullName: string,
    address: string,
    role: UserRole,
    createdAt: string,
  ) {
    InputValidator.requireNotBlank(id, this.errorMessageKey);
    InputValidator.requireNotBlank(email, this.errorMessageKey);
    InputValidator.requireNotBlank(phoneNumber, this.errorMessageKey);
    InputValidator.requireNotBlank(fullName, this.errorMessageKey);
    InputValidator.requireNotBlank(address, this.errorMessageKey);
    InputValidator.requireNotBlank(role, this.errorMessageKey);
    InputValidator.requireNotBlank(createdAt, this.errorMessageKey);

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

  getUserRole(): UserRole {
    return this.role;
  }

  setUserRole(role: UserRole) {
    this.role = role;
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

export default UserProfile;
