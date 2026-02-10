import InputValidator from "../utils/InputValidator";
import { ADD_STORE_ERROR_MESSAGE_KEY } from "./constants";

class AddStore {
  private userId: string;
  private name: string;

  constructor(userId: string, name: string) {
    this._verifyPayload(userId, name);

    this.userId = userId;
    this.name = name;
  }

  private _verifyPayload(userId: string, name: string) {
    InputValidator.requireNotBlank(userId, ADD_STORE_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(name, ADD_STORE_ERROR_MESSAGE_KEY);
  }

  getUserId(): string {
    return this.userId;
  }

  setUserId(userId: string) {
    InputValidator.requireNotBlank(userId, ADD_STORE_ERROR_MESSAGE_KEY);
    this.userId = userId;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    InputValidator.requireNotBlank(name, ADD_STORE_ERROR_MESSAGE_KEY);
    this.name = name;
  }
}

export default AddStore;
