import UserItem from "../../entities/user/UserItem";
import UserRepository from "../../repositories/UserRepository";

class GetUserProfileUseCase {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<UserItem> {
    return await this.userRepository.getUserProfile();
  }
}

export default GetUserProfileUseCase;
