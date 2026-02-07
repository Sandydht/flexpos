import { describe, it, expect } from "vitest";
import UserProfile from "../UserProfile";
import { UserRole } from "../types";

describe("UserProfile Entity", () => {
  const validPayload = {
    id: "user-123",
    photoUrl: null,
    email: "user@mail.com",
    phoneNumber: "081234567890",
    fullName: "User",
    address: "Jakarta, Indonesia",
    role: "OFFICER" as UserRole,
    createdAt: "2025-02-07",
    updatedAt: null,
    deletedAt: null,
  };

  it("should create UserProfile correctly when payload is valid", () => {
    const user = new UserProfile(
      validPayload.id,
      validPayload.photoUrl,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.address,
      validPayload.role,
      validPayload.createdAt,
      validPayload.updatedAt,
      validPayload.deletedAt,
    );

    expect(user.getId()).toBe(validPayload.id);
    expect(user.getPhotoUrl()).toBeNull();
    expect(user.getEmail()).toBe(validPayload.email);
    expect(user.getPhoneNumber()).toBe(validPayload.phoneNumber);
    expect(user.getFullName()).toBe(validPayload.fullName);
    expect(user.getAddress()).toBe(validPayload.address);
    expect(user.getUserRole()).toBe(validPayload.role);
    expect(user.getCreatedAt()).toBe(validPayload.createdAt);
    expect(user.getUpdatedAt()).toBeNull();
    expect(user.getDeletedAt()).toBeNull();
  });

  it("should throw error when id is empty", () => {
    expect(() => {
      new UserProfile(
        "",
        null,
        validPayload.email,
        validPayload.phoneNumber,
        validPayload.fullName,
        validPayload.address,
        validPayload.role,
        validPayload.createdAt,
        null,
        null,
      );
    }).toThrow();
  });

  it("should throw error when email is invalid format", () => {
    expect(() => {
      new UserProfile(
        validPayload.id,
        null,
        "invalid-email",
        validPayload.phoneNumber,
        validPayload.fullName,
        validPayload.address,
        validPayload.role,
        validPayload.createdAt,
        null,
        null,
      );
    }).toThrow();
  });

  it("should throw error when phoneNumber is invalid format", () => {
    expect(() => {
      new UserProfile(
        validPayload.id,
        null,
        validPayload.email,
        "12345",
        validPayload.fullName,
        validPayload.address,
        validPayload.role,
        validPayload.createdAt,
        null,
        null,
      );
    }).toThrow();
  });

  it("should throw error when fullName is blank", () => {
    expect(() => {
      new UserProfile(
        validPayload.id,
        null,
        validPayload.email,
        validPayload.phoneNumber,
        "",
        validPayload.address,
        validPayload.role,
        validPayload.createdAt,
        null,
        null,
      );
    }).toThrow();
  });

  it("should throw error when address is blank", () => {
    expect(() => {
      new UserProfile(
        validPayload.id,
        null,
        validPayload.email,
        validPayload.phoneNumber,
        validPayload.fullName,
        "",
        validPayload.role,
        validPayload.createdAt,
        null,
        null,
      );
    }).toThrow();
  });

  it("should update email correctly when valid", () => {
    const user = new UserProfile(
      validPayload.id,
      null,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.address,
      validPayload.role,
      validPayload.createdAt,
      null,
      null,
    );

    user.setEmail("new@mail.com");

    expect(user.getEmail()).toBe("new@mail.com");
  });

  it("should throw error when updating email with invalid format", () => {
    const user = new UserProfile(
      validPayload.id,
      null,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.address,
      validPayload.role,
      validPayload.createdAt,
      null,
      null,
    );

    expect(() => {
      user.setEmail("wrong-email");
    }).toThrow();
  });

  it("should update phoneNumber correctly when valid", () => {
    const user = new UserProfile(
      validPayload.id,
      null,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.address,
      validPayload.role,
      validPayload.createdAt,
      null,
      null,
    );

    user.setPhoneNumber("082233445566");

    expect(user.getPhoneNumber()).toBe("082233445566");
  });

  it("should throw error when updating phoneNumber with invalid value", () => {
    const user = new UserProfile(
      validPayload.id,
      null,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.address,
      validPayload.role,
      validPayload.createdAt,
      null,
      null,
    );

    expect(() => {
      user.setPhoneNumber("999");
    }).toThrow();
  });

  it("should update fullName correctly", () => {
    const user = new UserProfile(
      validPayload.id,
      null,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.address,
      validPayload.role,
      validPayload.createdAt,
      null,
      null,
    );

    user.setFullName("Updated Name");

    expect(user.getFullName()).toBe("Updated Name");
  });

  it("should update address correctly", () => {
    const user = new UserProfile(
      validPayload.id,
      null,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.address,
      validPayload.role,
      validPayload.createdAt,
      null,
      null,
    );

    user.setAddress("Bandung");

    expect(user.getAddress()).toBe("Bandung");
  });

  it("should update updatedAt correctly", () => {
    const user = new UserProfile(
      validPayload.id,
      null,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.address,
      validPayload.role,
      validPayload.createdAt,
      null,
      null,
    );

    user.setUpdatedAt("2025-02-08");

    expect(user.getUpdatedAt()).toBe("2025-02-08");
  });

  it("should update deletedAt correctly", () => {
    const user = new UserProfile(
      validPayload.id,
      null,
      validPayload.email,
      validPayload.phoneNumber,
      validPayload.fullName,
      validPayload.address,
      validPayload.role,
      validPayload.createdAt,
      null,
      null,
    );

    user.setDeletedAt("2025-03-01");

    expect(user.getDeletedAt()).toBe("2025-03-01");
  });
});
