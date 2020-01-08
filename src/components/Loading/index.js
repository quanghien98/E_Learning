import React from "react";
import { Spinner } from "reactstrap";

const Loading = () => {
  return (
    <div className="loading">
      <Spinner  color="light" />
    </div>
  );
};

export default Loading;
