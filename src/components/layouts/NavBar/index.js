import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ProfileNav from "../../ProfileNav";

import siteLogo from "../../../images/logo_transparent.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  // NavItem,
  Container
} from "reactstrap";

import { NavLink } from "react-router-dom";
import SearchBox from "../../SearchBox";
import { getSearchField } from "../../../actions/course/courseActions";
import { getUserFullName } from "../../../actions/user/userActions";
import FormAlert from "../../FormAlert";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      searchBarSize: "xs",
      searchPlaceholder: "What are you curious about?",
      logStat: ""
    };
  }

  setLogStat = stat => {
    this.setState({
      logStat: stat
    });
    setTimeout(() => {
      this.setState({
        logStat: ""
      });
    }, 2500);
  };
  handleLoggedOutAlert = () => {
    if (this.state.logStat !== "") {
      return <FormAlert msg={this.state.logStat} />;
    }
    return <Fragment />;
  };
  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleSearchOnKeyDown = e => {
    [e.target.name] = e.target.value;
    if (e.key === "Enter" || e.keyCode === 13) {
      this.handleSearchOnSubmit();
    }
  };

  handleSearchOnSubmit = () => {
    const queryPath = `/courses/search/${this.props.searchField}`;
    this.props.searchField.length === 0
      ? window.location.reload()
      : this.props.history.push(queryPath);
  };

  componentDidMount() {
    if (this.props.isLoggedIn) {
      let userData = localStorage.getItem("currentUser");
      if (userData !== null) {
        this.props.getUserFullName();
      }
    } 
  }

  render() {
    const { handleSearchChange } = this.props;
    const currentRoute = "/admin";
    if (this.props.location.pathname === currentRoute) {
      return null;
    }
    return (
      <div>
        <Navbar light expand="md" className="draftNavBar">
          <Container fluid>
            <NavLink to="/" className="navbar-brand">
              <img
                alt="Codemy"
                src={siteLogo}
                style={{
                  width: "auto",
                  height: 50,
                  objectFit: "cover",
                  objectPosition: "center",
                  paddingRight: 16
                }}
              />
            </NavLink>
            <NavbarToggler onClick={this.toggleNavbar} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="draftNavBar__searchBar">
                <SearchBox
                  size={this.state.searchBarSize}
                  placeholder={this.state.searchPlaceholder}
                  handleChange={handleSearchChange}
                  handleKeyDown={this.handleSearchOnKeyDown}
                  handleSubmitButton={this.handleSearchOnSubmit}
                />
              </Nav>
              <Nav className="ml-auto" navbar>
                <ProfileNav
                  setLogStat={this.setLogStat}
                  // isLoggedIn={this.state.loggedIn}
                  userFullName={this.state.userFullName}
                />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        {this.state.logStat === "" ? (
          <Fragment />
        ) : (
          <FormAlert msg={this.state.logStat} />
        )}
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    searchField: state.searchField,
    isLoggedIn: state.userLoginStat
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleSearchChange: e => dispatch(getSearchField(e.target.value)),
    getUserFullName: () => dispatch(getUserFullName())
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(NavBar));
