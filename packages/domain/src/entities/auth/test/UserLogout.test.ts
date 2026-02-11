import { describe, it, expect, beforeEach } from "vitest";
import UserLogout from "../UserLogout";
import { USER_LOGOUT_ERROR_MESSAGE_KEY } from "../constants";
import { makeUserLogoutPayload } from "./authEntityFactory";
import { fixtures } from "../../../test/fixtures";

describe("UserLogout Entity", () => {
  const { auth: validPayload } = fixtures();
  let user: UserLogout;

  beforeEach(() => {
    user = makeUserLogoutPayload();
  });

  describe("constructor success case", () => {
    it("should create UserLogout entity when payload is valid", () => {
      expect(user.getRefreshToken()).toBe(validPayload.refreshToken);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when refreshToken is blank", () => {
      expect(() => makeUserLogoutPayload({ refreshToken: "" })).toThrowError(
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
