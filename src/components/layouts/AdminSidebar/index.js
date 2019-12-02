import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { Button } from "reactstrap";
import Icon from "@material-ui/core/Icon";
import siteLogo from "../../../images/logo_transparent.png";
import siteMiniLogo from "../../../images/favicon.png";
import { navItems } from "../../../variables/adminNavItems";

class AdminSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShrunk: false,
      activeTab: "profile"
    };
  }

  /* --------------- methods --------------- */
  updateViewPortWidth = () => {
    let isShrunk = false;
    if (window.innerWidth > 480 && window.innerWidth <= 960) {
      isShrunk = true;
    } else {
      isShrunk = false;
    }
    this.setState({ isShrunk });
  };

  setActiveNav = name => {
    this.setState({
      activeTab: name
    });
  };

  handleShrink = () => {
    let isShrunk = !this.state.isShrunk;
    this.setState({
      isShrunk
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateViewPortWidth);
  }
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateViewPortWidth);
  };
  render() {
    const { isShrunk } = this.state;
    return (
      <aside className={isShrunk ? "admin__sidebar shrunk" : "admin__sidebar"}>
        <header className="admin__sidebar__header">
          <div>
            {isShrunk ? (
              <Link to="/">
                <img alt="Codemy" src={siteMiniLogo} />
              </Link>
            ) : (
              <Link to="/">
                <img alt="Codemy" src={siteLogo} />
              </Link>
            )}
          </div>
        </header>

        <div className="admin__sidebar__menu">
          {window.innerWidth <= 960 ? (
            <Button className="menuToggleBtn" onClick={this.handleShrink}>
              <Icon>menu_open</Icon>
            </Button>
          ) : (
            <Fragment />
          )}
          <div className="menuWrapper">
            {navItems.map(item => (
              <div
                key={item.id}
                className={
                  this.state.activeTab === item.name
                    ? "sideNavItem active"
                    : "sideNavItem"
                }
                onClick={() =>
                  this.setActiveNav(item.name, this.props.activeTab(item.name))
                }
              >
                <Button className="sideNavItem__btn">
                  <Icon className="sideNavBtn__icon">{item.icon}</Icon>
                </Button>
                <li className="sideNavItem__navLink">{item.name}</li>
              </div>
            ))}
          </div>
        </div>
      </aside>
    );
  }
}

export default withRouter(AdminSidebar);
