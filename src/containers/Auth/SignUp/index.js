import React, { Component } from "react";
// import { signIn } from "../../../actions/user/userActions";
// import { withFormik, Form, Field } from "formik";
// import Yup from "yup";

import Background from "../../../components/layouts/Background";

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
  width: 480,
  margin: "auto",
  marginTop: 48
};
const fieldStyle = {
  display: "block",
  width: "100%"
};

class SignUp extends Component {
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
    // let userData = this.state;
    // signIn(userData, () => {
    //   alert("Logged in");
    // });
  };

  render() {
    return (
      <Container>
        <Background />
        <Card className="signUp">
          <CardHeader>
            <CardTitle>
              <h5>Sign Up</h5>
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
                Sign Up
              </Button>
            </>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default SignUp;
