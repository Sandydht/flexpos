import NewAuth from "../../entities/auth/NewAuth";
import UserLogin from "../../entities/auth/UserLogin";
import AuthRepository from "../../repositories/AuthRepository";

class LoginAccountUseCase {
  private readonly authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(payload: UserLogin): Promise<NewAuth> {
    return await this.authRepository.loginAccount(payload);
  }
}

export default LoginAccountUseCase;
