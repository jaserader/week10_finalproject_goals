  import React from 'react';
import { Link } from "react-router";

class Signuppage extends React.Component {
  render () {
    return (
      <div id="signupPage">

        <form id="signupForm">
          <label for="first" id="firstLabel">First Name:</label>
          <input type="text" id="first" />
          <label for="last" id="lastLabel">Last Name:</label>
          <input type="text" id="last" />
          <label for="username" id="usernameLabel">Username:</label>
          <input type="text" id="username" />
          <label for="password" id="passwordLabel">Password:</label>
          <input type="password" id="password" />
          <label for="passwordConfirm" id="passwordConfirmLabel">Password Confirm:</label>
          <input type="password" id="passwordConfirm" />
          <label for="email" id="emailLabel">Email:</label>
          <input type="text" id="email" />
          <input type="submit" id="submit" />
        </form>

        <Link to="signin">sign in</Link>

      </div>
    )
  }
}

export default Signuppage;
