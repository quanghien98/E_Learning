import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../../actions/user/userActions";
import _ from "lodash";
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
import FormAlert from "../../../components/FormAlert";
import Loading from "../../../components/Loading";

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
      isLoading: false
    };
  }

  /* --------------- methods --------------- */
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  alert = () => {
    return <FormAlert msg={this.state.alert} />;
  };

  handleSubmit = () => {
    let userData = _.omit(this.state, ["alert", "isLoading"]);

    signUp(userData, res => {
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
              <FormGroup>
                <Label for="matKhau">Full Name:</Label>
                <Input
                  style={fieldStyle}
                  type="text"
                  name="hoTen"
                  id="hoTen"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="matKhau">Phone:</Label>
                <Input
                  style={fieldStyle}
                  type="text"
                  name="soDT"
                  id="soDT"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="matKhau">Email:</Label>
                <Input
                  style={fieldStyle}
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <Button
                type="submit"
                className="signUp__form__btn"
                onClick={this.handleSubmit}
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
