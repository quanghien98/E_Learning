import React, { Component } from "react";
import _ from "lodash";
import { withRouter, Link, Redirect } from "react-router-dom";
import { NavItem, UncontrolledPopover, PopoverBody } from "reactstrap";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { setUserLoginStat } from "../../actions/user/userActions";
export class ProfileNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
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
    // this.setState({
    //   loggedIn: false
    // });
    this.props.setLoginStat(false);
  };

 

  componentDidMount() {
    this.handleLogInStat();
    this.redirect();
  }
  /*  static getDerivedStateFromProps(props, state) {
    if (props.isLoggedIn !== state.loggedIn) {
      return {
        loggedIn: props.isLoggedIn
      };
    }
    return null;
  } */

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
          <Link className="nav-link" to="/log-in/">
            Login
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/sign-up">
            Sign Up
          </Link>
        </NavItem>
      </div>
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
    setLoginStat: stat => dispatch(setUserLoginStat(stat))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileNav)
);
