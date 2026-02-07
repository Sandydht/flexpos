"use client";

import { Button } from "@flexpos/ui";
import { authDependencies } from "@/infrastructure/container";
import { UserLogin } from "@flexpos/domain";

export default function Home() {
  const handleClick = async () => {
    const userLogin: UserLogin = new UserLogin(
      "example@email.com",
      "password123",
    );
    await authDependencies.loginAccountUseCase.execute(userLogin);
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-red-500">
      <Button label="Test" onClick={handleClick} />
    </div>
  );
}
