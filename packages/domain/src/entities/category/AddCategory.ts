import InputValidator from "../utils/InputValidator";
import { ADD_CATEGORY_ERROR_MESSAGE_KEY } from "./constants";

class AddCategory {
  private storeId: string;
  private name: string;
  private displayOrder: number;
  private isActive: boolean;

  constructor(
    storeId: string,
    name: string,
    displayOrder: number,
    isActive: boolean,
  ) {
    this._verifyPayload(storeId, name);

    this.storeId = storeId;
    this.name = name;
    this.displayOrder = displayOrder;
    this.isActive = isActive;
  }

  private _verifyPayload(storeId: string, name: string) {
    InputValidator.requireNotBlank(storeId, ADD_CATEGORY_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(name, ADD_CATEGORY_ERROR_MESSAGE_KEY);
  }

  getStoreId(): string {
    return this.storeId;
  }

  setStoreId(storeId: string) {
    InputValidator.requireNotBlank(storeId, ADD_CATEGORY_ERROR_MESSAGE_KEY);
    this.storeId = storeId;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    InputValidator.requireNotBlank(name, ADD_CATEGORY_ERROR_MESSAGE_KEY);
    this.name = name;
  }

  getDisplayOrder(): number {
    return this.displayOrder;
  }

  setDisplayOrder(displayOrder: number) {
    this.displayOrder = displayOrder;
  }

  getIsActive(): boolean {
    return this.isActive;
  }

  setIsActive(isActive: boolean) {
    this.isActive = isActive;
  }
}

export default AddCategory;
