import InputValidator from "../utils/InputValidator";
import { USER_LOGIN_ERROR_MESSAGE_KEY } from "./constants";

class UserLogin {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this._verifyPayload(email, password);

    this.email = email;
    this.password = password;
  }

  private _verifyPayload(email: string, password: string) {
    InputValidator.requireNotBlank(email, USER_LOGIN_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(password, USER_LOGIN_ERROR_MESSAGE_KEY);
    InputValidator.emailValidFormat(email, USER_LOGIN_ERROR_MESSAGE_KEY);
    InputValidator.validatePassword(password, USER_LOGIN_ERROR_MESSAGE_KEY);
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    InputValidator.requireNotBlank(email, USER_LOGIN_ERROR_MESSAGE_KEY);
    InputValidator.emailValidFormat(email, USER_LOGIN_ERROR_MESSAGE_KEY);
    this.email = email;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string) {
    InputValidator.requireNotBlank(password, USER_LOGIN_ERROR_MESSAGE_KEY);
    InputValidator.validatePassword(password, USER_LOGIN_ERROR_MESSAGE_KEY);
    this.password = password;
  }
}

export default UserLogin;
