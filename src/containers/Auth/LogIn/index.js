import React, { Component, Fragment } from "react";
import {
  logIn,
  setUserLoginStat,
  getUserFullName
} from "../../../actions/user/userActions";
import { connect } from "react-redux";

import FormAlert from "../../../components/FormAlert";
import _ from "lodash";
import { withRouter, Link } from "react-router-dom";
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
import Loading from "../../../components/Loading";

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
      alert: "",
      isLoading: false
    };
  }

  /* --------------- methods --------------- */
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = () => {
    let userData = _.omit(this.state, ["alert", "isLoading"]);
    logIn(userData, res => {
      if (!_.isObject(res)) {
        this.setState({
          alert: res
        });
        this.props.setUserLoginStat(false);
        setTimeout(() => {
          this.setState({
            alert: ""
          });
        }, 2500);
        // console.log(`Response: ${this.state.alert}`);
      } else {
        let path = "/";
        let loadingDelay = 1000;
        this.props.setUserLoginStat(true);
        this.props.getUserFullName();
        this.setLoading(loadingDelay, path);
      }
    });
  };

  alert = () => {
    return <FormAlert msg={this.state.alert} />;
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
  handleDelayedDirectToSignUp = e => {
    e.preventDefault();
    let delay = 700;
    let path = "/sign-up";
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
                LOG IN
              </Button>
            </>
            <p>
              Haven't got an account?{" "}
              <span>
                <Link to="/sign-up" onClick={this.handleDelayedDirectToSignUp}>
                  Sign Up
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
const mapDispatchToProps = dispatch => {
  return {
    setUserLoginStat: stat => dispatch(setUserLoginStat(stat)),
    getUserFullName: () => dispatch(getUserFullName())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));
