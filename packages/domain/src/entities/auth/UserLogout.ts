import InputValidator from "../utils/InputValidator";

class UserLogout {
  private readonly errorMessageKey: string = "USER_LOGOUT";

  private refreshToken: string;

  constructor(refreshToken: string) {
    this._verifyPayload(refreshToken);

    this.refreshToken = refreshToken;
  }

  private _verifyPayload(refreshToken: string) {
    InputValidator.requireNotBlank(refreshToken, this.errorMessageKey);
  }

  getRefreshToken(): string {
    return this.refreshToken;
  }

  setRefreshToken(refreshToken: string) {
    InputValidator.requireNotBlank(refreshToken, this.errorMessageKey);
    this.refreshToken = refreshToken;
  }
}

export default UserLogout;
