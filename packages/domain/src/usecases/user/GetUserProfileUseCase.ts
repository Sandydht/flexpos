import UserProfile from "../../entities/user/UserProfile";
import UserRepository from "../../repositories/UserRepository";

class GetUserProfileUseCase {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<UserProfile> {
    return await this.userRepository.getUserProfile();
  }
}

export default GetUserProfileUseCase;
