import React, { Component } from "react";

import Icon from "@material-ui/core/Icon";
import {
  Card,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback

  // Button
} from "reactstrap";

class UserInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdding: false
    };
  }

  render() {
    const { isAdding } = this.state;

    const btnGroupConfirmSave = (
      <>
        <Button
          color="success"
          // onClick={this.submitChange}
        >
          <Icon>save</Icon>
        </Button>
        <Button
          color="warning"
          // onClick={this.cancelEditing}
        >
          <Icon>cancel</Icon>
        </Button>
      </>
    );

    const cardHeader = (
      <CardTitle className="wrapper__title">
        <div>
          <span>Add New User</span>
        </div>
        <div>
          {!isAdding ? (
            <Button color="success">
              <Icon>add</Icon>
            </Button>
          ) : (
            <></>
          )}
          <Button color="danger">
            <Icon>delete</Icon>
          </Button>
        </div>
      </CardTitle>
    );
    const cardBody = (
      <CardBody className="wrapper__body">
        <Form className="adminUsers__item__form">
          <FormGroup>
            <Label>Account: </Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Label>Password: </Label>
            <Input type="password" />
          </FormGroup>
          <FormGroup>
            <Label>Full name: </Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Label>Phone: </Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Label>Email: </Label>
            <Input type="email" />
          </FormGroup>
        </Form>
      </CardBody>
    );
    return (
      <Card className="item__wrapper">
        {cardHeader}
        {cardBody}
      </Card>
    );
  }
}
export default UserInfoForm;
