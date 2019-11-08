/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import { NavLink } from "react-router-dom";
import SearchBox from "../../SearchBox";
// import SearchBar from "../../SearchBar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSearchField } from "../../../actions/course/courseActions";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      searchBarSize: "xs",
      searchPlaceholder: "What are you curious about?"
    };
  }

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

  render() {
    const { handleSearchChange } = this.props;
    return (
      <Navbar light expand="md" className="draftNavBar">
        <Container fluid>
          <NavLink to="/" className="navbar-brand">
            Codemy
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
              <NavItem>
                <NavLink className="nav-link" to="/course/">
                  A course
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/category">
                  Category
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStatetoProps = state => {
  return {
    searchField: state.searchField
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleSearchChange: e => dispatch(getSearchField(e.target.value))
  };
};

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(NavBar)
);
