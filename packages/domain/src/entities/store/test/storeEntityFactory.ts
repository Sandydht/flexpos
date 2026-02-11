import { fixtures } from "../../../test/fixtures";
import { storeFixture } from "../../../test/fixtures/storeFixture";
import { userFixture } from "../../../test/fixtures/userFixture";
import { UpdateStore, UserItem } from "../../entities";
import AddStore from "../AddStore";
import StoreItem from "../StoreItem";

export const makeAddStorePayload = (
  override?: Partial<{
    user: Partial<ReturnType<typeof userFixture>>;
    store: Partial<ReturnType<typeof storeFixture>>;
  }>,
): AddStore => {
  const { user, store } = fixtures({
    user: override?.user,
    store: override?.store,
  });

  return new AddStore(user.id, store.name);
};

export const makeStoreItemPayload = (
  override?: Partial<{
    user: Partial<ReturnType<typeof userFixture>>;
    store: Partial<ReturnType<typeof storeFixture>>;
  }>,
): StoreItem<UserItem> => {
  const { user, store } = fixtures({
    user: override?.user,
    store: override?.store,
  });

  const userItem: UserItem = new UserItem(
    user.id,
    user.photoUrl,
    user.username,
    user.email,
    user.phoneNumber,
    user.fullName,
    user.address,
    user.roles,
    user.createdAt,
    user.updatedAt,
    user.deletedAt,
  );

  return new StoreItem<UserItem>(
    store.id,
    store.photoUrl,
    userItem,
    store.name,
    store.createdAt,
    store.updatedAt,
    store.deletedAt,
  );
};

export const makeUpdateStorePayload = (
  override?: Partial<{
    store: Partial<ReturnType<typeof storeFixture>>;
  }>,
): UpdateStore => {
  const { store } = fixtures({
    store: override?.store,
  });

  return new UpdateStore(store.name);
};
