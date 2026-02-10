import InputValidator from "../utils/InputValidator";
import { USER_LOGOUT_ERROR_MESSAGE_KEY } from "./constants";

class UserLogout {
  private refreshToken: string;

  constructor(refreshToken: string) {
    this._verifyPayload(refreshToken);

    this.refreshToken = refreshToken;
  }

  private _verifyPayload(refreshToken: string) {
    InputValidator.requireNotBlank(refreshToken, USER_LOGOUT_ERROR_MESSAGE_KEY);
  }

  getRefreshToken(): string {
    return this.refreshToken;
  }

  setRefreshToken(refreshToken: string) {
    InputValidator.requireNotBlank(refreshToken, USER_LOGOUT_ERROR_MESSAGE_KEY);
    this.refreshToken = refreshToken;
  }
}

export default UserLogout;
