import InputValidator from "../utils/InputValidator";
import { UPDATE_STORE_ERROR_MESSAGE_KEY } from "./constants";

class UpdateStore {
  private name: string;

  constructor(name: string) {
    this._verifyPayload(name);

    this.name = name;
  }

  private _verifyPayload(name: string) {
    InputValidator.requireNotBlank(name, UPDATE_STORE_ERROR_MESSAGE_KEY);
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    InputValidator.requireNotBlank(name, UPDATE_STORE_ERROR_MESSAGE_KEY);
    this.name = name;
  }
}

export default UpdateStore;
