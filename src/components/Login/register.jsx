import React from "react";
import SubHeader from "../subheader";
import { Link, withRouter } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i
);

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirmation: "",
      isValid: false,
      error: "",
      errors: {
        email: "",
        password: "",
        passwordConfirmation: "",
      },
    };
  }

  validateForm = () => {
    let hasErrors = false;
    for (let property in this.state.errors) {
      if (this.state.error[property]) {
        hasErrors = true;
      }
    }
    let isValid =
      this.state.email &&
      this.state.password &&
      this.state.passwordConfirmation &&
      !hasErrors;
    this.setState({ isValid: Boolean(isValid) });
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    let thisError = "";
    switch (name) {
      case "email":
        if (value.length > 40) {
          thisError = "Email must be less than 40 characters";
        } else if (!validEmailRegex.test(value)) {
          thisError = "Please enter a valid email";
        }
        break;
      case "password":
        if (value.length < 6) {
          thisError = "Password must be more than 6 characters";
        }
        break;
      case "passwordConfirmation":
        if (value !== this.state.password) {
          thisError = "Passwords do not match";
        }
        break;
      default:
    }
    this.setState((state) => {
      return {
        [name]: value,
        errors: { ...state.errors, [name]: thisError },
      };
    }, this.validateForm);
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.email === "test@kenzie.academy" &&
      this.state.password === "test123" &&
      this.state.passwordConfirmation === "test123"
    ) {
      this.props.history.push("/profile/" + this.props.users.id);
    } else {
      this.setState({ error: "Please complete all fields" });
    }
  };

  render() {
    return (
      <>
        <SubHeader subheader="Register" />
        <div className="base-container">
          <div className="content">
            <div className="image">
              <i className="fas fa-user-circle"></i>
            </div>
            {this.state.errors.email && (
              <p className="error">{this.state.errors.email}</p>
            )}
            {this.state.error && <p className="error">{this.state.error}</p>}
            <form onSubmit={this.onSubmit} className="form">
              <div className="form-group">
                <label htmlFor="email">Enter Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              {this.state.errors.password && (
                <p className="error">{this.state.errors.password}</p>
              )}
              <div className="form-group">
                <label htmlFor="password">Create Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              {this.state.errors.passwordConfirmation && (
                <p className="error">
                  {this.state.errors.passwordConfirmation}
                </p>
              )}
              <div className="form-group">
                <label htmlFor="password">Re-Enter Password</label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Password"
                  value={this.state.passwordConfirmation}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button onClick={this.onSubmit} type="submit" className="button">
                Register
              </button>
            </form>
          </div>
          <div className="form-footer">
            <div className="register">
              <h5>Already registered?</h5>
              <Link to="/" className="sign-up">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Register);
