import InputValidator from "../utils/InputValidator";

class UserLogin {
  private readonly errorMessageKey: string = "USER_LOGIN";

  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this._verifyPayload(email, password);

    this.email = email;
    this.password = password;
  }

  private _verifyPayload(email: string, password: string) {
    InputValidator.requireNotBlank(email, this.errorMessageKey);
    InputValidator.requireNotBlank(password, this.errorMessageKey);
    InputValidator.emailValidFormat(email, this.errorMessageKey);
    InputValidator.validatePassword(password, this.errorMessageKey);
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    InputValidator.requireNotBlank(email, this.errorMessageKey);
    InputValidator.emailValidFormat(email, this.errorMessageKey);
    this.email = email;
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

export default UserLogin;
