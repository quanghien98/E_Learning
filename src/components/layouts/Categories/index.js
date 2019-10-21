import React from "react";

import { withRouter } from "react-router-dom";

import { Container, Row } from "reactstrap";

import CategoryItem from "../../CategoryItem";

import { categories } from "../../../variables/categories";

const CategoryList = props => {
  return (
    <Container fluid className="categories">
      <Row>
        {categories.map(item => {
          return (
            <CategoryItem
              key={item.id}
              icon={item.icon}
              name={item.name}
              id={item.id}
              path={item.path}
              categoryId={item.categoryId}
              history={props.history}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default withRouter(CategoryList);
