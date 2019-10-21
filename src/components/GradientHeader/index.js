import React from "react";

import { Container } from "reactstrap";

const GradientHeader = ({ headerContent }) => {
  return (
    <div className="gradientHeader">
      <Container>
        <h2>{headerContent} courses</h2>
      </Container>
    </div>
  );
};

export default GradientHeader;
