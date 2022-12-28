export const ValidPasswordLength = 8;
export const InvalidPasswordLengthDisplayLabel =
  "Password must be longer than 8 characters";
export const NoPasswordProvidedDisplayLabel = "Password is a required field";

export type PasswordValidationResponse = {
  valid: boolean;
  label: string;
};

export function validatePassword(
  input: string | null | FormDataEntryValue
): PasswordValidationResponse {
  if (input === null || input.toString().length === 0) {
    return {
      valid: false,
      label: NoPasswordProvidedDisplayLabel,
    };
  } else {
    const isValid = input.toString().length > ValidPasswordLength;
    return {
      valid: isValid,
      label: isValid ? "" : InvalidPasswordLengthDisplayLabel,
    };
  }
}
