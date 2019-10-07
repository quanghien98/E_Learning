import React, { Component } from "react";
import _ from "lodash";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import Icon from "@material-ui/core/Icon";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: []
    };
  }

  handleSearchFieldChange = e => {
    [e.target.name] = e.target.value;
    console.log(e.target.value);
    this.setState({
      searchField: e.target.value
    });
  };

  handleSearchFieldChangeOnPressingEnter = e => {
    [e.target.name] = e.target.value;
    if ((_.isEmpty(e.target.value) && e.key === "Enter") || e.keyCode === 13) {
      alert(e.target.value);
    }
    console.log("err");
    
  };

  handleSearchFieldChangeOnClick = e => {
    alert(this.state.searchField);
  };

  render() {
    return (
      <InputGroup size="lg" className="customSearchBar">
        <Input
          className="customSearchBar__input"
          name="searchField"
          placeholder="Search for your favorite tech courses"
          onChange={this.handleSearchFieldChange}
          onKeyDown={this.handleSearchFieldChangeOnPressingEnter}
        />
        <InputGroupAddon addonType="append">
          <Button
            className="customSearchBar__btn d-flex align-items-center"
            onClick={this.handleSearchFieldChangeOnClick}
          >
            <Icon>search</Icon>
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}
