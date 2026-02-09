import InputValidator from "../utils/InputValidator";

class UserRegister {
  private readonly errorMessageKey: string = "USER_REGISTER";

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
    InputValidator.requireNotBlank(username, this.errorMessageKey);
    InputValidator.requireNotBlank(email, this.errorMessageKey);
    InputValidator.requireNotBlank(phoneNumber, this.errorMessageKey);
    InputValidator.requireNotBlank(fullName, this.errorMessageKey);
    InputValidator.requireNotBlank(address, this.errorMessageKey);
    InputValidator.requireNotBlank(password, this.errorMessageKey);

    InputValidator.validateUsername(username, this.errorMessageKey);
    InputValidator.emailValidFormat(email, this.errorMessageKey);
    InputValidator.indonesianPhoneNumberValidFormat(
      phoneNumber,
      this.errorMessageKey,
    );
    InputValidator.validatePassword(password, this.errorMessageKey);
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

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string) {
    InputValidator.requireNotBlank(password, this.errorMessageKey);
    InputValidator.validatePassword(password, this.errorMessageKey);
    this.password = password;
  }
}

export default UserRegister;
