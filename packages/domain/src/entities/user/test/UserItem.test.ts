import { describe, expect, it } from "vitest";
import UserItem from "../UserItem";
import { UserRole } from "../types";

describe("UserItem entity", () => {
  const errorMessageKey: string = "USER_ITEM";
  const now = new Date("2026-03-02").toISOString();
  const validPayload = {
    id: "user-1",
    photoUrl: null,
    username: "validuser123",
    email: "user@mail.com",
    phoneNumber: "081234567890",
    fullName: "User 123",
    address: "Valid Address",
    roles: ["OWNER"],
    createdAt: now,
    updatedAt: null,
    deletedAt: null,
  };

  const user: UserItem = new UserItem(
    validPayload.id,
    validPayload.photoUrl,
    validPayload.username,
    validPayload.email,
    validPayload.phoneNumber,
    validPayload.fullName,
    validPayload.address,
    validPayload.roles as UserRole[],
    validPayload.createdAt,
    validPayload.updatedAt,
    validPayload.deletedAt,
  );

  describe("constructor success case", () => {
    it("should create UserItem entity when payload is valid", () => {
      const user: UserItem = new UserItem(
        validPayload.id,
        validPayload.photoUrl,
        validPayload.username,
        validPayload.email,
        validPayload.phoneNumber,
        validPayload.fullName,
        validPayload.address,
        validPayload.roles as UserRole[],
        validPayload.createdAt,
        validPayload.updatedAt,
        validPayload.deletedAt,
      );

      expect(user.getId()).toBe(validPayload.id);
      expect(user.getPhotoUrl()).toBe(validPayload.photoUrl);
      expect(user.getUsername()).toBe(validPayload.username);
      expect(user.getEmail()).toBe(validPayload.email);
      expect(user.getPhoneNumber()).toBe(validPayload.phoneNumber);
      expect(user.getFullName()).toBe(validPayload.fullName);
      expect(user.getAddress()).toBe(validPayload.address);
      expect(user.getRoles()).toBe(validPayload.roles);
      expect(user.getCreatedAt()).toBe(validPayload.createdAt);
      expect(user.getUpdatedAt()).toBe(validPayload.updatedAt);
      expect(user.getDeletedAt()).toBe(validPayload.deletedAt);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when id is blank", () => {
      expect(() => {
        new UserItem(
          "",
          validPayload.photoUrl,
          validPayload.username,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          validPayload.roles as UserRole[],
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when username is blank", () => {
      expect(() => {
        new UserItem(
          validPayload.id,
          validPayload.photoUrl,
          "",
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          validPayload.roles as UserRole[],
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when email is blank", () => {
      expect(() => {
        new UserItem(
          validPayload.id,
          validPayload.photoUrl,
          validPayload.username,
          "",
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          validPayload.roles as UserRole[],
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when phoneNumber is blank", () => {
      expect(() => {
        new UserItem(
          validPayload.id,
          validPayload.photoUrl,
          validPayload.username,
          validPayload.email,
          "",
          validPayload.fullName,
          validPayload.address,
          validPayload.roles as UserRole[],
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when fullName is blank", () => {
      expect(() => {
        new UserItem(
          validPayload.id,
          validPayload.photoUrl,
          validPayload.username,
          validPayload.email,
          validPayload.phoneNumber,
          "",
          validPayload.address,
          validPayload.roles as UserRole[],
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when address is blank", () => {
      expect(() => {
        new UserItem(
          validPayload.id,
          validPayload.photoUrl,
          validPayload.username,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          "",
          validPayload.roles as UserRole[],
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when roles is blank", () => {
      expect(() => {
        new UserItem(
          validPayload.id,
          validPayload.photoUrl,
          validPayload.username,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          [],
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when createdAt is blank", () => {
      expect(() => {
        new UserItem(
          validPayload.id,
          validPayload.photoUrl,
          validPayload.username,
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          validPayload.roles as UserRole[],
          "",
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when username exceeds character limit", () => {
      expect(() => {
        new UserItem(
          validPayload.id,
          validPayload.photoUrl,
          validPayload.username.repeat(51),
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          validPayload.roles as UserRole[],
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.USERNAME_LIMIT_CHAR`);
    });

    it("should throw error when username contains restricted character", () => {
      expect(() => {
        new UserItem(
          validPayload.id,
          validPayload.photoUrl,
          "user@123",
          validPayload.email,
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          validPayload.roles as UserRole[],
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${errorMessageKey}.USERNAME_CONTAIN_RESTRICTED_CHARACTER`,
      );
    });

    it("should throw error when email format is invalid", () => {
      expect(() => {
        new UserItem(
          validPayload.id,
          validPayload.photoUrl,
          validPayload.username,
          "invalid-email",
          validPayload.phoneNumber,
          validPayload.fullName,
          validPayload.address,
          validPayload.roles as UserRole[],
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(`${errorMessageKey}.INVALID_EMAIL_FORMAT`);
    });

    it("should throw error when phoneNumber is invalid indonesian format", () => {
      expect(() => {
        new UserItem(
          validPayload.id,
          validPayload.photoUrl,
          validPayload.username,
          validPayload.email,
          "12345",
          validPayload.fullName,
          validPayload.address,
          validPayload.roles as UserRole[],
          validPayload.createdAt,
          validPayload.updatedAt,
          validPayload.deletedAt,
        );
      }).toThrowError(
        `${errorMessageKey}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update id when valid", () => {
      user.setId("user-1");
      expect(user.getId()).toBe("user-1");
    });

    it("should update photoUrl when valid", () => {
      user.setPhotoUrl("https://photo-link.com");
      expect(user.getPhotoUrl()).toBe("https://photo-link.com");

      user.setPhotoUrl(null);
      expect(user.getPhotoUrl()).toBeNull();
    });

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

    it("should update createdAt when valid", () => {
      const now = new Date("2026-03-02").toISOString();
      user.setCreatedAt(now);
      expect(user.getCreatedAt()).toBe(now);
    });

    it("should update updatedAt when valid", () => {
      const now = new Date("2026-03-02").toISOString();
      user.setUpdatedAt(now);
      expect(user.getUpdatedAt()).toBe(now);

      user.setUpdatedAt(null);
      expect(user.getUpdatedAt()).toBeNull();
    });

    it("should update deletedAt when valid", () => {
      const now = new Date("2026-03-02").toISOString();
      user.setDeletedAt(now);
      expect(user.getDeletedAt()).toBe(now);

      user.setDeletedAt(null);
      expect(user.getDeletedAt()).toBeNull();
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank id", () => {
      expect(() => user.setId("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

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

    it("should throw error when setting blank roles", () => {
      expect(() => user.setRoles([])).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank createdAt", () => {
      expect(() => user.setCreatedAt("")).toThrowError(
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
  });
});
