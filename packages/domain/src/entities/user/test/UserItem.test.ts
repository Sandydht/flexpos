import { describe, expect, it } from "vitest";
import UserItem from "../UserItem";
import { USER_ITEM_ERROR_MESSAGE_KEY } from "../constants";
import { makeUserItemPayload } from "./userEntityFactory";
import { userFixture } from "../../../test/fixtures/userFixture";

describe("UserItem entity", () => {
  const validPayload = userFixture();
  const user: UserItem = makeUserItemPayload();

  describe("constructor success case", () => {
    it("should create UserItem entity when payload is valid", () => {
      expect(user.getId()).toBe(validPayload.id);
      expect(user.getPhotoUrl()).toBe(validPayload.photoUrl);
      expect(user.getUsername()).toBe(validPayload.username);
      expect(user.getEmail()).toBe(validPayload.email);
      expect(user.getPhoneNumber()).toBe(validPayload.phoneNumber);
      expect(user.getFullName()).toBe(validPayload.fullName);
      expect(user.getAddress()).toBe(validPayload.address);
      expect(user.getRoles()).toStrictEqual(validPayload.roles);
      expect(user.getCreatedAt()).toBe(validPayload.createdAt);
      expect(user.getUpdatedAt()).toBe(validPayload.updatedAt);
      expect(user.getDeletedAt()).toBe(validPayload.deletedAt);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when id is blank", () => {
      expect(() => makeUserItemPayload({ id: "" })).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when username is blank", () => {
      expect(() => makeUserItemPayload({ username: "" })).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when email is blank", () => {
      expect(() => makeUserItemPayload({ email: "" })).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when phoneNumber is blank", () => {
      expect(() => makeUserItemPayload({ phoneNumber: "" })).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when fullName is blank", () => {
      expect(() => makeUserItemPayload({ fullName: "" })).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when address is blank", () => {
      expect(() => makeUserItemPayload({ address: "" })).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when roles is blank", () => {
      expect(() => makeUserItemPayload({ roles: [] })).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when createdAt is blank", () => {
      expect(() => makeUserItemPayload({ createdAt: "" })).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when username exceeds character limit", () => {
      expect(() =>
        makeUserItemPayload({ username: validPayload.username.repeat(51) }),
      ).toThrowError(`${USER_ITEM_ERROR_MESSAGE_KEY}.USERNAME_LIMIT_CHAR`);
    });

    it("should throw error when username contains restricted character", () => {
      expect(() => makeUserItemPayload({ username: "user@123" })).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.USERNAME_CONTAIN_RESTRICTED_CHARACTER`,
      );
    });

    it("should throw error when email format is invalid", () => {
      expect(() =>
        makeUserItemPayload({ email: "invalid-email" }),
      ).toThrowError(`${USER_ITEM_ERROR_MESSAGE_KEY}.INVALID_EMAIL_FORMAT`);
    });

    it("should throw error when phoneNumber is invalid indonesian format", () => {
      expect(() =>
        makeUserItemPayload({ phoneNumber: "invalid-phone-number" }),
      ).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update id when valid", () => {
      user.setId(validPayload.id);
      expect(user.getId()).toBe(validPayload.id);
    });

    it("should update photoUrl when valid", () => {
      user.setPhotoUrl(validPayload.photoUrl);
      expect(user.getPhotoUrl()).toBe(validPayload.photoUrl);

      user.setPhotoUrl(null);
      expect(user.getPhotoUrl()).toBeNull();
    });

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

    it("should update createdAt when valid", () => {
      user.setCreatedAt(validPayload.createdAt);
      expect(user.getCreatedAt()).toBe(validPayload.createdAt);
    });

    it("should update updatedAt when valid", () => {
      user.setUpdatedAt(validPayload.updatedAt);
      expect(user.getUpdatedAt()).toBe(validPayload.updatedAt);

      user.setUpdatedAt(null);
      expect(user.getUpdatedAt()).toBeNull();
    });

    it("should update deletedAt when valid", () => {
      user.setDeletedAt(validPayload.deletedAt);
      expect(user.getDeletedAt()).toBe(validPayload.deletedAt);

      user.setDeletedAt(null);
      expect(user.getDeletedAt()).toBeNull();
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank id", () => {
      expect(() => user.setId("")).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank username", () => {
      expect(() => user.setUsername("")).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank email", () => {
      expect(() => user.setEmail("")).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank phoneNumber", () => {
      expect(() => user.setPhoneNumber("")).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank fullName", () => {
      expect(() => user.setFullName("")).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank address", () => {
      expect(() => user.setAddress("")).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank roles", () => {
      expect(() => user.setRoles([])).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank createdAt", () => {
      expect(() => user.setCreatedAt("")).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting exceeds character limit username", () => {
      expect(() => user.setUsername("user".repeat(51))).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.USERNAME_LIMIT_CHAR`,
      );
    });

    it("should throw error when setting contains restricted character username", () => {
      expect(() => user.setUsername("user@123")).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.USERNAME_CONTAIN_RESTRICTED_CHARACTER`,
      );
    });

    it("should throw error when setting invalid email format", () => {
      expect(() => user.setEmail("invalid-email")).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.INVALID_EMAIL_FORMAT`,
      );
    });

    it("should throw error when setting invalid indonesian phoneNumber format", () => {
      expect(() => user.setPhoneNumber("1234")).toThrowError(
        `${USER_ITEM_ERROR_MESSAGE_KEY}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    });
  });
});
