class InputValidator {
  private static readonly PASSWORD_MUST_CONTAIN_LETTERS_AND_NUMBERS_PATTERN =
    /^(?=.*[A-Za-z])(?=.*\d).+$/;
  private static readonly PASSWORD_MUST_NOT_CONTAIN_SPACE_PATTERN = /.*\s.*/;
  private static readonly EMAIL_PATTERN =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  private static readonly INDONESIAN_PHONE_NUMBER_PATTERN =
    /^(?:\+62|62|0)8[1-9][0-9]{7,10}$/;
  private static readonly USERNAME_PATTERN = /^[\w]+$/;
  private static readonly TIME_24H_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)$/;

  public static requireNotBlank(value: string, errorMessageKey: string): void {
    if (!value || value.trim().length === 0) {
      throw new Error(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    }
  }

  public static validatePassword(
    password: string,
    errorMessageKey: string,
  ): void {
    if (password.length < 8) {
      throw new Error(
        `${errorMessageKey}.PASSWORD_MUST_BE_AT_LEAST_8_CHARACTERS_LONG`,
      );
    }

    if (
      !this.PASSWORD_MUST_CONTAIN_LETTERS_AND_NUMBERS_PATTERN.test(password)
    ) {
      throw new Error(
        `${errorMessageKey}.PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_LETTER_AND_ONE_NUMBER`,
      );
    }

    if (this.PASSWORD_MUST_NOT_CONTAIN_SPACE_PATTERN.test(password)) {
      throw new Error(`${errorMessageKey}.PASSWORD_MUST_NOT_CONTAIN_SPACES`);
    }
  }

  public static emailValidFormat(email: string, errorMessageKey: string): void {
    if (!this.EMAIL_PATTERN.test(email)) {
      throw new Error(`${errorMessageKey}.INVALID_EMAIL_FORMAT`);
    }
  }

  public static indonesianPhoneNumberValidFormat(
    phoneNumber: string,
    errorMessageKey: string,
  ): void {
    if (!this.INDONESIAN_PHONE_NUMBER_PATTERN.test(phoneNumber)) {
      throw new Error(
        `${errorMessageKey}.INVALID_INDONESIAN_PHONE_NUMBER_FORMAT`,
      );
    }
  }

  public static validateUsername(
    username: string,
    errorMessageKey: string,
  ): void {
    if (username.length > 50) {
      throw new Error(`${errorMessageKey}.USERNAME_LIMIT_CHAR`);
    }

    if (!this.USERNAME_PATTERN.test(username)) {
      throw new Error(
        `${errorMessageKey}.USERNAME_CONTAIN_RESTRICTED_CHARACTER`,
      );
    }
  }

  public static requireNotBlankArray<T>(
    values: T[],
    errorMessageKey: string,
  ): void {
    if (!values || values.length === 0) {
      throw new Error(`${errorMessageKey}.NOT_CONTAIN_NEEDED_PROPERTY`);
    }
  }

  public static isValidTimeFormat(
    value: string,
    errorMessageKey: string,
  ): void {
    if (!this.TIME_24H_PATTERN.test(value)) {
      throw new Error(`${errorMessageKey}.INVALID_TIME_FORMAT`);
    }
  }
}

export default InputValidator;
