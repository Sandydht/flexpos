import UserLogin from "../entities/auth/UserLogin";
import NewAuth from "../entities/auth/NewAuth";
import UserLogout from "../entities/auth/UserLogout";

export default interface AuthRepository {
  loginAccount(_payload: UserLogin): Promise<NewAuth>;
  logoutAccount(_payload: UserLogout): Promise<string>;
}
