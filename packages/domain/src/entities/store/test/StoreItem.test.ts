import { describe, expect, it } from "vitest";
import StoreItem from "../StoreItem";
import { STORE_ITEM_ERROR_MESSAGE_KEY } from "../constants";
import { fixtures } from "../../../test/fixtures";
import { UserItem } from "../../entities";
import { makeStoreItemPayload } from "./storeEntityFactory";

describe("StoreItem entity", () => {
  const { user: validPayloadUser, store: validPayloadStore } = fixtures();
  const store: StoreItem<UserItem> = makeStoreItemPayload();

  describe("constructor success case", () => {
    it("should create StoreItem entity when payload is valid", () => {
      expect(store.getId()).toBe(validPayloadStore.id);
      expect(store.getPhotoUrl()).toBe(validPayloadStore.photoUrl);

      expect(store.getOwner().getId()).toBe(validPayloadUser.id);
      expect(store.getOwner().getPhotoUrl()).toBe(validPayloadUser.photoUrl);
      expect(store.getOwner().getUsername()).toBe(validPayloadUser.username);
      expect(store.getOwner().getEmail()).toBe(validPayloadUser.email);
      expect(store.getOwner().getPhoneNumber()).toBe(
        validPayloadUser.phoneNumber,
      );
      expect(store.getOwner().getFullName()).toBe(validPayloadUser.fullName);
      expect(store.getOwner().getAddress()).toBe(validPayloadUser.address);
      expect(store.getOwner().getRoles()).toStrictEqual(validPayloadUser.roles);
      expect(store.getOwner().getCreatedAt()).toBe(validPayloadUser.createdAt);
      expect(store.getOwner().getUpdatedAt()).toBe(validPayloadUser.updatedAt);
      expect(store.getOwner().getDeletedAt()).toBe(validPayloadUser.deletedAt);

      expect(store.getName()).toBe(validPayloadStore.name);
      expect(store.getCreatedAt()).toBe(validPayloadStore.createdAt);
      expect(store.getUpdatedAt()).toBe(validPayloadStore.updatedAt);
      expect(store.getDeletedAt()).toBe(validPayloadStore.deletedAt);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when id is blank", () => {
      expect(() => makeStoreItemPayload({ store: { id: "" } })).toThrowError(
        `${STORE_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when name is blank", () => {
      expect(() => makeStoreItemPayload({ store: { name: "" } })).toThrowError(
        `${STORE_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when createdAt is blank", () => {
      expect(() =>
        makeStoreItemPayload({ store: { createdAt: "" } }),
      ).toThrowError(
        `${STORE_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });

  describe("setter success case", () => {
    it("should update id when valid", () => {
      store.setId(validPayloadStore.id);
      expect(store.getId()).toBe(validPayloadStore.id);
    });

    it("should update photoUrl when valid", () => {
      store.setPhotoUrl(validPayloadStore.photoUrl);
      expect(store.getPhotoUrl()).toBe(validPayloadStore.photoUrl);

      store.setPhotoUrl(null);
      expect(store.getPhotoUrl()).toBeNull();
    });

    it("should update name when valid", () => {
      store.setName(validPayloadStore.name);
      expect(store.getName()).toBe(validPayloadStore.name);
    });

    it("should update createdAt when valid", () => {
      store.setCreatedAt(validPayloadStore.createdAt);
      expect(store.getCreatedAt()).toBe(validPayloadStore.createdAt);
    });

    it("should update updatedAt when valid", () => {
      store.setUpdatedAt(validPayloadStore.updatedAt);
      expect(store.getUpdatedAt()).toBe(validPayloadStore.updatedAt);

      store.setUpdatedAt(null);
      expect(store.getUpdatedAt()).toBeNull();
    });

    it("should update deletedAt when valid", () => {
      store.setDeletedAt(validPayloadStore.deletedAt);
      expect(store.getDeletedAt()).toBe(validPayloadStore.deletedAt);

      store.setDeletedAt(null);
      expect(store.getDeletedAt()).toBeNull();
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank id", () => {
      expect(() => store.setId("")).toThrowError(
        `${STORE_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank name", () => {
      expect(() => store.setName("")).toThrowError(
        `${STORE_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank createdAt", () => {
      expect(() => store.setCreatedAt("")).toThrowError(
        `${STORE_ITEM_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });
  });
});
