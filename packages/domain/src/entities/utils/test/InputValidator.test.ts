import { describe, expect, it } from "vitest";
import InputValidator from "../InputValidator";

describe("InputValidator", () => {
  const errorMessageKey: string = "INPUT_VALIDATOR";

  describe("requireNotBlank function", () => {
    it("should throw an error when the input is null", () => {
      expect(() =>
        InputValidator.requireNotBlank(
          null as unknown as string,
          errorMessageKey,
        ),
      ).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw an error when the input is an empty string", () => {
      expect(() =>
        InputValidator.requireNotBlank("", errorMessageKey),
      ).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw an error when the input is a string with only spaces", () => {
      expect(() =>
        InputValidator.requireNotBlank("     ", errorMessageKey),
      ).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should not throw an error when the input is a non-blank string", () => {
      expect(() =>
        InputValidator.requireNotBlank("valid input", errorMessageKey),
      ).not.toThrowError();
    });
  });

  describe("validatePassword function", () => {
    it("should throw error if password is less than 8 characters", () => {
      expect(() => {
        InputValidator.validatePassword("abc12", errorMessageKey);
      }).toThrow(
        `${errorMessageKey}.PASSWORD_MUST_BE_AT_LEAST_8_CHARACTERS_LONG`,
      );
    });

    it("should throw error if password does not contain letters and numbers", () => {
      expect(() => {
        InputValidator.validatePassword("abcdefgh", errorMessageKey);
      }).toThrow(
        `${errorMessageKey}.PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_LETTER_AND_ONE_NUMBER`,
      );
    });

    it("should throw error if password contains spaces", () => {
      expect(() => {
        InputValidator.validatePassword("abc123 45", errorMessageKey);
      }).toThrow(`${errorMessageKey}.PASSWORD_MUST_NOT_CONTAIN_SPACES`);
    });

    it("should NOT throw error if password is valid", () => {
      expect(() => {
        InputValidator.validatePassword("abc12345", errorMessageKey);
      }).not.toThrow();
    });

    it("should pass for complex valid password", () => {
      expect(() => {
        InputValidator.validatePassword("MyPass123", errorMessageKey);
      }).not.toThrow();
    });
  });

  describe("emailValidFormat function", () => {
    it("should NOT throw error if email format is valid", () => {
      expect(() => {
        InputValidator.emailValidFormat("test@example.com", errorMessageKey);
      }).not.toThrow();
    });

    it("should throw error if email is missing '@'", () => {
      expect(() => {
        InputValidator.emailValidFormat("testexample.com", errorMessageKey);
      }).toThrow(`${errorMessageKey}.INVALID_EMAIL_FORMAT`);
    });

    it("should throw error if email is missing domain", () => {
      expect(() => {
        InputValidator.emailValidFormat("test@", errorMessageKey);
      }).toThrow(`${errorMessageKey}.INVALID_EMAIL_FORMAT`);
    });

    it("should throw error if email has invalid characters", () => {
      expect(() => {
        InputValidator.emailValidFormat("test@exa mple.com", errorMessageKey);
      }).toThrow(`${errorMessageKey}.INVALID_EMAIL_FORMAT`);
    });

    it("should throw error if email has invalid TLD", () => {
      expect(() => {
        InputValidator.emailValidFormat("test@example.c", errorMessageKey);
      }).toThrow(`${errorMessageKey}.INVALID_EMAIL_FORMAT`);
    });

    it("should accept email with subdomain", () => {
      expect(() => {
        InputValidator.emailValidFormat(
          "user@mail.example.com",
          errorMessageKey,
        );
      }).not.toThrow();
    });

    it("should accept email with plus symbol", () => {
      expect(() => {
        InputValidator.emailValidFormat(
          "user+testing@example.com",
          errorMessageKey,
        );
      }).not.toThrow();
    });
  });

  describe("indonesianPhoneNumberValidFormat function", () => {
    it("should NOT throw error for valid phone number starting with 08", () => {
      expect(() => {
        InputValidator.indonesianPhoneNumberValidFormat(
          "081234567890",
          errorMessageKey,
        );
      }).not.toThrow();
    });

    it("should NOT throw error for valid phone number starting with 62", () => {
      expect(() => {
        InputValidator.indonesianPhoneNumberValidFormat(
          "6281234567890",
          errorMessageKey,
        );
      }).not.toThrow();
    });

    it("should NOT throw error for valid phone number starting with +62", () => {
      expect(() => {
        InputValidator.indonesianPhoneNumberValidFormat(
          "+6281234567890",
          errorMessageKey,
        );
      }).not.toThrow();
    });

    it("should throw error if phone number does not start with 08/62/+62", () => {
      expect(() => {
        InputValidator.indonesianPhoneNumberValidFormat(
          "071234567890",
          errorMessageKey,
        );
      }).toThrow(`${errorMessageKey}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`);
    });

    it("should throw error if phone number is too short", () => {
      expect(() => {
        InputValidator.indonesianPhoneNumberValidFormat(
          "08123",
          errorMessageKey,
        );
      }).toThrow(`${errorMessageKey}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`);
    });

    it("should throw error if phone number contains letters", () => {
      expect(() => {
        InputValidator.indonesianPhoneNumberValidFormat(
          "08123abc890",
          errorMessageKey,
        );
      }).toThrow(`${errorMessageKey}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`);
    });

    it("should throw error if phone number contains spaces", () => {
      expect(() => {
        InputValidator.indonesianPhoneNumberValidFormat(
          "08123 456789",
          errorMessageKey,
        );
      }).toThrow(`${errorMessageKey}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`);
    });

    it("should throw error if phone number is too long", () => {
      expect(() => {
        InputValidator.indonesianPhoneNumberValidFormat(
          "08123456789012345",
          errorMessageKey,
        );
      }).toThrow(`${errorMessageKey}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`);
    });
  });

  describe("validateUsername function", () => {
    it("should not throw error when username is valid", () => {
      expect(() => {
        InputValidator.validateUsername("validUsername123", errorMessageKey);
      }).not.toThrow();
    });

    it("should throw error when username length is more than 50 characters", () => {
      const longUsername = "a".repeat(51);

      expect(() => {
        InputValidator.validateUsername(longUsername, errorMessageKey);
      }).toThrowError(`${errorMessageKey}.USERNAME_LIMIT_CHAR`);
    });

    it("should throw error when username contains restricted characters", () => {
      const invalidUsername = "user name!@#";

      expect(() => {
        InputValidator.validateUsername(invalidUsername, errorMessageKey);
      }).toThrowError(
        `${errorMessageKey}.USERNAME_CONTAIN_RESTRICTED_CHARACTER`,
      );
    });

    it("should throw error when username contains spaces", () => {
      expect(() => {
        InputValidator.validateUsername("user name", errorMessageKey);
      }).toThrowError(
        `${errorMessageKey}.USERNAME_CONTAIN_RESTRICTED_CHARACTER`,
      );
    });

    it("should throw error when username contains special symbols", () => {
      expect(() => {
        InputValidator.validateUsername("user@123", errorMessageKey);
      }).toThrowError(
        `${errorMessageKey}.USERNAME_CONTAIN_RESTRICTED_CHARACTER`,
      );
    });
  });

  describe("requireNotBlankArray function", () => {
    it("should not throw error when array is not empty", () => {
      expect(() => {
        InputValidator.requireNotBlankArray(["role1"], errorMessageKey);
      }).not.toThrow();
    });

    it("should throw error when array is empty", () => {
      expect(() => {
        InputValidator.requireNotBlankArray([], errorMessageKey);
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when array is undefined", () => {
      expect(() => {
        InputValidator.requireNotBlankArray(
          undefined as unknown as string[],
          errorMessageKey,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should work with generic type (number array)", () => {
      expect(() => {
        InputValidator.requireNotBlankArray([1, 2, 3], errorMessageKey);
      }).not.toThrow();
    });

    it("should work with generic type (object array)", () => {
      expect(() => {
        InputValidator.requireNotBlankArray(
          [{ id: 1 }, { id: 2 }],
          errorMessageKey,
        );
      }).not.toThrow();
    });
  });

  describe("isValidTimeFormat function", () => {
    it("should NOT throw error when time format is valid", () => {
      expect(() =>
        InputValidator.isValidTimeFormat("22:00", "OUTLET"),
      ).not.toThrow();

      expect(() =>
        InputValidator.isValidTimeFormat("08:30", "OUTLET"),
      ).not.toThrow();

      expect(() =>
        InputValidator.isValidTimeFormat("00:00", "OUTLET"),
      ).not.toThrow();

      expect(() =>
        InputValidator.isValidTimeFormat("23:59", "OUTLET"),
      ).not.toThrow();
    });

    it("should throw error when time format is invalid", () => {
      expect(() =>
        InputValidator.isValidTimeFormat("8:30", "OUTLET"),
      ).toThrowError("OUTLET.INVALID_TIME_FORMAT");

      expect(() =>
        InputValidator.isValidTimeFormat("25:00", "OUTLET"),
      ).toThrowError("OUTLET.INVALID_TIME_FORMAT");

      expect(() =>
        InputValidator.isValidTimeFormat("22.00", "OUTLET"),
      ).toThrowError("OUTLET.INVALID_TIME_FORMAT");

      expect(() =>
        InputValidator.isValidTimeFormat("22:99", "OUTLET"),
      ).toThrowError("OUTLET.INVALID_TIME_FORMAT");

      expect(() =>
        InputValidator.isValidTimeFormat("abcd", "OUTLET"),
      ).toThrowError("OUTLET.INVALID_TIME_FORMAT");

      expect(() => InputValidator.isValidTimeFormat("", "OUTLET")).toThrowError(
        "OUTLET.INVALID_TIME_FORMAT",
      );
    });

    it("should throw error with correct errorMessageKey", () => {
      expect(() =>
        InputValidator.isValidTimeFormat("99:99", "STORE"),
      ).toThrowError("STORE.INVALID_TIME_FORMAT");
    });
  });
});
