import { describe, it, expect } from "vitest";
import UserLogin from "../UserLogin";

describe("UserLogin Entity", () => {
  const errorMessageKey: string = "USER_LOGIN";

  it("should create UserLogin when email and password are valid", () => {
    const user = new UserLogin("test@example.com", "abc12345");

    expect(user.getEmail()).toBe("test@example.com");
    expect(user.getPassword()).toBe("abc12345");
  });

  it("should throw error when email is empty", () => {
    expect(() => {
      new UserLogin("", "abc12345");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when email is only spaces", () => {
    expect(() => {
      new UserLogin("   ", "abc12345");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when password is empty", () => {
    expect(() => {
      new UserLogin("test@example.com", "");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when password is only spaces", () => {
    expect(() => {
      new UserLogin("test@example.com", "   ");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when email format is invalid", () => {
    expect(() => {
      new UserLogin("invalid-email", "abc12345");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when password is less than 8 characters", () => {
    expect(() => {
      new UserLogin("test@example.com", "abc12");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when password does not contain numbers", () => {
    expect(() => {
      new UserLogin("test@example.com", "abcdefgh");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when password contains spaces", () => {
    expect(() => {
      new UserLogin("test@example.com", "abc123 45");
    }).toThrow(errorMessageKey);
  });

  it("should update email when new email is valid", () => {
    const user = new UserLogin("test@example.com", "abc12345");

    user.setEmail("new@example.com");

    expect(user.getEmail()).toBe("new@example.com");
  });

  it("should throw error when updating email with blank value", () => {
    const user = new UserLogin("test@example.com", "abc12345");

    expect(() => {
      user.setEmail("");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when updating email with invalid format", () => {
    const user = new UserLogin("test@example.com", "abc12345");

    expect(() => {
      user.setEmail("invalid-email");
    }).toThrow(errorMessageKey);
  });

  it("should update password when new password is valid", () => {
    const user = new UserLogin("test@example.com", "abc12345");

    user.setPassword("newpass123");

    expect(user.getPassword()).toBe("newpass123");
  });

  it("should throw error when updating password with blank value", () => {
    const user = new UserLogin("test@example.com", "abc12345");

    expect(() => {
      user.setPassword("");
    }).toThrow(errorMessageKey);
  });

  it("should throw error when updating password with invalid rules", () => {
    const user = new UserLogin("test@example.com", "abc12345");

    expect(() => {
      user.setPassword("short1");
    }).toThrow(errorMessageKey);
  });
});
