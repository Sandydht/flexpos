import InputValidator from "../utils/InputValidator";
import { NEW_AUTH_ERROR_MESSAGE_KEY } from "./constants";

class NewAuth {
  private accessToken: string;
  private refreshToken: string;

  constructor(accessToken: string, refreshToken: string) {
    this._verifyPayload(accessToken, refreshToken);

    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  private _verifyPayload(accessToken: string, refreshToken: string) {
    InputValidator.requireNotBlank(accessToken, NEW_AUTH_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(refreshToken, NEW_AUTH_ERROR_MESSAGE_KEY);
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  setAccessToken(accessToken: string) {
    InputValidator.requireNotBlank(accessToken, NEW_AUTH_ERROR_MESSAGE_KEY);
    this.accessToken = accessToken;
  }

  getRefreshToken(): string {
    return this.refreshToken;
  }

  setRefreshToken(refreshToken: string) {
    InputValidator.requireNotBlank(refreshToken, NEW_AUTH_ERROR_MESSAGE_KEY);
    this.refreshToken = refreshToken;
  }
}

export default NewAuth;
