import React, { Component } from "react";
import { signIn } from "../../../actions/user/userActions";
// import { withFormik, Form, Field } from "formik";
// import Yup from "yup";

import {
  Container,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Input,
  // FormFeedback,
  Label,
  // Input,
  Button
} from "reactstrap";

const cardStyle = {
  marginTop: 48
};
const fieldStyle = {
  display: "block",
  width: "100%"
};

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taiKhoan: "",
      matKhau: ""
    };
  }

  /* --------------- methods --------------- */
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = () => {
    let userData = this.state;
    signIn(userData, () => {
      alert("Logged in");
    });
  };

  render() {
    return (
      <Container>
        <Card style={cardStyle}>
          <CardHeader>
            <CardTitle>
              <h5>Log In</h5>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <>
              <FormGroup>
                <Label for="taiKhoan">Account:</Label>
                <Input
                  style={fieldStyle}
                  type="text"
                  name="taiKhoan"
                  id="taiKhoan"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="matKhau">Password:</Label>
                <Input
                  style={fieldStyle}
                  type="password"
                  name="matKhau"
                  id="matKhau"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <Button type="submit" color="success" onClick={this.handleSubmit}>
                Log In
              </Button>
            </>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default LogIn;
