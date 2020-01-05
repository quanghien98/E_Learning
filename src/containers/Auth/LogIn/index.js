import React, { Component } from "react";
import { logIn, setUserLoginStat } from "../../../actions/user/userActions";
import { connect } from "react-redux";

import FormAlert from "../../../components/FormAlert";
import _ from "lodash";
import { withRouter, Link, Redirect } from "react-router-dom";
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
import Background from "../../../components/layouts/Background";

const fieldStyle = {
  display: "block",
  width: "100%"
};

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taiKhoan: "",
      matKhau: "",
      alert: ""
    };
  }

  /* --------------- methods --------------- */
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = () => {
    let userData = _.omit(this.state, ["alert"]);
    logIn(
      userData,
      res => {
        if (!_.isObject(res)) {
          this.setState({
            alert: res
          });
          this.props.setUserLoginStat(false);
        } else {
          this.props.setUserLoginStat(true);
          this.props.history.push("/");
        }
        // if(this.state.alert)
      },
      err => {
        "";
      }
    );
    /* setTimeout(() => {
      this.setState({
        alert: ""
      });
    }, 2500); */
  };

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <Container>
        <Background />
        <FormAlert msg={this.state.alert} />
        <Card className="logIn">
          <CardHeader>
            <CardTitle>
              <h5>Log-in</h5>
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
              <Button
                type="submit"
                className="logIn__form__btn"
                onClick={this.handleSubmit}
              >
                LOGIN
              </Button>
            </>
            <p>
              Haven't got an account?{" "}
              <span>
                <Link to="/sign-up">Sign Up</Link>
              </span>{" "}
            </p>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.userLoginStat
  }
};
const mapDispatchToProps = dispatch => {
  return {
    setUserLoginStat: stat => dispatch(setUserLoginStat(stat))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));
