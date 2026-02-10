import InputValidator from "../utils/InputValidator";
import { OUTLET_ITEM_ERROR_MESSAGE_KEY } from "./constants";
import OpeningHours from "./OpeningHours";

class OutletItem<T> {
  private id: string;
  private store: T;
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
  private createdAt: string;
  private updatedAt: string | null;
  private deletedAt: string | null;

  constructor(
    id: string,
    store: T,
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
    createdAt: string,
    updatedAt: string | null,
    deletedAt: string | null,
  ) {
    this._verifyPayload(
      id,
      name,
      code,
      address,
      city,
      province,
      postalCode,
      country,
      email,
      phoneNumber,
      createdAt,
    );

    this.id = id;
    this.store = store;
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
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  private _verifyPayload(
    id: string,
    name: string,
    code: string,
    address: string,
    city: string,
    province: string,
    postalCode: string,
    country: string,
    email: string,
    phoneNumber: string,
    createdAt: string,
  ) {
    InputValidator.requireNotBlank(id, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(name, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(code, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(address, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(city, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(province, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(postalCode, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(country, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(email, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(phoneNumber, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(createdAt, OUTLET_ITEM_ERROR_MESSAGE_KEY);

    InputValidator.emailValidFormat(email, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.indonesianPhoneNumberValidFormat(
      phoneNumber,
      OUTLET_ITEM_ERROR_MESSAGE_KEY,
    );
  }

  getId(): string {
    return this.id;
  }

  setId(id: string) {
    InputValidator.requireNotBlank(id, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    this.id = id;
  }

  getStore(): T {
    return this.store;
  }

  setStore(store: T) {
    this.store = store;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    InputValidator.requireNotBlank(name, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    this.name = name;
  }

  getCode(): string {
    return this.code;
  }

  setCode(code: string) {
    InputValidator.requireNotBlank(code, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    this.code = code;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string) {
    InputValidator.requireNotBlank(address, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    this.address = address;
  }

  getCity(): string {
    return this.city;
  }

  setCity(city: string) {
    InputValidator.requireNotBlank(city, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    this.city = city;
  }

  getProvince(): string {
    return this.province;
  }

  setProvince(province: string) {
    InputValidator.requireNotBlank(province, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    this.province = province;
  }

  getPostalCode(): string {
    return this.postalCode;
  }

  setPostalCode(postalCode: string) {
    InputValidator.requireNotBlank(postalCode, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    this.postalCode = postalCode;
  }

  getCountry(): string {
    return this.country;
  }

  setCountry(country: string) {
    InputValidator.requireNotBlank(country, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    this.country = country;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    InputValidator.requireNotBlank(email, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.emailValidFormat(email, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    this.email = email;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  setPhoneNumber(phoneNumber: string) {
    InputValidator.requireNotBlank(phoneNumber, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    InputValidator.indonesianPhoneNumberValidFormat(
      phoneNumber,
      OUTLET_ITEM_ERROR_MESSAGE_KEY,
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

  getCreatedAt(): string {
    return this.createdAt;
  }

  setCreatedAt(createdAt: string) {
    InputValidator.requireNotBlank(createdAt, OUTLET_ITEM_ERROR_MESSAGE_KEY);
    this.createdAt = createdAt;
  }

  getUpdatedAt(): string | null {
    return this.updatedAt;
  }

  setUpdatedAt(updatedAt: string | null) {
    this.updatedAt = updatedAt;
  }

  getDeletedAt(): string | null {
    return this.deletedAt;
  }

  setDeletedAt(deletedAt: string | null) {
    this.deletedAt = deletedAt;
  }
}

export default OutletItem;
