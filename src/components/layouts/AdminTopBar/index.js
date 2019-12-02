import React from "react";

export const AdminTopBar = ({ currentTab }) => {
  return (
    <div className="admin__topBar">
      <h3>{currentTab}</h3>
    </div>
  );
};
