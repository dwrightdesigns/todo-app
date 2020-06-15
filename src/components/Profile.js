import React, { Component } from "react";
import Subheader from "./subheader";
import { Link, withRouter } from "react-router-dom";

class Profile extends Component {
  getUser() {
    return (
      this.props.users.find((u) => u.id === this.props.match.params.userId) ||
      {}
    );
  }

  state = {
    user: this.getUser(),
    date: new Date(),
  };
  // componentWillMount(prevProps) {
  //   if (prevProps !== this.props) {
  //     this.setState({ users: this.getUser() });
  //   }
  // }
  render() {
    const { user } = this.state;
    return (
      <>
        <Subheader subheader="My Profile" />
        <div className="profile-container">
          <div className="content">
            <div className="image">
              <img src={user.avatar} className="fa-user-circle" alt="user profile"></img>
            </div>

            <div className="user">
              <h1 className="hello">
                Hello <span>{user.displayName}</span>
              </h1>
              <p>
                {this.state.date.toLocaleDateString(undefined, {
                  year: `numeric`,
                  month: `long`,
                  day: `numeric`,
                })}
              </p>
            </div>
            <div className="user-details">
              <h4>Display Name:</h4>
              <p>{user.displayName}</p>
              <h4>Name:</h4>
              <p>{user.fullName}</p>
              <h4>Email:</h4>
              <p>{user.email}</p>
              <h4>Password:</h4>
              <p>{user.password}</p>
            </div>
            <div className="nav_btn">
              <div className="btn">
                <Link className="button" to="/mytasks">
                  My Tasks
                </Link>
              </div>
              <div className="btn">
                <Link className="button" to="/dashboard">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Profile);
