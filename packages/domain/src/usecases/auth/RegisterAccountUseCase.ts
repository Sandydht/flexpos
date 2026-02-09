import UserRegister from "../../entities/auth/UserRegister";
import { UserItem } from "../../entities/entities";
import AuthRepository from "../../repositories/AuthRepository";

class RegisterAccountUseCase {
  private readonly authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(payload: UserRegister): Promise<UserItem> {
    return await this.authRepository.registerAccount(payload);
  }
}

export default RegisterAccountUseCase;
