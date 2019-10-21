import React from "react";

import { Row, Col, CardImg } from "reactstrap";

const ItemCardStretch = ({ courseTitle, img, description }) => {
  return (
    <div className="itemCardStretch">
      <Row className="itemCardStretch__card">
        <Col
          xl="3"
          lg="3"
          md="3"
          sm="4"
          xs="4"
          className="itemCardStretch__card__img"
        >
          <CardImg src={img} />
        </Col>
        <Col
          xl="9"
          lg="9"
          md="9"
          sm="8"
          xs="8"
          className="itemCardStretch__card__details"
        >
          <h6>{courseTitle}</h6>
          <p>{description}</p>
          <span>Rating</span>

        </Col>
      </Row>
    </div>
  );
};

export default ItemCardStretch;
