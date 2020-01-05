import React, { Component } from "react";
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

/* const cardStyle = {
  width: 480,
  margin: "auto",
  marginTop: 48
}; */
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
      alert: ""
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
    let userData = _.omit(this.state, ["alert"]);
    // console.log(userData);

    signUp(userData, res => {
      this.setState({
        alert: res
      });
      console.log(`Response: ${this.state.alert}`);
      setTimeout(() => {
        this.setState({
          alert: ""
        });
      }, 2500);
    });
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
                <Link to="/log-in">Login</Link>
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
