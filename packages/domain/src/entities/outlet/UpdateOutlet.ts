import InputValidator from "../utils/InputValidator";
import { UPDATE_OUTLET_ERROR_MESSAGE_KEY } from "./constants";
import OpeningHours from "./OpeningHours";

class UpdateOutlet {
  private storeId: string;
  private name: string;
  private code: string;
  private address: string;
  private city: string;
  private province: string;
  private postalCode: string;
  private country: string;
  private email: string;
  private phoneNumber: string;
  private openingHours: OpeningHours;
  private isActive: boolean;

  constructor(
    storeId: string,
    name: string,
    code: string,
    address: string,
    city: string,
    province: string,
    postalCode: string,
    country: string,
    email: string,
    phoneNumber: string,
    openingHours: OpeningHours,
    isActive: boolean,
  ) {
    this._verifyPayload(
      storeId,
      name,
      code,
      address,
      city,
      province,
      postalCode,
      country,
      email,
      phoneNumber,
    );

    this.storeId = storeId;
    this.name = name;
    this.code = code;
    this.address = address;
    this.city = city;
    this.province = province;
    this.postalCode = postalCode;
    this.country = country;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.openingHours = openingHours;
    this.isActive = isActive;
  }

  private _verifyPayload(
    storeId: string,
    name: string,
    code: string,
    address: string,
    city: string,
    province: string,
    postalCode: string,
    country: string,
    email: string,
    phoneNumber: string,
  ) {
    InputValidator.requireNotBlank(storeId, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(name, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(code, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(address, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(city, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(province, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(postalCode, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(country, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(email, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(
      phoneNumber,
      UPDATE_OUTLET_ERROR_MESSAGE_KEY,
    );

    InputValidator.emailValidFormat(email, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    InputValidator.indonesianPhoneNumberValidFormat(
      phoneNumber,
      UPDATE_OUTLET_ERROR_MESSAGE_KEY,
    );
  }

  getStoreId(): string {
    return this.storeId;
  }

  setStoreId(storeId: string) {
    InputValidator.requireNotBlank(storeId, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    this.storeId = storeId;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    InputValidator.requireNotBlank(name, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    this.name = name;
  }

  getCode(): string {
    return this.code;
  }

  setCode(code: string) {
    InputValidator.requireNotBlank(code, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    this.code = code;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string) {
    InputValidator.requireNotBlank(address, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    this.address = address;
  }

  getCity(): string {
    return this.city;
  }

  setCity(city: string) {
    InputValidator.requireNotBlank(city, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    this.city = city;
  }

  getProvince(): string {
    return this.province;
  }

  setProvince(province: string) {
    InputValidator.requireNotBlank(province, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    this.province = province;
  }

  getPostalCode(): string {
    return this.postalCode;
  }

  setPostalCode(postalCode: string) {
    InputValidator.requireNotBlank(postalCode, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    this.postalCode = postalCode;
  }

  getCountry(): string {
    return this.country;
  }

  setCountry(country: string) {
    InputValidator.requireNotBlank(country, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    this.country = country;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    InputValidator.requireNotBlank(email, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    InputValidator.emailValidFormat(email, UPDATE_OUTLET_ERROR_MESSAGE_KEY);
    this.email = email;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  setPhoneNumber(phoneNumber: string) {
    InputValidator.requireNotBlank(
      phoneNumber,
      UPDATE_OUTLET_ERROR_MESSAGE_KEY,
    );
    InputValidator.indonesianPhoneNumberValidFormat(
      phoneNumber,
      UPDATE_OUTLET_ERROR_MESSAGE_KEY,
    );
    this.phoneNumber = phoneNumber;
  }

  getOpeningHours(): OpeningHours {
    return this.openingHours;
  }

  setOpeningHours(openingHours: OpeningHours) {
    this.openingHours = openingHours;
  }

  getIsActive(): boolean {
    return this.isActive;
  }

  setIsActive(isActive: boolean) {
    this.isActive = isActive;
  }
}

export default UpdateOutlet;
