import React, { Component } from "react";

import {
  Card,
  CardTitle,
  CardBody
  // Button
} from "reactstrap";

class UserRecords extends Component {
  render() {
    return (
      <Card className="item__wrapper">
        <CardTitle className="wrapper__title">user records</CardTitle>
        <CardBody className="wrapper__body"></CardBody>
      </Card>
    );
  }
}
export default UserRecords;
