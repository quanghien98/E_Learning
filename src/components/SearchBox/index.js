import React from "react";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import Icon from "@material-ui/core/Icon";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const handleSearchBoxValueDisplay = (props, url) => {
  const query = _.last(url.split("/"));
  if (query) {
    return props.searchField;
  }
};

const SearchBox = ({
  size,
  placeholder,
  handleChange,
  handleKeyDown,
  handleSubmitButton,
  ...props
}) => {
  const url = props.history.location.pathname;
  const value = handleSearchBoxValueDisplay(props, url);

  return (
    <InputGroup size={size} className="customSearchBar">
      <Input
        type="search"
        className="customSearchBar__input"
        name="searchField"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        defaultValue={value}
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
