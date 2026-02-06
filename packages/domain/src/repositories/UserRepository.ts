import UserProfile from "../entities/user/UserProfile";

export default interface UserRepository {
  getUserProfile(): Promise<UserProfile>;
}
