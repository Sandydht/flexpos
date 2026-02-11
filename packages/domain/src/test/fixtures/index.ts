import { authFixture } from "./authFixture";
import { outletFixture } from "./outletFixture";
import { storeFixture } from "./storeFixture";
import { userFixture } from "./userFixture";

type FixtureOverride = Partial<{
  auth: Partial<ReturnType<typeof authFixture>>;
  user: Partial<ReturnType<typeof userFixture>>;
  store: Partial<ReturnType<typeof storeFixture>>;
  outlet: Partial<ReturnType<typeof outletFixture>>;
}>;

export const fixtures = (override?: FixtureOverride) => ({
  auth: { ...authFixture(), ...override?.auth },
  user: { ...userFixture(), ...override?.user },
  store: { ...storeFixture(), ...override?.store },
  outlet: { ...outletFixture(), ...override?.outlet },
});
