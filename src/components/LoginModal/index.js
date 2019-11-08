import React from "react";
import Modal from "react-bootstrap/Modal";

function LoginModal(props) {
  return (
    <div className="login-modal-dialog">
      <Modal {...props} size="lg" centered>
        <Modal.Header closeButton className="loginbox-v4__header">
          <div className="modal-title" id="exampleModalLabel">
            Log In to Your Udemy Account!
          </div>
        </Modal.Header>
        <Modal.Body className="loginbox-v4__content">
          <div>
            <div className="social-login-group">
              <div>
                <a
                  href="/"
                  data-purpose="facebook-link"
                  className="fxac social-buttons--social-btn--1JTo2 facebook-auth--social-btn--facebook--3SDC_"
                >
                  <span className="social-buttons--social-icon--3jP8h facebook-auth--social-icon--3wyy2 udi udi-facebook-f" />
                  Continue with Facebook
                </a>
              </div>
              <div>
                <a
                  href="/"
                  data-purpose="google-link"
                  className="fxac social-buttons--social-btn--1JTo2 google-auth--social-btn--google--1H6_f"
                >
                  <span className="social-buttons--social-icon--3jP8h google-auth--social-icon--3uKst udi udi-google-plus" />
                  Continue with Google
                </a>
                {/* <form
              id="google-plus-login-form"
              method="post"
              action="/join/social-complete/google-plus/?display_type=popup&amp;locale=en_US&amp;next=https://www.udemy.com/&amp;ref=&amp;response_type=json&amp;xref="
            >
              <input type="hidden" name="access_token" value="" /><input
                type="hidden"
                name="code"
                value=""
              /><input type="hidden" name="from" value="login" /><input
                type="hidden"
                name="instructor"
                value="false"
              />
            </form> */}
              </div>
            </div>
            <form
              id="login-form"
              action="https://www.udemy.com/join/login-popup/?display_type=popup&locale=en_US&next=https%3A%2F%2Fwww.udemy.com%2F&ref=&response_type=json&xref="
              action-type="login"
              name="login-form"
              className="signin-form dj"
              method="post"
            >
              {/* <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="dqqEGa1R4JmX2W9QsKv3JQklSsp7mZ0rg0ewEAHMqSoHVI4stEvNQY5R4r4VRccB"
          /> */}
              <div className="manage-fields-wrapper">
                {/* <input type="hidden" name="locale" value="en_US" /> */}
                <div
                  className="form-field-container labeled ud-component--social-auth--django-email-field"
                  id="form-item-email"
                  ng-non-bindable
                >
                  <label htmlFor="email--1" className="sr-only">
                    Email
                  </label>
                  <div>
                    <input
                      name="email"
                      required
                      maxLength={64}
                      minLength={7}
                      placeholder="Email"
                      data-purpose="email"
                      type="email"
                      id="email--1"
                      className="form-control user-success"
                    />
                  </div>
                </div>
                <div
                  className="form-field-container labeled"
                  id="form-item-password"
                >
                  <label className="control-label " htmlFor="id_password">
                    Password
                  </label>
                  <div
                    id="tooltip-reference-password"
                    className="tooltip-reference pos-r "
                  >
                    <input
                      type="password"
                      name="password"
                      maxLength={64}
                      placeholder="Password"
                      required
                      minLength={6}
                      id="id_password"
                      data-purpose="password"
                      className="textinput textInput form-control user-success"
                    />
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <div className="submit-row">
                  <input
                    type="submit"
                    name="submit"
                    value="Log In"
                    className="btn btn-primary "
                    id="submit-id-submit"
                    data-purpose="do-login"
                  />
                  <span>or </span>
                  <a
                    href="/user/forgot-password/?display_type=popup&locale=en_US&next=https://www.udemy.com/&ref=&response_type=json&xref="
                    className="forgot-password-link"
                  >
                    Forgot Password
                  </a>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="loginbox-v4__footer">
          <div>
            Don't have an account?
            <a
              className="sign-link"
              href="/join/signup-popup/?display_type=popup&locale=en_US&next=https://www.udemy.com/&ref=&response_type=json&xref="
              data-purpose="sign-up"
            >
              &nbsp;Sign Up
            </a>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginModal;
