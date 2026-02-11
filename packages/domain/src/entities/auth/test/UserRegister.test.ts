import { describe, it, expect } from "vitest";
import UserRegister from "../UserRegister";
import { USER_REGISTER_ERROR_MESSAGE_KEY } from "../constants";
import { makeUserRegisterPayload } from "./authEntityFactory";
import { userFixture } from "../../../test/fixtures/userFixture";

describe("UserRegister Entity", () => {
  const validPayload = userFixture();
  const user: UserRegister = makeUserRegisterPayload();

  describe("constructor success case", () => {
    it("should create UserRegister entity when payload is valid", () => {
      expect(user.getUsername()).toBe(validPayload.username);
      expect(user.getEmail()).toBe(validPayload.email);
      expect(user.getPhoneNumber()).toBe(validPayload.phoneNumber);
      expect(user.getFullName()).toBe(validPayload.fullName);
      expect(user.getAddress()).toBe(validPayload.address);
      expect(user.getPassword()).toBe(validPayload.password);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when username is blank", () => {
      expect(() => makeUserRegisterPayload({ username: "" })).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when email is blank", () => {
      expect(() => makeUserRegisterPayload({ email: "" })).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when phoneNumber is blank", () => {
      expect(() => makeUserRegisterPayload({ phoneNumber: "" })).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when fullName is blank", () => {
      expect(() => makeUserRegisterPayload({ fullName: "" })).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when address is blank", () => {
      expect(() => makeUserRegisterPayload({ address: "" })).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when password is blank", () => {
      expect(() => makeUserRegisterPayload({ password: "" })).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when username exceeds character limit", () => {
      expect(() =>
        makeUserRegisterPayload({ username: validPayload.username.repeat(51) }),
      ).toThrowError(`${USER_REGISTER_ERROR_MESSAGE_KEY}.USERNAME_LIMIT_CHAR`);
    });

    it("should throw error when username contains restricted character", () => {
      expect(() =>
        makeUserRegisterPayload({ username: "user@123" }),
      ).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.USERNAME_CONTAIN_RESTRICTED_CHARACTER`,
      );
    });

    it("should throw error when email format is invalid", () => {
      expect(() =>
        makeUserRegisterPayload({ email: "invalid-email" }),
      ).toThrowError(`${USER_REGISTER_ERROR_MESSAGE_KEY}.INVALID_EMAIL_FORMAT`);
    });

    it("should throw error when phoneNumber is invalid indonesian format", () => {
      expect(() =>
        makeUserRegisterPayload({ phoneNumber: "invalid-phone-number" }),
      ).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    });

    it("should throw error when password less than 8 characters", () => {
      expect(() =>
        makeUserRegisterPayload({ password: "sec123" }),
      ).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.PASSWORD_MUST_BE_AT_LEAST_8_CHARACTERS_LONG`,
      );
    });

    it("should throw error when password does not contain letters and numbers", () => {
      expect(() =>
        makeUserRegisterPayload({ password: "password" }),
      ).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_LETTER_AND_ONE_NUMBER`,
      );
    });

    it("should throw error when password contain space", () => {
      expect(() =>
        makeUserRegisterPayload({ password: "password 123" }),
      ).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.PASSWORD_MUST_NOT_CONTAIN_SPACES`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update username when valid", () => {
      user.setUsername(validPayload.username);
      expect(user.getUsername()).toBe(validPayload.username);
    });

    it("should update email when valid", () => {
      user.setEmail(validPayload.email);
      expect(user.getEmail()).toBe(validPayload.email);
    });

    it("should update phoneNumber when valid", () => {
      user.setPhoneNumber(validPayload.phoneNumber);
      expect(user.getPhoneNumber()).toBe(validPayload.phoneNumber);
    });

    it("should update fullName when valid", () => {
      user.setFullName(validPayload.fullName);
      expect(user.getFullName()).toBe(validPayload.fullName);
    });

    it("should update address when valid", () => {
      user.setAddress(validPayload.address);
      expect(user.getAddress()).toBe(validPayload.address);
    });

    it("should update password when valid", () => {
      user.setPassword(validPayload.password);
      expect(user.getPassword()).toBe(validPayload.password);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank username", () => {
      expect(() => user.setUsername("")).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank email", () => {
      expect(() => user.setEmail("")).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank phoneNumber", () => {
      expect(() => user.setPhoneNumber("")).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank fullName", () => {
      expect(() => user.setFullName("")).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank address", () => {
      expect(() => user.setAddress("")).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank password", () => {
      expect(() => user.setPassword("")).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting exceeds character limit username", () => {
      expect(() => user.setUsername("user".repeat(51))).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.USERNAME_LIMIT_CHAR`,
      );
    });

    it("should throw error when setting contains restricted character username", () => {
      expect(() => user.setUsername("user@123")).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.USERNAME_CONTAIN_RESTRICTED_CHARACTER`,
      );
    });

    it("should throw error when setting invalid email format", () => {
      expect(() => user.setEmail("invalid-email")).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.INVALID_EMAIL_FORMAT`,
      );
    });

    it("should throw error when setting invalid indonesian phoneNumber format", () => {
      expect(() => user.setPhoneNumber("1234")).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    });

    it("should throw error when setting less than 8 characters password", () => {
      expect(() => user.setPassword("secret")).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.PASSWORD_MUST_BE_AT_LEAST_8_CHARACTERS_LONG`,
      );
    });

    it("should throw error when setting does not contain letters and numbers password", () => {
      expect(() => user.setPassword("password")).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_LETTER_AND_ONE_NUMBER`,
      );
    });

    it("should throw error when setting contain space password", () => {
      expect(() => user.setPassword("password 123")).toThrowError(
        `${USER_REGISTER_ERROR_MESSAGE_KEY}.PASSWORD_MUST_NOT_CONTAIN_SPACES`,
      );
    });
  });
});
