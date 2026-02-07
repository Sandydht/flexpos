import {
  AuthRepository,
  NewAuth,
  UserLogin,
  UserLogout,
} from "@flexpos/domain";

class AuthRepositoryImpl implements AuthRepository {
  async loginAccount(payload: UserLogin): Promise<NewAuth> {
    console.log("email: ", payload.getEmail());
    console.log("password: ", payload.getPassword());
    return new NewAuth("access-token", "refresh-token");
  }

  async logoutAccount(payload: UserLogout): Promise<string> {
    console.log("payload: ", payload);
    return "See you!";
  }
}

export default AuthRepositoryImpl;
