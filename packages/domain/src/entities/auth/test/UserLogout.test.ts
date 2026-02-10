import { describe, it, expect } from "vitest";
import UserLogout from "../UserLogout";
import { USER_LOGOUT_ERROR_MESSAGE_KEY } from "../constants";

describe("UserLogout Entity", () => {
  const validPayload = {
    refreshToken: "refresh-token",
  };

  const user: UserLogout = new UserLogout(validPayload.refreshToken);

  describe("constructor success case", () => {
    it("should create UserLogout entity when payload is valid", () => {
      expect(user.getRefreshToken()).toBe(validPayload.refreshToken);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when refreshToken is blank", () => {
      expect(() => {
        new UserLogout("");
      }).toThrowError(
        `${USER_LOGOUT_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update refreshToken when valid", () => {
      user.setRefreshToken(validPayload.refreshToken);
      expect(user.getRefreshToken()).toBe(validPayload.refreshToken);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank refreshToken", () => {
      expect(() => user.setRefreshToken("")).toThrowError(
        `${USER_LOGOUT_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
