import { LoginAccountUseCase } from "@flexpos/domain";
import AuthRepositoryImpl from "./repositories/AuthRepositoryImpl";

const authRepositoryImpl: AuthRepositoryImpl = new AuthRepositoryImpl();

export const authDependencies = {
  loginAccountUseCase: new LoginAccountUseCase(authRepositoryImpl),
};
