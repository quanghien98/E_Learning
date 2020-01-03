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

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdding: false,
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      accountTypeOptions: ["HV", "GV"],
      maNhom: "GP09",
      email: ""
    };
  }

  setAdding = () => {
    const isAdding = true;
    this.setState({
      isAdding
    });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitChange = () => {};
  render() {
    const {
      isAdding,
      taiKhoan,
      matKhau,
      hoTen,
      soDT,
      maLoaiNguoiDung,
      accountTypeOptions,
      email
    } = this.state;
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
            <Button color="success" onClick={this.setAdding}>
              <Icon>add</Icon>
            </Button>
          ) : (
            btnGroupConfirmSave
          )}
          {/* <Button color="danger">
            <Icon>delete</Icon>
          </Button> */}
        </div>
      </CardTitle>
    );
    const cardBody = (
      <CardBody className="wrapper__body">
        <Form className="adminUsers__item__form">
          <FormGroup>
            <Label>Account: </Label>
            <Input value={taiKhoan || ""} />
          </FormGroup>
          <FormGroup>
            <Label>Password: </Label>
            <Input type="password" value={matKhau || ""} />
          </FormGroup>
          <FormGroup>
            <Label>Full name: </Label>
            <Input value={hoTen || ""} />
          </FormGroup>
          <FormGroup>
            <Label>Phone: </Label>
            <Input value={soDT || ""} />
          </FormGroup>
          <FormGroup>
            <Label>Account type ID : </Label>
            <Input type="select" onSelect>
              <option>{accountTypeOptions[0]}</option>
              <option>{accountTypeOptions[1]}</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Email: </Label>
            <Input type="email" value={email || ""} />
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
export default UserInfo;
