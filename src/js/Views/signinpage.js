import React from 'react';
import { Link } from "react-router";

class Signinpage extends React.Component {
  render () {
    return (
      <div id="signinPage">

        <Link to="home">dashboard/homepage</Link>

        <form id="signinForm">
          <label for="username" id="usernameLabel">Username</label>
          <input type="text" id="username" />
          <label for="password" id="passwordLabel">Password</label>
          <input type="password" id="password" />
          <input type="submit" id="submit" />
        </form>

        <Link to="signup">sign up</Link>

      </div>
    )
  }
}

export default Signinpage;
