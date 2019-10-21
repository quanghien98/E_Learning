import React from "react";

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import Icon from "@material-ui/core/Icon";

const SortButton = ({ btnTitle, dropdowns }) => {
  const dropdownList = dropdowns.map(dropdown => (
    <li key={dropdown} className="sortBtn__dropdownList__dropdownItem">
      <span>{dropdown}</span>
    </li>
  ));

  return (
    <UncontrolledDropdown className="coursesByCategory__sortWrapper">
      <DropdownToggle>
        <div className="sortBtn">
          <Icon>arrow_drop_down_circle</Icon>
          <span>{btnTitle || "Sort"}</span>
        </div>
        <DropdownMenu className="sortBtn__dropdownList">
          {dropdownList}
        </DropdownMenu>
      </DropdownToggle>
    </UncontrolledDropdown>
  );
};

export default SortButton;
