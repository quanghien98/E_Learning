import React from "react";
import { Alert } from "reactstrap";

const setAlertStat = stat => {
  let color = "";
  if (stat === "success") {
    color = "success";
  } else if (stat === "error") {
    color = "danger";
  }
  return color;
};

const setAlertBody = (alertMsg, statColor) => {
  return (
    <Alert
      style={{
        position: "absolute",
        top: 60,
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: 30
      }}
      color={statColor}
    >
      {alertMsg}
    </Alert>
  );
};
const callAlert = message => {
  let alertMsg = "";
  let stat = "";
  switch (message) {
    case "Email đã tồn tại!":
      alertMsg =
        "Email address has been used! Please use another email address";
      stat = setAlertStat("error");
      return setAlertBody(alertMsg, stat);
    case "Tài khoản hoặc mật khẩu không đúng!":
      alertMsg = "Incorrect account or password!";
      stat = setAlertStat("error");
      return setAlertBody(alertMsg, stat);
    case "Tài khoản đã tồn tại!":
      alertMsg = "This account has been used! Please pick a different account.";
      stat = setAlertStat("error");
      return setAlertBody(alertMsg, stat);
    default:
      alertMsg = "Something went wrong!";
      stat = setAlertStat("error");
      return setAlertBody(alertMsg, stat);
  }
};

const FormAlert = ({ msg }) => {
  return <>{callAlert(msg)}</>;
};

export default FormAlert;
