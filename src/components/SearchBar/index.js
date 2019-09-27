import React, { Component } from "react";

import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import Icon from "@material-ui/core/Icon";

export default class SearchBar extends Component {
  render() {
    return (
      <InputGroup size="lg" className="customSearchBar">
        <Input
          className="customSearchBar__input"
          placeholder="Search for your favorite tech courses"
        />
        <InputGroupAddon addonType="append">
          <Button className="customSearchBar__btn d-flex align-items-center">
            <Icon>search</Icon>
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}
