import { describe, it, expect, beforeEach } from "vitest";
import NewAuth from "../NewAuth";
import { NEW_AUTH_ERROR_MESSAGE_KEY } from "../constants";
import { makeNewAuthPayload } from "./authEntityFactory";
import { fixtures } from "../../../test/fixtures";

describe("NewAuth Entity", () => {
  const { auth: validPayload } = fixtures();
  let auth: NewAuth;

  beforeEach(() => {
    auth = makeNewAuthPayload();
  });

  describe("constructor success case", () => {
    it("should create NewAuth entity when payload is valid", () => {
      expect(auth.getAccessToken()).toBe(validPayload.accessToken);
      expect(auth.getRefreshToken()).toBe(validPayload.refreshToken);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when accessToken is blank", () => {
      expect(() => makeNewAuthPayload({ accessToken: "" })).toThrowError(
        `${NEW_AUTH_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when refreshToken is blank", () => {
      expect(() => makeNewAuthPayload({ refreshToken: "" })).toThrowError(
        `${NEW_AUTH_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update accessToken when valid", () => {
      auth.setAccessToken(validPayload.accessToken);
      expect(auth.getAccessToken()).toBe(validPayload.accessToken);
    });

    it("should update refreshToken when valid", () => {
      auth.setRefreshToken(validPayload.refreshToken);
      expect(auth.getRefreshToken()).toBe(validPayload.refreshToken);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank accessToken", () => {
      expect(() => auth.setAccessToken("")).toThrowError(
        `${NEW_AUTH_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank refreshToken", () => {
      expect(() => auth.setRefreshToken("")).toThrowError(
        `${NEW_AUTH_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
