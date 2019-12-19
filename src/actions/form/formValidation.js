export const validateUrl = urlString => {
  let error = "";
  let urlValidator = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (!urlString.match(urlValidator)) {
    error = "Invalid URL.";
    return error;
  }
  return error;
};

export const validateStringLength = inputString => {
  let error = "";
  if (inputString.length < 3 || inputString.length > 200) {
    error = "Invalid input. The text is either too short or too long";
    return error;
  } else if (inputString.length === 0) {
    error = "Field cannot be left blank";
    return error;
  }
};

export const validateId = id => {
  let error = "";
  let idValidator = /[^\w-]/g;
  if (id.match(idValidator)) {
    error = `Invalid ID. ID must not contain any white space and non-word characters except hyphen (-) and/or underscore(_)`;
    return error;
  }
  return error;
};

export const validateEmail = email => {
  let error = "";
  /* let oriEmailValidator = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; */

  let emailValidator = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email.match(emailValidator)) {
    error = "Invalid email address.";
    return error;
  }
  return error;
};
