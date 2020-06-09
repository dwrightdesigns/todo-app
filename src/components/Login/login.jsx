import React from "react";
import { Link, withRouter } from "react-router-dom";
import SubHeader from "../subheader";

// const validUserInfo = {
//   email: "test@kenzie.academy",
//   password: "test123",
// };

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.email === "test@kenzie.academy" &&
      this.state.password === "test123"
    ) {
      this.props.history.push("/dashboard");
    } else {
      this.setState({ error: "Invalid Username or Password" });
    }
  };

  render() {
    return (
      <>
        <SubHeader subheader="Login" />
        <div className="base-container">
          <div className="content">
            <div className="image">
              <i className="fas fa-user-circle"></i>
            </div>
            {this.state.error && <p className="error">{this.state.error}</p>}
            <form onSubmit={this.onSubmit} className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button type="submit" className="button">
                Login
              </button>
            </form>
          </div>
          <div className="form-footer">
            <div className="register">
              <h5>Don't have an account?</h5>
              <Link to="/register" className="sign-up">
                Sign up here
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
