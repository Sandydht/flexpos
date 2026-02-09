import UserLogin from "../entities/auth/UserLogin";
import NewAuth from "../entities/auth/NewAuth";
import UserLogout from "../entities/auth/UserLogout";
import UserRegister from "../entities/auth/UserRegister";
import { UserItem } from "../entities/entities";

export default interface AuthRepository {
  registerAccount(_payload: UserRegister): Promise<UserItem>;
  loginAccount(_payload: UserLogin): Promise<NewAuth>;
  logoutAccount(_payload: UserLogout): Promise<string>;
}
