import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  NavItem,
  UncontrolledPopover,
  PopoverBody,
  Button,
  PopoverHeader
} from "reactstrap";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { setUserLoginStat } from "../../actions/user/userActions";
export class ProfileNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userFullName: ""
    };
  }

  handleLogInStat = () => {
    let userData = localStorage.getItem("currentUser");
    let loggedIn;
    if (userData !== null && this.props.isLoggedIn === true) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }

    this.props.setLoginStat(loggedIn);
  };

  logOut = () => {
    localStorage.clear();
    this.props.setLoginStat(false);
  };

  navigateToLogIn = () => {
    this.props.history.push("/log-in");
  };

  navigateToSignUp = () => {
    this.props.history.push("/sign-up");
  };

  componentDidMount() {
    this.handleLogInStat();

    // this.redirect();
  }
  static getDerivedStateFromProps(props, state) {
    if (props.userFullName !== state.userFullName) {
      return {
        userFullName: props.userFullName
      };
    } else {
      return { ...state };
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <NavItem className="profileNav__icon">
          <Icon id="PopoverLegacy">account_circle</Icon>
          <UncontrolledPopover
            className="profileNav__popover"
            trigger="legacy"
            placement="bottom"
            target="PopoverLegacy"
          >
            <PopoverHeader className="profileNav__popoverHeader">
              <Icon className="profileNav__popoverHeader__icon">
                account_circle
              </Icon>
              <span>Logged in as &#160;</span>
              <span className="profileNav__popoverHeader__userName">
                {this.props.userFullName}
              </span>
            </PopoverHeader>
            <PopoverBody className="profileNav__popoverBody">
              Profile
            </PopoverBody>
            <PopoverBody
              className="profileNav__popoverBody"
              onClick={this.logOut}
            >
              Log out
            </PopoverBody>
          </UncontrolledPopover>
        </NavItem>
      );
    }
    return (
      <div className="profileNav">
        <NavItem>
          <Button
            className="nav-link profileNav__btn__logIn"
            onClick={this.navigateToLogIn}
          >
            Log In
          </Button>
        </NavItem>
        <NavItem>
          <Button
            className="nav-link profileNav__btn__signUp"
            onClick={this.navigateToSignUp}
          >
            Sign Up
          </Button>
        </NavItem>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.userLoginStat,
    userFullName: state.userFullName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLoginStat: stat => dispatch(setUserLoginStat(stat))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileNav)
);
