import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import Icon from "@material-ui/core/Icon";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: []
    };
  }

  handleSearchFieldChange = e => {
    [e.target.name] = e.target.value;
    this.setState({
      searchField: e.target.value
    });
  };

  handleSearchOnKeyDown = e => {
    [e.target.name] = e.target.value;
    if (e.key === "Enter" || e.keyCode === 13) {
      this.handleSearchOnSubmit();
    }
  };

  handleSearchOnSubmit = () => {
    const queryPath = `/courses/search/${this.state.searchField}`;
    this.state.searchField.length === 0
      ? this.props.history.push("/")
      : this.props.history.push(queryPath);
  };

  getSearchQuery = () => {
    const url = this.props.history.location.pathname;
    const query = _.last(url.split("/"));
    return query;
  };

  render() {
    const { searchBarSize, searchPlaceholder } = this.props;
    const query = this.getSearchQuery();
    return (
      <InputGroup size={searchBarSize} className="customSearchBar">
        <Input
          type="search"
          className="customSearchBar__input"
          name="searchField"
          placeholder={searchPlaceholder}
          onChange={this.handleSearchFieldChange}
          onKeyDown={this.handleSearchOnKeyDown}
        />
        <InputGroupAddon addonType="append">
          <Button
            className="btn customSearchBar__btn d-flex align-items-center"
            onClick={this.handleSearchOnSubmit}
          >
            <Icon>search</Icon>
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

export default withRouter(SearchBar);
