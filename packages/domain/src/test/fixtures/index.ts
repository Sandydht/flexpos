import { authFixture } from "./authFixture";
import { storeFixture } from "./storeFixture";
import { userFixture } from "./userFixture";

type FixtureOverride = Partial<{
  auth: Partial<ReturnType<typeof authFixture>>;
  user: Partial<ReturnType<typeof userFixture>>;
  store: Partial<ReturnType<typeof storeFixture>>;
}>;

export const fixtures = (override?: FixtureOverride) => ({
  auth: { ...authFixture(), ...override?.auth },
  user: { ...userFixture(), ...override?.user },
  store: { ...storeFixture(), ...override?.store },
});
