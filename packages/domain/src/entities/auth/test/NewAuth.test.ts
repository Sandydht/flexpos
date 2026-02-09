import { describe, it, expect } from "vitest";
import NewAuth from "../NewAuth";

describe("NewAuth Entity", () => {
  const errorMessageKey: string = "NEW_AUTH";
  const validPayload = {
    accessToken: "access-token",
    refreshToken: "refresh-token",
  };

  const auth: NewAuth = new NewAuth(
    validPayload.accessToken,
    validPayload.refreshToken,
  );

  describe("constructor success case", () => {
    it("should create NewAuth entity when payload is valid", () => {
      expect(auth.getAccessToken()).toBe(validPayload.accessToken);
      expect(auth.getRefreshToken()).toBe(validPayload.refreshToken);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when accessToken is blank", () => {
      expect(() => {
        new NewAuth("", validPayload.refreshToken);
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });

    it("should throw error when refreshToken is blank", () => {
      expect(() => {
        new NewAuth(validPayload.accessToken, "");
      }).toThrowError(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    });
  });

  describe("setter success case", () => {
    it("should update accessToken when valid", () => {
      auth.setAccessToken("new-access-token");
      expect(auth.getAccessToken()).toBe("new-access-token");
    });

    it("should update refreshToken when valid", () => {
      auth.setRefreshToken("new-refresh-token");
      expect(auth.getRefreshToken()).toBe("new-refresh-token");
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank accessToken", () => {
      expect(() => auth.setAccessToken("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank refreshToken", () => {
      expect(() => auth.setRefreshToken("")).toThrowError(
        `${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
