import React from 'react';
import { Link } from "react-router";

class Signuppage extends React.Component {
  render () {
    return (
      <div id="signupPage">
        <Link to="signin">signin</Link>
        <form id="signupForm">
          <label for="username" id="usernameLabel">Username</label>
          <input type="text" id="username" />
          <label for="password" id="passwordLabel">Password</label>
          <input type="password" id="password" />
          <label for="passwordConfirm" id="passwordConfirmLabel">Password Confirm</label>
          <input type="password" id="passwordConfirm" />
          <label for="first" id="firstLabel">First Name</label>
          <input type="text" id="first" />
          <label for="last" id="lastLabel">Last Name</label>
          <input type="text" id="last" />
          <label for="email" id="emailLabel">Email</label>
          <input type="text" id="email" />
          <label for="submit" id="submitLabel">Submit</label>
          <input type="submit" id="submit" />
        </form>
      </div>
    )
  }
}

export default Signuppage;
