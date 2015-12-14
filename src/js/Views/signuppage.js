  import React from 'react';
import { Link } from "react-router";

class Signuppage extends React.Component {
  render () {
    return (
      <div id="signupPage">

        <form id="signupForm">
          <label htmlFor="first" id="firstLabel">First Name:</label>
          <input type="text" id="first" />
          <label htmlFor="last" id="lastLabel">Last Name:</label>
          <input type="text" id="last" />
          <label htmlFor="username" id="usernameLabel">Username:</label>
          <input type="text" id="username" />
          <label htmlFor="password" id="passwordLabel">Password:</label>
          <input type="password" id="password" />
          <label htmlFor="passwordConfirm" id="passwordConfirmLabel">Password Confirm:</label>
          <input type="password" id="passwordConfirm" />
          <label htmlFor="email" id="emailLabel">Email:</label>
          <input type="text" id="email" />
          <input type="submit" id="submit" />
        </form>

        <Link to="signin">sign in</Link>

      </div>
    )
  }
}

export default Signuppage;
