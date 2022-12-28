export const ValidEmailLength = 7;
export const InvalidEmailLengthDisplayLabel =
  "Email address must be greater than 7 characters long";
export const NoEmailProvidedDisplayLabel = "Email address is a required field";
export const InvalidEmailFormatDisplayLabel =
  "Email address is not a valid format";
const EmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type EmailValidationResponse = {
  valid: boolean;
  label: string;
};

export function validateEmail(
  input: string | null | FormDataEntryValue
): EmailValidationResponse {
  if (input === null || input.toString().length === 0) {
    return {
      valid: false,
      label: NoEmailProvidedDisplayLabel,
    };
  }

  if (input.toString().length <= ValidEmailLength) {
    return {
      valid: false,
      label: InvalidEmailLengthDisplayLabel,
    };
  } else {
    const isValid = EmailRegex.test(input.toString());
    return {
      valid: isValid,
      label: isValid ? "" : InvalidEmailFormatDisplayLabel,
    };
  }
}
