import { describe, it, expect } from "vitest";
import UserLogin from "../UserLogin";

describe("UserLogin Entity", () => {
  const errorMessageKey: string = "USER_LOGIN";
  const validPayload = {
    email: "example@email.com",
    password: "password123",
  };

  const user: UserLogin = new UserLogin(
    validPayload.email,
    validPayload.password,
  );

  describe("constructor success case", () => {
    it("should create UserLogin entity when payload is valid", () => {
      expect(user.getEmail()).toBe(validPayload.email);
      expect(user.getPassword()).toBe(validPayload.password);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when email is blank", () => {
      expect(() => {
        new UserLogin("", validPayload.password);
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when password is blank", () => {
      expect(() => {
        new UserLogin(validPayload.email, "");
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when email format is invalid", () => {
      expect(() => {
        new UserLogin("invalid-email", validPayload.password);
      }).toThrowError(`${errorMessageKey}.INVALID_EMAIL_FORMAT`);
    });

    it("should throw error when password less than 8 characters", () => {
      expect(() => {
        new UserLogin(validPayload.email, "sec123");
      }).toThrowError(
        `${errorMessageKey}.PASSWORD_MUST_BE_AT_LEAST_8_CHARACTERS_LONG`,
      );
    });

    it("should throw error when password does not contain letters and numbers", () => {
      expect(() => {
        new UserLogin(validPayload.email, "password");
      }).toThrowError(
        `${errorMessageKey}.PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_LETTER_AND_ONE_NUMBER`,
      );
    });

    it("should throw error when password contain space", () => {
      expect(() => {
        new UserLogin(validPayload.email, "password 123");
      }).toThrowError(`${errorMessageKey}.PASSWORD_MUST_NOT_CONTAIN_SPACES`);
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
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank password", () => {
      expect(() => user.setPassword("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
