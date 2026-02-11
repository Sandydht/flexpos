import { describe, it, expect } from "vitest";
import UserLogin from "../UserLogin";
import { USER_LOGIN_ERROR_MESSAGE_KEY } from "../constants";
import { userFixture } from "../../../test/fixtures/userFixture";
import { makeUserLoginPayload } from "./authEntityFactory";

describe("UserLogin Entity", () => {
  const validPayload = userFixture();
  const user: UserLogin = makeUserLoginPayload();

  describe("constructor success case", () => {
    it("should create UserLogin entity when payload is valid", () => {
      expect(user.getEmail()).toBe(validPayload.email);
      expect(user.getPassword()).toBe(validPayload.password);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when email is blank", () => {
      expect(() => makeUserLoginPayload({ email: "" })).toThrowError(
        `${USER_LOGIN_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when password is blank", () => {
      expect(() => makeUserLoginPayload({ password: "" })).toThrowError(
        `${USER_LOGIN_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when email format is invalid", () => {
      expect(() =>
        makeUserLoginPayload({ email: "invalid-email" }),
      ).toThrowError(`${USER_LOGIN_ERROR_MESSAGE_KEY}.INVALID_EMAIL_FORMAT`);
    });

    it("should throw error when password less than 8 characters", () => {
      expect(() => makeUserLoginPayload({ password: "sec123" })).toThrowError(
        `${USER_LOGIN_ERROR_MESSAGE_KEY}.PASSWORD_MUST_BE_AT_LEAST_8_CHARACTERS_LONG`,
      );
    });

    it("should throw error when password does not contain letters and numbers", () => {
      expect(() => makeUserLoginPayload({ password: "password" })).toThrowError(
        `${USER_LOGIN_ERROR_MESSAGE_KEY}.PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_LETTER_AND_ONE_NUMBER`,
      );
    });

    it("should throw error when password contain space", () => {
      expect(() =>
        makeUserLoginPayload({ password: "password 123" }),
      ).toThrowError(
        `${USER_LOGIN_ERROR_MESSAGE_KEY}.PASSWORD_MUST_NOT_CONTAIN_SPACES`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update email when valid", () => {
      user.setEmail(validPayload.email);
      expect(user.getEmail()).toBe(validPayload.email);
    });

    it("should update password when valid", () => {
      user.setPassword(validPayload.password);
      expect(user.getPassword()).toBe(validPayload.password);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank email", () => {
      expect(() => user.setEmail("")).toThrowError(
        `${USER_LOGIN_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank password", () => {
      expect(() => user.setPassword("")).toThrowError(
        `${USER_LOGIN_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting invalid email", () => {
      expect(() => user.setEmail("invalid-email")).toThrowError(
        `${USER_LOGIN_ERROR_MESSAGE_KEY}.INVALID_EMAIL_FORMAT`,
      );
    });

    it("should throw error when setting less than 8 characters password", () => {
      expect(() => user.setPassword("sec123")).toThrowError(
        `${USER_LOGIN_ERROR_MESSAGE_KEY}.PASSWORD_MUST_BE_AT_LEAST_8_CHARACTERS_LONG`,
      );
    });

    it("should throw error when setting does not contain letters and numbers password", () => {
      expect(() => user.setPassword("password")).toThrowError(
        `${USER_LOGIN_ERROR_MESSAGE_KEY}.PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_LETTER_AND_ONE_NUMBER`,
      );
    });

    it("should throw error when setting contain space password", () => {
      expect(() => user.setPassword("password 123")).toThrowError(
        `${USER_LOGIN_ERROR_MESSAGE_KEY}.PASSWORD_MUST_NOT_CONTAIN_SPACES`,
      );
    });
  });
});
