import React from "react";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import Icon from "@material-ui/core/Icon";

const SearchBox = ({
  size,
  placeholder,
  handleChange,
  handleKeyDown,
  handleSubmitButton,
  value
}) => {
  return (
    <InputGroup size={size} className="customSearchBar">
      <Input
        type="search"
        className="customSearchBar__input"
        name="searchField"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
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
export default SearchBox;
