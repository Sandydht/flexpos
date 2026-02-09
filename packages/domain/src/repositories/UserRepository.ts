import UserItem from "../entities/user/UserItem";

export default interface UserRepository {
  getUserProfile(): Promise<UserItem>;
}
