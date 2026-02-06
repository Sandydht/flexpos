import UserLogout from "../../entities/auth/UserLogout";
import AuthRepository from "../../repositories/AuthRepository";

class LogoutAccountUseCase {
  private readonly authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(payload: UserLogout): Promise<string> {
    return await this.authRepository.logoutAccount(payload);
  }
}

export default LogoutAccountUseCase;
