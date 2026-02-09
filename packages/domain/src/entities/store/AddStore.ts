import InputValidator from "../utils/InputValidator";

class AddStore {
  private readonly errorMessageKey: string = "ADD_STORE";

  private userId: string;
  private name: string;

  constructor(userId: string, name: string) {
    this._verifyPayload(userId, name);

    this.userId = userId;
    this.name = name;
  }

  private _verifyPayload(userId: string, name: string) {
    InputValidator.requireNotBlank(userId, this.errorMessageKey);
    InputValidator.requireNotBlank(name, this.errorMessageKey);
  }

  getUserId(): string {
    return this.userId;
  }

  setUserId(userId: string) {
    InputValidator.requireNotBlank(userId, this.errorMessageKey);
    this.userId = userId;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    InputValidator.requireNotBlank(name, this.errorMessageKey);
    this.name = name;
  }
}

export default AddStore;
