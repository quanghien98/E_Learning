export const validateUrl = urlString => {
  let error = "";
  let urlValidator = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (!urlString.match(urlValidator)) {
    error = "Invalid URL.";
    return error;
  }
  return error;
};

export const validateStringLength = (inputString, minLength, maxLength) => {
  let error = "";
  let defaultMaxLength = 80;
  let defaultMinLength = 3;
  if (maxLength === undefined) {
    maxLength = defaultMaxLength;
  }
  if (minLength === undefined) {
    minLength = defaultMinLength;
  }
  if (
    (inputString.length > 0 && inputString.length < minLength) ||
    inputString.length > maxLength
  ) {
    error = `Invalid input. The text should be at least ${minLength} characters and should not exceed ${maxLength} characters.`;
    return error;
  } else if (inputString.length === 0) {
    error = "Field cannot be left blank.";
    return error;
  } else {
    return "";
  }
};

export const validateEmail = email => {
  let error = "";
  let emailValidator = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email.match(emailValidator)) {
    error = "Invalid email address.";
    return error;
  }
  return error;
};

export const validateAccount = input => {
  let error = "";
  let noWhiteSpace = /^\S+$/;
  let noSpecialChar = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g;
  if (!input.match(noWhiteSpace)) {
    error = "No white space is allowed.";
    return error;
  } else if (!input.match(noSpecialChar)) {
    error = "No special characters are allowed.";
    return error;
  }
  return error;
};

// NOTE: this function only validates text without
// special characters
export const validateCharacters = input => {
  let error = "";
  let noSpecialChar = /^[_A-z0-9]*((-|\s)*[_A-z0-9]*[^\u0000-\u007F]*)*$/g;
  if (!input.match(noSpecialChar)) {
    error = "No special characters are allowed.";
  }
  return error;
};

export const validatePhoneNumber = input => {
  let error = "";
  let numberValidator = /^\+?\d+$/g;
  if (input.length === 0) {
    error = "Field cannot be left blank.";
  } else if (!input.match(numberValidator)) {
    error = "Invalid input type. Field requires type of number.";
  } else if (input.length < 9 || input.length > 12) {
    error = "Number is either too long or too short";
  }
  return error;
};

export const validateUserInfo = (input, inputType, callback) => {
  let alert = "";
  let account = "account";
  let password = "password";
  let textInput = "text";
  let phoneNumber = "phoneNumber";
  let emailInput = "email";
  let maxLength = 50;
  let minLength = 3;
  let invalidInputLength = validateStringLength(input, minLength, maxLength);
  let invalidAccount = validateAccount(input);
  let invalidText = validateCharacters(input);
  let invalidPhoneNumber = validatePhoneNumber(input);
  let invalidEmail = validateEmail(input);

  switch (inputType) {
    case account:
      if (invalidInputLength) {
        alert = invalidInputLength;
      } else if (invalidAccount) {
        alert = invalidAccount;
      } else {
        alert = undefined;
      }
      callback(alert);
      break;
    case password:
      if (invalidInputLength) {
        alert = invalidInputLength;
      } else {
        alert = undefined;
      }
      callback(alert);
      break;
    case textInput:
      if (invalidInputLength) {
        alert = invalidInputLength;
      } else if (invalidText) {
        alert = invalidText;
      } else {
        alert = undefined;
      }
      callback(alert);
      break;
    case phoneNumber:
      if (invalidPhoneNumber) {
        alert = invalidPhoneNumber;
      } else {
        alert = undefined;
      }
      callback(alert);
      break;
    case emailInput:
      if (invalidInputLength) {
        alert = invalidInputLength;
      } else if (invalidEmail) {
        alert = invalidEmail;
      } else {
        alert = undefined;
      }
      callback(alert);
      break;
    default:
      if (invalidInputLength) {
        alert = invalidInputLength;
      } else {
        alert = undefined;
      }
      callback(alert);
      break;
  }
};
