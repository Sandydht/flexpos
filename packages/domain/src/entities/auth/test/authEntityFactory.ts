import { authFixture } from "../../../test/fixtures/authFixture";
import { userFixture } from "../../../test/fixtures/userFixture";
import NewAuth from "../NewAuth";
import UserLogin from "../UserLogin";
import UserLogout from "../UserLogout";
import UserRegister from "../UserRegister";

export const makeNewAuthPayload = (override?: Partial<any>): NewAuth => {
  const validPayload = {
    ...authFixture(),
    ...override,
  };

  return new NewAuth(validPayload.accessToken, validPayload.refreshToken);
};

export const makeUserLoginPayload = (override?: Partial<any>): UserLogin => {
  const validPayload = {
    ...userFixture(),
    ...override,
  };

  return new UserLogin(validPayload.email, validPayload.password);
};

export const makeUserLogoutPayload = (override?: Partial<any>): UserLogout => {
  const validPayload = {
    ...authFixture(),
    ...override,
  };

  return new UserLogout(validPayload.refreshToken);
};

export const makeUserRegisterPayload = (
  override?: Partial<any>,
): UserRegister => {
  const validPayload = {
    ...userFixture(),
    ...override,
  };

  return new UserRegister(
    validPayload.username,
    validPayload.email,
    validPayload.phoneNumber,
    validPayload.fullName,
    validPayload.address,
    validPayload.password,
  );
};
