import InputValidator from "../utils/InputValidator";
import { USER_REGISTER_ERROR_MESSAGE_KEY } from "./constants";

class UserRegister {
  private username: string;
  private email: string;
  private phoneNumber: string;
  private fullName: string;
  private address: string;
  private password: string;

  constructor(
    username: string,
    email: string,
    phoneNumber: string,
    fullName: string,
    address: string,
    password: string,
  ) {
    this._verifyPayload(
      username,
      email,
      phoneNumber,
      fullName,
      address,
      password,
    );

    this.username = username;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.fullName = fullName;
    this.address = address;
    this.password = password;
  }

  private _verifyPayload(
    username: string,
    email: string,
    phoneNumber: string,
    fullName: string,
    address: string,
    password: string,
  ) {
    InputValidator.requireNotBlank(username, USER_REGISTER_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(email, USER_REGISTER_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(
      phoneNumber,
      USER_REGISTER_ERROR_MESSAGE_KEY,
    );
    InputValidator.requireNotBlank(fullName, USER_REGISTER_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(address, USER_REGISTER_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(password, USER_REGISTER_ERROR_MESSAGE_KEY);

    InputValidator.validateUsername(username, USER_REGISTER_ERROR_MESSAGE_KEY);
    InputValidator.emailValidFormat(email, USER_REGISTER_ERROR_MESSAGE_KEY);
    InputValidator.indonesianPhoneNumberValidFormat(
      phoneNumber,
      USER_REGISTER_ERROR_MESSAGE_KEY,
    );
    InputValidator.validatePassword(password, USER_REGISTER_ERROR_MESSAGE_KEY);
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(username: string) {
    InputValidator.requireNotBlank(username, USER_REGISTER_ERROR_MESSAGE_KEY);
    InputValidator.validateUsername(username, USER_REGISTER_ERROR_MESSAGE_KEY);
    this.username = username;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    InputValidator.requireNotBlank(email, USER_REGISTER_ERROR_MESSAGE_KEY);
    InputValidator.emailValidFormat(email, USER_REGISTER_ERROR_MESSAGE_KEY);
    this.email = email;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  setPhoneNumber(phoneNumber: string) {
    InputValidator.requireNotBlank(
      phoneNumber,
      USER_REGISTER_ERROR_MESSAGE_KEY,
    );
    InputValidator.indonesianPhoneNumberValidFormat(
      phoneNumber,
      USER_REGISTER_ERROR_MESSAGE_KEY,
    );
    this.phoneNumber = phoneNumber;
  }

  getFullName(): string {
    return this.fullName;
  }

  setFullName(fullName: string) {
    InputValidator.requireNotBlank(fullName, USER_REGISTER_ERROR_MESSAGE_KEY);
    this.fullName = fullName;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string) {
    InputValidator.requireNotBlank(address, USER_REGISTER_ERROR_MESSAGE_KEY);
    this.address = address;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string) {
    InputValidator.requireNotBlank(password, USER_REGISTER_ERROR_MESSAGE_KEY);
    InputValidator.validatePassword(password, USER_REGISTER_ERROR_MESSAGE_KEY);
    this.password = password;
  }
}

export default UserRegister;
