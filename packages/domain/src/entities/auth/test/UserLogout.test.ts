import { describe, it, expect } from "vitest";
import UserLogout from "../UserLogout";

describe("UserLogout Entity", () => {
  const errorMessageKey: string = "USER_LOGOUT";
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
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });
  });

  describe("setter success case", () => {
    it("should update refreshToken when valid", () => {
      user.setRefreshToken("new-refresh-token");
      expect(user.getRefreshToken()).toBe("new-refresh-token");
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank refreshToken", () => {
      expect(() => user.setRefreshToken("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
