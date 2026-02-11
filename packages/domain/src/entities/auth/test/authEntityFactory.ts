import { fixtures } from "../../../test/fixtures";
import { authFixture } from "../../../test/fixtures/authFixture";
import { userFixture } from "../../../test/fixtures/userFixture";
import NewAuth from "../NewAuth";
import UserLogin from "../UserLogin";
import UserLogout from "../UserLogout";
import UserRegister from "../UserRegister";

export const makeNewAuthPayload = (
  override?: Partial<ReturnType<typeof authFixture>>,
): NewAuth => {
  const { auth } = fixtures({ auth: override });

  return new NewAuth(auth.accessToken, auth.refreshToken);
};

export const makeUserLoginPayload = (
  override?: Partial<ReturnType<typeof userFixture>>,
): UserLogin => {
  const { user } = fixtures({ user: override });

  return new UserLogin(user.email, user.password);
};

export const makeUserLogoutPayload = (
  override?: Partial<ReturnType<typeof authFixture>>,
): UserLogout => {
  const { auth } = fixtures({ auth: override });

  return new UserLogout(auth.refreshToken);
};

export const makeUserRegisterPayload = (
  override?: Partial<ReturnType<typeof userFixture>>,
): UserRegister => {
  const { user } = fixtures({ user: override });

  return new UserRegister(
    user.username,
    user.email,
    user.phoneNumber,
    user.fullName,
    user.address,
    user.password,
  );
};
