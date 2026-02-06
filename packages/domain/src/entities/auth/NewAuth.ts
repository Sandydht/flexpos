import InputValidator from "../utils/InputValidator";

class NewAuth {
  private readonly errorMessageKey: string = "NEW_AUTH";

  private accessToken: string;
  private refreshToken: string;

  constructor(accessToken: string, refreshToken: string) {
    this._verifyPayload(accessToken, refreshToken);

    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  private _verifyPayload(accessToken: string, refreshToken: string) {
    InputValidator.requireNotBlank(accessToken, this.errorMessageKey);
    InputValidator.requireNotBlank(refreshToken, this.errorMessageKey);
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  setAccessToken(accessToken: string) {
    InputValidator.requireNotBlank(accessToken, this.errorMessageKey);
    this.accessToken = accessToken;
  }

  getRefreshToken(): string {
    return this.refreshToken;
  }

  setRefreshToken(refreshToken: string) {
    InputValidator.requireNotBlank(refreshToken, this.errorMessageKey);
    this.refreshToken = refreshToken;
  }
}

export default NewAuth;
