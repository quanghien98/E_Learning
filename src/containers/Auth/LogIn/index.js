import React from "react";

import { withFormik, Form, Field } from "formik";
// import Yup from "yup";

import {
  Container,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
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

const LogIn = () => {
  return (
    <Container>
      <Card style={cardStyle}>
        <CardHeader>
          <CardTitle>
            <h5>Log In</h5>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="userName">Username:</Label>
              <Field
                style={fieldStyle}
                type="text"
                name="userName"
                id="userName"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password:</Label>
              <Field
                style={fieldStyle}
                type="password"
                name="password"
                id="password"
              />
            </FormGroup>
            <Button type="submit" color="success">
              Log In
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      userName: "",
      password: ""
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(LogIn);
export default FormikApp;
