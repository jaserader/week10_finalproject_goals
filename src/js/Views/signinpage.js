import React from 'react';
import { Link } from "react-router";

class Signinpage extends React.Component {
  render () {
    return (
      <div id="siginPage">
      <Link to="home">home</Link>
        <form id="signinForm">
          <label for="username" id="usernameLabel">Username</label>
          <input type="text" id="username" />
          <label for="password" id="passwordLabel">Password</label>
          <input type="password" id="password" />
          <label for="submit" id="submitLabel">Submit</label>
          <input type="submit" id="submit" />
        </form>
      </div>
    )
  }
}

export default Signinpage;
