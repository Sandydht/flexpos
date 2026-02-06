import { describe, it, expect } from "vitest";
import NewAuth from "../NewAuth";

describe("NewAuth Entity", () => {
  const errorMessageKey: string = "NEW_AUTH";

  it("should create NewAuth object when tokens are valid", () => {
    const auth = new NewAuth("access-token-123", "refresh-token-456");

    expect(auth.getAccessToken()).toBe("access-token-123");
    expect(auth.getRefreshToken()).toBe("refresh-token-456");
  });

  it("should throw error when accessToken is empty", () => {
    expect(() => {
      new NewAuth("", "refresh-token-456");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when accessToken is only spaces", () => {
    expect(() => {
      new NewAuth("   ", "refresh-token-456");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when refreshToken is empty", () => {
    expect(() => {
      new NewAuth("access-token-123", "");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when refreshToken is only spaces", () => {
    expect(() => {
      new NewAuth("access-token-123", "   ");
    }).toThrow(errorMessageKey);
  });

  it("should allow updating accessToken with valid value", () => {
    const auth = new NewAuth("access-token-123", "refresh-token-456");

    auth.setAccessToken("new-access-token");

    expect(auth.getAccessToken()).toBe("new-access-token");
  });

  it("should throw error when updating accessToken with blank value", () => {
    const auth = new NewAuth("access-token-123", "refresh-token-456");

    expect(() => {
      auth.setAccessToken("");
    }).toThrow(errorMessageKey);
  });

  it("should allow updating refreshToken with valid value", () => {
    const auth = new NewAuth("access-token-123", "refresh-token-456");

    auth.setRefreshToken("new-refresh-token");

    expect(auth.getRefreshToken()).toBe("new-refresh-token");
  });

  it("should throw error when updating refreshToken with blank value", () => {
    const auth = new NewAuth("access-token-123", "refresh-token-456");

    expect(() => {
      auth.setRefreshToken("   ");
    }).toThrow(errorMessageKey);
  });
});
