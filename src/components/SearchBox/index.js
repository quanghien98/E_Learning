import React from "react";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import Icon from "@material-ui/core/Icon";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const handleSearchBoxValueDisplay = (props, url) => {
  const query = _.last(url.split("/"));
  const searchPathname = `/courses/search/${query}`;
  if (url === searchPathname) {
    return props.searchField;
  }
  return "";
};

const SearchBox = ({
  size,
  placeholder,
  handleChange,
  handleKeyDown,
  handleSubmitButton,
  ...props
}) => {
  const url = props.location.pathname;
  const searchValue = handleSearchBoxValueDisplay(props, url);

  return (
    <InputGroup size={size} className="customSearchBar">
      <Input
        type="search"
        className="customSearchBar__input"
        name="searchField"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        defaultValue={searchValue}
      />
      <InputGroupAddon addonType="append">
        <Button
          className="btn customSearchBar__btn d-flex align-items-center"
          onClick={handleSubmitButton}
        >
          <Icon>search</Icon>
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};
export default withRouter(connect(mapStateToProps)(SearchBox));
