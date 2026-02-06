import { UserRole } from "./types";
import InputValidator from "../utils/InputValidator";

class UserProfile {
  private readonly errorMessageKey: string = "USER_PROFILE";

  private id: string;
  private photoUrl: string | null;
  private email: string;
  private phoneNumber: string;
  private fullName: string;
  private role: UserRole;

  constructor(
    id: string,
    photoUrl: string,
    email: string,
    phoneNumber: string,
    fullName: string,
    role: UserRole,
  ) {
    this._verifyPayload(id, email, phoneNumber, fullName, role);

    this.id = id;
    this.photoUrl = photoUrl;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.fullName = fullName;
    this.role = role;
  }

  private _verifyPayload(
    id: string,
    email: string,
    phoneNumber: string,
    fullName: string,
    role: UserRole,
  ) {
    InputValidator.requireNotBlank(id, this.errorMessageKey);
    InputValidator.requireNotBlank(email, this.errorMessageKey);
    InputValidator.requireNotBlank(phoneNumber, this.errorMessageKey);
    InputValidator.requireNotBlank(fullName, this.errorMessageKey);
    InputValidator.requireNotBlank(role, this.errorMessageKey);

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
    this.fullName = fullName;
  }

  getUserRole(): UserRole {
    return this.role;
  }

  setUserRole(role: UserRole) {
    this.role = role;
  }
}

export default UserProfile;
