import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import AdminSidebar from "../components/layouts/AdminSidebar";
import Enrollment from "../containers/Admin/Enrollment";
import { AdminTopBar } from "../components/layouts/AdminTopBar";
import AdminProfile from "../containers/Admin/AdminProfile";
import CourseManagement from "../containers/Admin/CourseManagement";
import UserManagement from "../containers/Admin/UserManagement";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "profile"
    };
  }

  getActiveTab = name => {
    this.setState({
      activeTab: name
    });
  };
  render() {
    const currentTab = () => {
      if (this.state.activeTab === "enrollment") {
        return <Enrollment />;
      } else if (this.state.activeTab === "profile") {
        return <AdminProfile />;
      } else if (this.state.activeTab === "courses") {
        return <CourseManagement />;
      }
      return <UserManagement />;
    };

    return (
      <div className="admin">
        <AdminSidebar activeTab={this.getActiveTab} />
        <main className="admin__main">
          <AdminTopBar currentTab={this.state.activeTab} />
          {currentTab()}
        </main>
        <footer className="admin__footer">footer</footer>
      </div>
    );
  }
}

export default Admin;
