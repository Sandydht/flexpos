import { describe, it, expect } from "vitest";
import UserProfile from "../UserProfile";
import { UserRole } from "../types";

describe("UserProfile Entity", () => {
  const errorMessageKey: string = "USER_PROFILE";

  const validPayload = {
    id: "user-123",
    photoUrl: "https://example.com/photo.png",
    email: "test@example.com",
    phoneNumber: "081234567890",
    fullName: "User",
    role: "ADMIN" as UserRole,
  };

  it("should create UserProfile when payload is valid", () => {
    const user = new UserProfile(
      validPayload.id,
      validPayload.photoUrl,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.role,
    );

    expect(user.getId()).toBe(validPayload.id);
    expect(user.getPhotoUrl()).toBe(validPayload.photoUrl);
    expect(user.getEmail()).toBe(validPayload.email);
    expect(user.getPhoneNumber()).toBe(validPayload.phoneNumber);
    expect(user.getFullName()).toBe(validPayload.fullName);
    expect(user.getUserRole()).toBe(validPayload.role);
  });

  it("should throw error when id is blank", () => {
    expect(() => {
      new UserProfile(
        "",
        validPayload.photoUrl,
        validPayload.email,
        validPayload.phoneNumber,
        validPayload.fullName,
        validPayload.role,
      );
    }).toThrow(errorMessageKey);
  });

  it("should throw error when email is blank", () => {
    expect(() => {
      new UserProfile(
        validPayload.id,
        validPayload.photoUrl,
        "",
        validPayload.phoneNumber,
        validPayload.fullName,
        validPayload.role,
      );
    }).toThrow(errorMessageKey);
  });

  it("should throw error when phoneNumber is blank", () => {
    expect(() => {
      new UserProfile(
        validPayload.id,
        validPayload.photoUrl,
        validPayload.email,
        "",
        validPayload.fullName,
        validPayload.role,
      );
    }).toThrow(errorMessageKey);
  });

  it("should throw error when fullName is blank", () => {
    expect(() => {
      new UserProfile(
        validPayload.id,
        validPayload.photoUrl,
        validPayload.email,
        validPayload.phoneNumber,
        "",
        validPayload.role,
      );
    }).toThrow(errorMessageKey);
  });

  it("should throw error when role is blank", () => {
    expect(() => {
      new UserProfile(
        validPayload.id,
        validPayload.photoUrl,
        validPayload.email,
        validPayload.phoneNumber,
        validPayload.fullName,
        "" as UserRole,
      );
    }).toThrow(errorMessageKey);
  });

  it("should throw error when email format is invalid", () => {
    expect(() => {
      new UserProfile(
        validPayload.id,
        validPayload.photoUrl,
        "invalid-email",
        validPayload.phoneNumber,
        validPayload.fullName,
        validPayload.role,
      );
    }).toThrow(errorMessageKey);
  });

  it("should throw error when phoneNumber format is invalid", () => {
    expect(() => {
      new UserProfile(
        validPayload.id,
        validPayload.photoUrl,
        validPayload.email,
        "12345",
        validPayload.fullName,
        validPayload.role,
      );
    }).toThrow(`${errorMessageKey}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`);
  });

  it("should update email when new email is valid", () => {
    const user = new UserProfile(
      validPayload.id,
      validPayload.photoUrl,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.role,
    );

    user.setEmail("new@example.com");

    expect(user.getEmail()).toBe("new@example.com");
  });

  it("should throw error when updating email with invalid format", () => {
    const user = new UserProfile(
      validPayload.id,
      validPayload.photoUrl,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.role,
    );

    expect(() => {
      user.setEmail("invalid-email");
    }).toThrow(errorMessageKey);
  });

  it("should update phoneNumber when new phone number is valid", () => {
    const user = new UserProfile(
      validPayload.id,
      validPayload.photoUrl,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.role,
    );

    user.setPhoneNumber("082345678901");

    expect(user.getPhoneNumber()).toBe("082345678901");
  });

  it("should throw error when updating phoneNumber with invalid format", () => {
    const user = new UserProfile(
      validPayload.id,
      validPayload.photoUrl,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.role,
    );

    expect(() => {
      user.setPhoneNumber("99999");
    }).toThrow(`${errorMessageKey}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`);
  });

  it("should allow setting photoUrl to null", () => {
    const user = new UserProfile(
      validPayload.id,
      validPayload.photoUrl,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.role,
    );

    user.setPhotoUrl(null);

    expect(user.getPhotoUrl()).toBeNull();
  });

  it("should update user role", () => {
    const user = new UserProfile(
      validPayload.id,
      validPayload.photoUrl,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.role,
    );

    user.setUserRole("OFFICER" as UserRole);

    expect(user.getUserRole()).toBe("OFFICER");
  });
});
