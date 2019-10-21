import React from "react";
import { withRouter } from "react-router-dom";

import { Col } from "reactstrap";
import Icon from "@material-ui/core/Icon";

const handleCategoryOnClick = (path, history) => {
  const categoryPath = `/courses/category/${path}`;
  history.push(categoryPath);
};

const CategoryItem = props => {
  const { path, history } = props;
  return (
    <Col
      xl="4"
      lg="6"
      md="6"
      sm="12"
      className="categories__itemWrapper"
      key={props.id}
    >
      <div
        className="categories__itemWrapper__categoryItem"
        onClick={() => handleCategoryOnClick(path, history)}
      >
        <Icon>{props.icon}</Icon>
        <span>{props.name}</span>
      </div>
    </Col>
  );
};

export default withRouter(CategoryItem);
