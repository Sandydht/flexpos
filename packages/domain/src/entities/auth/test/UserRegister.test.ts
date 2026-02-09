import { describe, it, expect } from "vitest";
import UserRegister from "../UserRegister";

describe("UserRegister Entity", () => {
  const errorMessageKey: string = "USER_REGISTER";
  const validPayload = {
    username: "validuser123",
    email: "user@mail.com",
    phoneNumber: "081234567890",
    fullName: "User 123",
    address: "Valid Address",
    password: "password123",
  };

  const user: UserRegister = new UserRegister(
    validPayload.username,
    validPayload.email,
    validPayload.phoneNumber,
    validPayload.fullName,
    validPayload.address,
    validPayload.password,
  );

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
      expect(() => {
        new UserRegister(
          "",
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          validPayload.password,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when email is blank", () => {
      expect(() => {
        new UserRegister(
          validPayload.username,
          "",
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          validPayload.password,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when phoneNumber is blank", () => {
      expect(() => {
        new UserRegister(
          validPayload.username,
          validPayload.email,
          "",
          validPayload.fullName,
          validPayload.address,
          validPayload.password,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when fullName is blank", () => {
      expect(() => {
        new UserRegister(
          validPayload.username,
          validPayload.email,
          validPayload.phoneNumber,
          "",
          validPayload.address,
          validPayload.password,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when address is blank", () => {
      expect(() => {
        new UserRegister(
          validPayload.username,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          "",
          validPayload.password,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when password is blank", () => {
      expect(() => {
        new UserRegister(
          validPayload.username,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          "",
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when username exceeds character limit", () => {
      expect(() => {
        new UserRegister(
          "user".repeat(51),
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          validPayload.password,
        );
      }).toThrowError(`${errorMessageKey}.USERNAME_LIMIT_CHAR`);
    });

    it("should throw error when username contains restricted character", () => {
      expect(() => {
        new UserRegister(
          "user@123",
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          validPayload.password,
        );
      }).toThrowError(
        `${errorMessageKey}.USERNAME_CONTAIN_RESTRICTED_CHARACTER`,
      );
    });

    it("should throw error when email format is invalid", () => {
      expect(() => {
        new UserRegister(
          validPayload.username,
          "invalid-email",
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          validPayload.password,
        );
      }).toThrowError(`${errorMessageKey}.INVALID_EMAIL_FORMAT`);
    });

    it("should throw error when phoneNumber is invalid indonesian format", () => {
      expect(() => {
        new UserRegister(
          validPayload.username,
          validPayload.email,
          "12345",
          validPayload.fullName,
          validPayload.address,
          validPayload.password,
        );
      }).toThrowError(
        `${errorMessageKey}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    });

    it("should throw error when password less than 8 characters", () => {
      expect(() => {
        new UserRegister(
          validPayload.username,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          "sec123",
        );
      }).toThrowError(
        `${errorMessageKey}.PASSWORD_MUST_BE_AT_LEAST_8_CHARACTERS_LONG`,
      );
    });

    it("should throw error when password does not contain letters and numbers", () => {
      expect(() => {
        new UserRegister(
          validPayload.username,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          "password",
        );
      }).toThrowError(
        `${errorMessageKey}.PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_LETTER_AND_ONE_NUMBER`,
      );
    });

    it("should throw error when password contain space", () => {
      expect(() => {
        new UserRegister(
          validPayload.username,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          "password 123",
        );
      }).toThrowError(`${errorMessageKey}.PASSWORD_MUST_NOT_CONTAIN_SPACES`);
    });
  });

  describe("setter success case", () => {
    it("should update username when valid", () => {
      user.setUsername("updateUsername");
      expect(user.getUsername()).toBe("updateUsername");
    });

    it("should update email when valid", () => {
      user.setEmail("updateEmail@email.com");
      expect(user.getEmail()).toBe("updateEmail@email.com");
    });

    it("should update phoneNumber when valid", () => {
      user.setPhoneNumber("081234567891");
      expect(user.getPhoneNumber()).toBe("081234567891");
    });

    it("should update fullName when valid", () => {
      user.setFullName("Update user fullName");
      expect(user.getFullName()).toBe("Update user fullName");
    });

    it("should update address when valid", () => {
      user.setAddress("Update user address");
      expect(user.getAddress()).toBe("Update user address");
    });

    it("should update password when valid", () => {
      user.setPassword("updatedPassword123");
      expect(user.getPassword()).toBe("updatedPassword123");
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank username", () => {
      expect(() => user.setUsername("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank email", () => {
      expect(() => user.setEmail("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank phoneNumber", () => {
      expect(() => user.setPhoneNumber("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank fullName", () => {
      expect(() => user.setFullName("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank address", () => {
      expect(() => user.setAddress("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank password", () => {
      expect(() => user.setPassword("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting exceeds character limit username", () => {
      expect(() => user.setUsername("user".repeat(51))).toThrowError(
        `${errorMessageKey}.USERNAME_LIMIT_CHAR`,
      );
    });

    it("should throw error when setting contains restricted character username", () => {
      expect(() => user.setUsername("user@123")).toThrowError(
        `${errorMessageKey}.USERNAME_CONTAIN_RESTRICTED_CHARACTER`,
      );
    });

    it("should throw error when setting invalid email format", () => {
      expect(() => user.setEmail("invalid-email")).toThrowError(
        `${errorMessageKey}.INVALID_EMAIL_FORMAT`,
      );
    });

    it("should throw error when setting invalid indonesian phoneNumber format", () => {
      expect(() => user.setPhoneNumber("1234")).toThrowError(
        `${errorMessageKey}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    });

    it("should throw error when setting less than 8 characters password", () => {
      expect(() => user.setPassword("secret")).toThrowError(
        `${errorMessageKey}.PASSWORD_MUST_BE_AT_LEAST_8_CHARACTERS_LONG`,
      );
    });

    it("should throw error when setting does not contain letters and numbers password", () => {
      expect(() => user.setPassword("password")).toThrowError(
        `${errorMessageKey}.PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_LETTER_AND_ONE_NUMBER`,
      );
    });

    it("should throw error when setting contain space password", () => {
      expect(() => user.setPassword("password 123")).toThrowError(
        `${errorMessageKey}.PASSWORD_MUST_NOT_CONTAIN_SPACES`,
      );
    });
  });
});
