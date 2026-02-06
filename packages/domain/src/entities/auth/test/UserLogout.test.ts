import { describe, it, expect } from "vitest";
import UserLogout from "../UserLogout";

describe("UserLogout Entity", () => {
  const errorMessageKey: string = "USER_LOGOUT";

  it("should create UserLogout when refreshToken is valid", () => {
    const logout = new UserLogout("refresh-token-123");

    expect(logout.getRefreshToken()).toBe("refresh-token-123");
  });

  it("should throw error when refreshToken is empty", () => {
    expect(() => {
      new UserLogout("");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when refreshToken is only spaces", () => {
    expect(() => {
      new UserLogout("   ");
    }).toThrow(errorMessageKey);
  });

  it("should update refreshToken when new value is valid", () => {
    const logout = new UserLogout("refresh-token-123");

    logout.setRefreshToken("new-refresh-token-456");

    expect(logout.getRefreshToken()).toBe("new-refresh-token-456");
  });

  it("should throw error when updating refreshToken with blank value", () => {
    const logout = new UserLogout("refresh-token-123");

    expect(() => {
      logout.setRefreshToken("");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when updating refreshToken with spaces only", () => {
    const logout = new UserLogout("refresh-token-123");

    expect(() => {
      logout.setRefreshToken("   ");
    }).toThrow(errorMessageKey);
  });
});
