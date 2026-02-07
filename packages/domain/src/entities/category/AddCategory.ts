import InputValidator from "../utils/InputValidator";

class AddCategory {
  private readonly errorMessageKey: string = "ADD_CATEGORY";

  private name: string;
  private displayOrder: number;
  private isActive: boolean;

  constructor(name: string, displayOrder: number, isActive: boolean) {
    this._verifyPayload(name);

    this.name = name;
    this.displayOrder = displayOrder;
    this.isActive = isActive;
  }

  private _verifyPayload(name: string) {
    InputValidator.requireNotBlank(name, this.errorMessageKey);
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    InputValidator.requireNotBlank(name, this.errorMessageKey);
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
