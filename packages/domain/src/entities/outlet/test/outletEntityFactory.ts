import { fixtures } from "../../../test/fixtures";
import { outletFixture } from "../../../test/fixtures/outletFixture";
import { storeFixture } from "../../../test/fixtures/storeFixture";
import { StoreItem, UpdateOutlet, UserItem } from "../../entities";
import { makeStoreItemPayload } from "../../store/test/storeEntityFactory";
import AddOutlet from "../AddOutlet";
import OutletItem from "../OutletItem";

export const makeAddOutletPayload = (
  override?: Partial<{
    store: Partial<ReturnType<typeof storeFixture>>;
    outlet: Partial<ReturnType<typeof outletFixture>>;
  }>,
): AddOutlet => {
  const { store, outlet } = fixtures({
    store: override?.store,
    outlet: override?.outlet,
  });

  return new AddOutlet(
    store.id,
    outlet.name,
    outlet.code,
    outlet.address,
    outlet.city,
    outlet.province,
    outlet.postalCode,
    outlet.country,
    outlet.email,
    outlet.phoneNumber,
    outlet.openingHours,
    outlet.isActive,
  );
};

export const makeOutletItemPayload = (
  override?: Partial<ReturnType<typeof outletFixture>>,
): OutletItem<StoreItem<UserItem>> => {
  const { outlet } = fixtures({ outlet: override });

  const storeItem: StoreItem<UserItem> = makeStoreItemPayload();

  return new OutletItem<StoreItem<UserItem>>(
    outlet.id,
    storeItem,
    outlet.name,
    outlet.code,
    outlet.address,
    outlet.city,
    outlet.province,
    outlet.postalCode,
    outlet.country,
    outlet.email,
    outlet.phoneNumber,
    outlet.openingHours,
    outlet.isActive,
    outlet.createdAt,
    outlet.updatedAt,
    outlet.deletedAt,
  );
};

export const makeUpdateOutletPayload = (
  override?: Partial<{
    store: Partial<ReturnType<typeof storeFixture>>;
    outlet: Partial<ReturnType<typeof outletFixture>>;
  }>,
): UpdateOutlet => {
  const { store, outlet } = fixtures({
    store: override?.store,
    outlet: override?.outlet,
  });

  return new UpdateOutlet(
    store.id,
    outlet.name,
    outlet.code,
    outlet.address,
    outlet.city,
    outlet.province,
    outlet.postalCode,
    outlet.country,
    outlet.email,
    outlet.phoneNumber,
    outlet.openingHours,
    outlet.isActive,
  );
};
