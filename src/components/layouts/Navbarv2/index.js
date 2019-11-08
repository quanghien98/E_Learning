import React, { useState } from "react";
import LoginModal from "../../LoginModal";
import SignupModal from "../../SignupModal";

// export default class Navbarv2 extends Component {

const Navbarv2 = () => {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [signupModalShow, setSignupModalShow] = useState(false);
  return (
    <div className="navbar-v2 container-fluid">
      <div className="navbar-wrapper container-fluid">
        <div className="navbar-body">
          <div className="navbar-inner d-flex">
            <div className="navbar-content-left">
              <div className="navbar-content-left-wrapper">
                <div className="navbar-content-left-wrapper-inner">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse">
                      <a className="navbar-brand" href="#">
                        <img
                          className="udemy-logo"
                          src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                          alt="Udemy"
                          width={110}
                          height={32}
                          data-purpose="udemy-brand-logo"
                        />
                      </a>
                      <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-th" /> Categories
                          </a>
                          <ul
                            className="dropdown-menu first-lvl-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <li className="menu__link">
                              <a className="dropdown-item" href="#">
                                <span
                                  data-purpose="menu-icon"
                                  className="menu__icon udi udi-design"
                                />
                                <span className="fx">Design</span>
                                <span
                                  data-purpose="menu-item-arrow"
                                  className="menu__arrow udi udi-next"
                                />
                              </a>
                            </li>
                            <li className="menu__link">
                              <a className="dropdown-item" href="#">
                                <span
                                  data-purpose="menu-icon"
                                  className="menu__icon udi udi-hardware"
                                />
                                <span className="fx">Hardware</span>
                                <span
                                  data-purpose="menu-item-arrow"
                                  className="menu__arrow udi udi-next"
                                />
                              </a>
                            </li>
                            <li className="dropdown-submenu menu__link">
                              <a
                                className="dropdown-item dropdown-toggle"
                                href="#"
                              >
                                <span
                                  data-purpose="menu-icon"
                                  className="menu__icon udi udi-development"
                                />
                                <span className="fx">Development</span>
                                <span
                                  data-purpose="menu-item-arrow"
                                  className="menu__arrow udi udi-next"
                                />
                              </a>
                              <ul className="dropdown-menu second-lvl-menu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Mobile
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Full-Stack
                                  </a>
                                </li>
                                <li className="dropdown-submenu">
                                  <a
                                    className="dropdown-item dropdown-toggle"
                                    href="#"
                                  >
                                    Front-End
                                  </a>
                                  <ul className="dropdown-menu third-lvl-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        HTML &amp; CSS Basics
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Angular &amp; React
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a
                                    className="dropdown-item dropdown-toggle"
                                    href="#"
                                  >
                                    Back-End
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Java
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        NodeJs
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="menu__link">
                              <a className="dropdown-item" href="#">
                                <span
                                  data-purpose="menu-icon"
                                  className="menu__icon udi udi-design"
                                />
                                <span className="fx">Design</span>
                                <span
                                  data-purpose="menu-item-arrow"
                                  className="menu__arrow udi udi-next"
                                />
                              </a>
                            </li>
                            <li className="menu__link">
                              <a className="dropdown-item" href="#">
                                <span
                                  data-purpose="menu-icon"
                                  className="menu__icon udi udi-finance"
                                />
                                <span className="fx">
                                  Finance &amp; Accounting
                                </span>
                                <span
                                  data-purpose="menu-item-arrow"
                                  className="menu__arrow udi udi-next"
                                />
                              </a>
                            </li>
                            <li className="dropdown-submenu menu__link">
                              <a
                                className="dropdown-item dropdown-toggle"
                                href="#"
                              >
                                <span
                                  data-purpose="menu-icon"
                                  className="menu__icon udi udi-office-productivity"
                                />
                                <span className="fx">Office Productivity</span>
                                <span
                                  data-purpose="menu-item-arrow"
                                  className="menu__arrow udi udi-next"
                                />
                              </a>
                              <ul className="dropdown-menu second-lvl-menu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Submenu
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Submenu0
                                  </a>
                                </li>
                                <li className="dropdown-submenu">
                                  <a
                                    className="dropdown-item dropdown-toggle"
                                    href="#"
                                  >
                                    Submenu 1
                                  </a>
                                  <ul className="dropdown-menu third-lvl-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu1
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu1
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a
                                    className="dropdown-item dropdown-toggle"
                                    href="#"
                                  >
                                    Submenu 2
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu2
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu2
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="menu__link">
                              <a className="dropdown-item" href="#">
                                <span
                                  data-purpose="menu-icon"
                                  className="menu__icon udi udi-personal-development"
                                />
                                <span className="fx">Personal Development</span>
                                <span
                                  data-purpose="menu-item-arrow"
                                  className="menu__arrow udi udi-next"
                                />
                              </a>
                            </li>
                            <li className="menu__link">
                              <a className="dropdown-item" href="#">
                                <span
                                  data-purpose="menu-icon"
                                  className="menu__icon udi udi-marketing"
                                />
                                <span className="fx">Marketing</span>
                                <span
                                  data-purpose="menu-item-arrow"
                                  className="menu__arrow udi udi-next"
                                />
                              </a>
                            </li>
                            <li className="dropdown-submenu menu__link">
                              <a
                                className="dropdown-item dropdown-toggle"
                                href="#"
                              >
                                <span
                                  data-purpose="menu-icon"
                                  className="menu__icon udi udi-lifestyle"
                                />
                                <span className="fx">Lifestyle</span>
                                <span
                                  data-purpose="menu-item-arrow"
                                  className="menu__arrow udi udi-next"
                                />
                              </a>
                              <ul className="dropdown-menu second-lvl-menu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Submenu
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Submenu0
                                  </a>
                                </li>
                                <li className="dropdown-submenu">
                                  <a
                                    className="dropdown-item dropdown-toggle"
                                    href="#"
                                  >
                                    Submenu 1
                                  </a>
                                  <ul className="dropdown-menu third-lvl-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu1
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu1
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a
                                    className="dropdown-item dropdown-toggle"
                                    href="#"
                                  >
                                    Submenu 2
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu2
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu2
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="menu__link">
                              <a className="dropdown-item" href="#">
                                <span
                                  data-purpose="menu-icon"
                                  className="menu__icon udi udi-photography"
                                />
                                <span className="fx">Photography</span>
                                <span
                                  data-purpose="menu-item-arrow"
                                  className="menu__arrow udi udi-next"
                                />
                              </a>
                            </li>
                            <li className="menu__link">
                              <a className="dropdown-item" href="#">
                                <span
                                  data-purpose="menu-icon"
                                  className="menu__icon udi udi-health-and-fitness"
                                />
                                <span className="fx">Health &amp; Fitness</span>
                                <span
                                  data-purpose="menu-item-arrow"
                                  className="menu__arrow udi udi-next"
                                />
                              </a>
                            </li>
                            <li className="dropdown-submenu menu__link">
                              <a
                                className="dropdown-item dropdown-toggle"
                                href="#"
                              >
                                <span
                                  data-purpose="menu-icon"
                                  className="menu__icon udi udi-music"
                                />
                                <span className="fx">Mudic</span>
                                <span
                                  data-purpose="menu-item-arrow"
                                  className="menu__arrow udi udi-next"
                                />
                              </a>
                              <ul className="dropdown-menu second-lvl-menu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Submenu
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Submenu0
                                  </a>
                                </li>
                                <li className="dropdown-submenu">
                                  <a
                                    className="dropdown-item dropdown-toggle"
                                    href="#"
                                  >
                                    Submenu 1
                                  </a>
                                  <ul className="dropdown-menu third-lvl-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu1
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu1
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a
                                    className="dropdown-item dropdown-toggle"
                                    href="#"
                                  >
                                    Submenu 2
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu2
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu2
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu menu__link">
                              <a
                                className="dropdown-item dropdown-toggle"
                                href="#"
                              >
                                <span
                                  data-purpose="menu-icon"
                                  className="menu__icon udi udi-academics"
                                />
                                <span className="fx">
                                  Teaching &amp; Academics
                                </span>
                                <span
                                  data-purpose="menu-item-arrow"
                                  className="menu__arrow udi udi-next"
                                />
                              </a>
                              <ul className="dropdown-menu second-lvl-menu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Submenu
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Submenu0
                                  </a>
                                </li>
                                <li className="dropdown-submenu">
                                  <a
                                    className="dropdown-item dropdown-toggle"
                                    href="#"
                                  >
                                    Submenu 1
                                  </a>
                                  <ul className="dropdown-menu third-lvl-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu1
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu1
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a
                                    className="dropdown-item dropdown-toggle"
                                    href="#"
                                  >
                                    Submenu 2
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu2
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Subsubmenu2
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <form className="navbar-search form-inline my-2 my-lg-0">
                        <input
                          className="form-control mr-sm-2"
                          type="search"
                          placeholder="Search for anything"
                        />
                        <button className="btn" type="submit">
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="navbar-content-right">
              <div
                className="visible-lg-block visible-xl-block"
                ng-non-bindable
              >
                <div className="dropdown--open-on-hover dropdown">
                  <a
                    data-purpose="ufb-link"
                    href="#"
                    rel="noopener noopener"
                    target="_blank"
                    id="header.try-ufb"
                    role="button"
                    className="dropdown-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Teams and Enterprises
                  </a>
                  <ul
                    role="menu"
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="header.try-ufb"
                  >
                    <li role="presentation">
                      <div className="zero-state__detail">
                        <div>
                          Get your team access to 3,500+ top Udemy courses
                          anytime, anywhere
                        </div>
                      </div>
                      <div className="mt-space-sm">
                        <a
                          className="zero-state__cta a11 semibold"
                          href="https://business.udemy.com/request-demo/?ref=ufb_header-a&locale=en_US"
                          target="_blank"
                          rel="noopener noopener"
                        >
                          Try Udemy for Business
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="ud-component--header-v6--instructor-dropdown-button visible-lg-block visible-xl-block"
                ng-non-bindable
              >
                <div className="dropdown--open-on-hover dropdown--instructor zero-state dropdown--open-on-hover dropdown">
                  <a
                    data-purpose="instructor-dropdown"
                    href="/teaching/?ref=teach_header"
                    rel=" noopener noreferrer"
                    target="_self"
                    id="header.instructor"
                    role="button"
                    className="dropdown-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Teach on Udemy
                  </a>
                  <ul
                    role="menu"
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="header.instructor"
                  >
                    <li role="presentation">
                      <div className="zero-state__detail">
                        <div>
                          Turn what you know into an opportunity and reach
                          millions around the world.
                        </div>
                      </div>
                      <div className="mt-space-sm">
                        <a
                          className="zero-state__cta a11 semibold"
                          href="/teaching/?ref=teach_header"
                          target="_self"
                        >
                          Learn more
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="visible-lg-block visible-xl-block header-right-divider" />
              <div className="shopping-cart">
                <div
                  className="ud-component--header-v6--cart-dropdown"
                  data-purpose="cart-icon"
                  ng-non-bindable
                >
                  <div className="dropdown--icon dropdown--shopping-list dropdown--open-on-hover dropdown">
                    <a
                      href="/cart/"
                      target="_self"
                      id="header.dropdown.cart"
                      role="button"
                      className="dropdown-toggle"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="fx pos-r text-center">
                        <span className="sr-only">Shoplist</span>
                        <span className="dropdown__main-icon udi udi-cart-line" />
                      </div>
                    </a>
                    <ul
                      role="menu"
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="header.dropdown.cart"
                    >
                      <li role="presentation">
                        <div
                          className="styles--sc-dropdown__empty-message--24wbn"
                          data-purpose="cart-list"
                        >
                          Your cart is empty.
                          <a
                            className="styles--sc-dropdown__to-more--o3k3O"
                            data-purpose="keep-shopping"
                            href="/"
                          >
                            Keep shopping
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="ml-space-sm hidden-xs hidden-xxs" />
              <div
                className="dropdown dropdown--login ud-component--header-v6--login-button hidden-xs hidden-xxs"
                ng-non-bindable
              >
                <div>
                  <button
                    data-purpose="header-login"
                    type="button"
                    className="btn btn-quaternary"
                    onClick={() => setLoginModalShow(true)}
                  >
                    Log In
                  </button>
                  <LoginModal
                    show={loginModalShow}
                    onHide={() => setLoginModalShow(false)}
                  />
                </div>
              </div>
              <div
                className="dropdown dropdown--signup ud-component--header-v6--signup-button hidden-xs hidden-xxs"
                ng-non-bindable
              >
                <div>
                  <button
                    data-purpose="header-signup"
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setSignupModalShow(true)}
                  >
                    Sign Up
                  </button>
                  <SignupModal
                    show={signupModalShow}
                    onHide={() => setSignupModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// }

export default Navbarv2;
