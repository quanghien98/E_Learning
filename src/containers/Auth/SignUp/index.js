import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { signUp } from "../../../actions/user/userActions";
import { validateUserInfo } from "../../../actions/form/formValidation";
import _ from "lodash";
import Background from "../../../components/layouts/Background";
import FormAlert from "../../../components/FormAlert";
import Loading from "../../../components/Loading";
import {
  Container,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Input,
  FormFeedback,
  Label,
  Button
} from "reactstrap";

const fieldStyle = {
  display: "block",
  width: "100%"
};
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "GP09",
      email: "",
      alert: "",
      isLoading: false,
      accountError: undefined,
      passwordError: undefined,
      nameError: undefined,
      phoneError: undefined,
      emailError: undefined,
      isCompleted: undefined
    };
  }

  /* --------------- methods --------------- */
  // form validation
  validateUserAccount = () => {
    let inputType = "account";
    validateUserInfo(this.state.taiKhoan, inputType, alert => {
      this.setState({
        accountError: alert
      });
    });
  };

  validatePassword = () => {
    let inputType = "password";
    validateUserInfo(this.state.matKhau, inputType, alert => {
      this.setState({
        passwordError: alert
      });
    });
  };

  validateUserFullName = () => {
    let inputType = "text";
    validateUserInfo(this.state.hoTen, inputType, alert => {
      this.setState({
        nameError: alert
      });
    });
  };

  validatePhoneNum = () => {
    let inputType = "phoneNumber";
    validateUserInfo(this.state.soDT, inputType, alert => {
      this.setState({
        phoneError: alert
      });
    });
  };

  validateEmail = () => {
    let inputType = "email";
    validateUserInfo(this.state.email, inputType, alert => {
      this.setState({
        emailError: alert
      });
    });
  };

  handleFormCompletion = () => {
    let errors = [];
    let values = [];
    values = Object.values(_.omit(this.state, ["alert"]));
    errors = Object.values(
      _.omit(this.state, [
        "taiKhoan",
        "matKhau",
        "hoTen",
        "soDT",
        "maNhom",
        "email",
        "alert",
        "isLoading",
        "isCompleted"
      ])
    );
    let isNotFilled = values.some(val => val === "");
    let noErrors = errors.every(val => val === undefined);
    // console.log(isNotFilled, noErrors);
    // console.log(values);
    if (isNotFilled === false && noErrors) {
      this.setState({
        isCompleted: true
      });
    } else {
      this.setState({
        isCompleted: false
      });
    }
  };
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  alert = () => {
    return <FormAlert msg={this.state.alert} />;
  };
  handleSubmit = () => {
    let userData = _.omit(this.state, [
      "alert",
      "isLoading",
      "accountError",
      "passwordError",
      "nameError",
      "phoneError",
      "emailError"
    ]);
    signUp(userData, res => {
      if (!_.isObject(res)) {
        this.setState({
          alert: res
        });
        setTimeout(() => {
          this.setState({
            alert: ""
          });
        }, 2500);
      } else {
        let path = "/log-in";
        let loadingDelay = 1000;
        this.setLoading(loadingDelay, path);
      }
    });
  };
  setLoading = (time, path) => {
    let isLoading = !this.state.isLoading;
    this.setState({
      isLoading
    });
    setTimeout(() => {
      this.setState({
        isLoading
      });
      this.props.history.push(path);
    }, time);
  };
  handleDelayedDirectToLogIn = e => {
    e.preventDefault();
    let delay = 700;
    let path = "/log-in";
    this.setLoading(delay, path);
  };

  /* --------------------------------------- */
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <Container>
        {this.state.isLoading ? <Loading /> : <Fragment />}

        <Background />
        {this.state.alert === "" ? <></> : this.alert(this.state.alert)}
        <Card className="signUp">
          <CardHeader>
            <CardTitle>
              <h5>Sign-up</h5>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <>
              <FormGroup>
                <Label for="taiKhoan">Account:</Label>
                <Input
                  invalid={this.state.accountError === undefined ? false : true}
                  style={fieldStyle}
                  type="text"
                  name="taiKhoan"
                  id="taiKhoan"
                  onChange={this.handleInputChange}
                  onBlur={this.validateUserAccount}
                  onKeyDown={this.handleFormCompletion}
                  onMouseDown={this.handleFormCompletion}
                />
                <FormFeedback invalid="true">
                  {this.state.accountError}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="matKhau">Password:</Label>
                <Input
                  invalid={
                    this.state.passwordError === undefined ? false : true
                  }
                  style={fieldStyle}
                  type="password"
                  name="matKhau"
                  id="matKhau"
                  onChange={this.handleInputChange}
                  onBlur={this.validatePassword}
                  onPointerLeave={this.handleFormCompletion}
                />
                <FormFeedback invalid="true">
                  {this.state.passwordError}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="hoTen">Full Name:</Label>
                <Input
                  invalid={this.state.nameError === undefined ? false : true}
                  style={fieldStyle}
                  type="text"
                  name="hoTen"
                  id="hoTen"
                  onChange={this.handleInputChange}
                  onBlur={this.validateUserFullName}
                  onPointerLeave={this.handleFormCompletion}
                />
                <FormFeedback invalid="true">
                  {this.state.nameError}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="soDT">Phone:</Label>
                <Input
                  invalid={this.state.phoneError === undefined ? false : true}
                  style={fieldStyle}
                  type="text"
                  name="soDT"
                  id="soDT"
                  onChange={this.handleInputChange}
                  onBlur={this.validatePhoneNum}
                  onPointerLeave={this.handleFormCompletion}
                />
                <FormFeedback invalid="true">
                  {this.state.phoneError}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                  invalid={this.state.emailError === undefined ? false : true}
                  style={fieldStyle}
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.handleInputChange}
                  onBlur={this.validateEmail}
                  onPointerLeave={this.handleFormCompletion}
                  onTouchEnd={this.handleFormCompletion}
                />
                <FormFeedback invalid="true">
                  {this.state.emailError}
                </FormFeedback>
              </FormGroup>
              <Button
                disabled={this.state.isCompleted ? false : true}
                type="submit"
                className="signUp__form__btn"
                onClick={this.handleSubmit}
                onPointerEnter={this.handleFormCompletion}
              >
                SIGN UP
              </Button>
            </>
            <p>
              Already got an account?{" "}
              <span>
                <Link to="/log-in" onClick={this.handleDelayedDirectToLogIn}>
                  Login
                </Link>
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
  };
};
export default withRouter(connect(mapStateToProps)(SignUp));
