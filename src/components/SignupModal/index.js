import React from "react";
import Modal from "react-bootstrap/Modal";

function SignupModal(props) {
  return (
    <div className="login-modal-dialog">
      <Modal {...props} size="lg" centered>
        <Modal.Header
          closeButton
          className="loginbox-v4__header loginbox-v4__header--signup"
        >
          <div className="modal-title" id="exampleModalLabel">
            Sign Up and Start Learning!
          </div>
        </Modal.Header>
        <Modal.Body className="loginbox-v4__content">
          <form
            name="signup-form"
            id="signup-form"
            className="signin-form dj"
            action-type="signup"
            action="https://www.udemy.com/join/signup-popup/?display_type=popup&locale=en_US&next=https%3A%2F%2Fwww.udemy.com%2F&ref=&response_type=json&xref="
            method="post"
          >
            {" "}
            <div className="manage-fields-wrapper">
              {" "}
              <div
                className="form-field-container labeled"
                id="form-item-fullname"
              >
                {" "}
                <label className="control-label " htmlFor="id_fullname">
                  Name
                </label>{" "}
                <div
                  id="tooltip-reference-fullname"
                  className="tooltip-reference pos-r "
                >
                  {" "}
                  <input
                    type="text"
                    name="fullname"
                    minLength={2}
                    required
                    placeholder="Full Name"
                    maxLength={64}
                    id="id_fullname"
                    className="textinput textInput form-control user-error"
                    data-purpose="fullname"
                  />{" "}
                </div>
              </div>{" "}
              <div
                className="form-field-container labeled ud-component--social-auth--django-email-field"
                id="form-item-email"
              >
                <label htmlFor="email--2" className="sr-only">
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
                    id="email--2"
                    className="form-control"
                  />
                </div>
              </div>{" "}
              <div
                className="form-field-container labeled ud-component--social-auth--django-password-field"
                id="form-item-password"
              >
                <div className="password-form-group--password-form-group--w2IqT form-group form-group-floating-label has-feedback">
                  <input
                    name="password"
                    minLength={6}
                    maxLength={64}
                    data-purpose="password"
                    type="password"
                    id="password"
                    className="form-control"
                  />
                  <label htmlFor="password" className="control-label">
                    Password
                  </label>
                </div>
              </div>{" "}
              <div
                className="form-field-container labeled"
                id="form-item-subscribe_to_emails"
              >
                {" "}
                <div
                  id="tooltip-reference-subscribe_to_emails"
                  className="tooltip-reference pos-r "
                >
                  {" "}
                  <div className="checkbox">
                    {" "}
                    <label htmlFor="id_subscribe_to_emails">
                      {" "}
                      <input
                        type="checkbox"
                        name="subscribe_to_emails"
                        id="id_subscribe_to_emails"
                        data-purpose="subscribe-to-emails"
                      />{" "}
                      <span className="checkbox-label">
                        Yes! I want to get the most out of Udemy by receiving
                        emails with exclusive deals, personal recommendations
                        and learning tips!
                      </span>{" "}
                    </label>{" "}
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
            <div className="form-actions">
              {" "}
              <div className="submit-row">
                {" "}
                <input
                  type="submit"
                  name="submit"
                  value="Sign Up"
                  className="btn btn-primary "
                  id="submit-id-submit"
                  data-purpose="do-signup"
                />
              </div>
            </div>{" "}
          </form>

          <div className="loginbox-v4__secondary-text">
            By signing up, you agree to our{" "}
            <a href="/terms/" target="_blank">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="/terms/privacy/" target="_blank">
              Privacy Policy
            </a>
            .
          </div>
          <div className="loginbox-v4__separator" />
        </Modal.Body>
        <Modal.Footer className="loginbox-v4__footer">
          <div>
            Already have an account?
            <a
              className="sign-link"
              href="/join/signup-popup/?display_type=popup&locale=en_US&next=https://www.udemy.com/&ref=&response_type=json&xref="
              data-purpose="sign-up"
            >
              &nbsp;Log In
            </a>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignupModal;
