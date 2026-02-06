class UserLogin {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string) {
    this.password = password;
  }
}

export default UserLogin;
