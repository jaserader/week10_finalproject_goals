import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

import User from "../Models/user";

class Signinpage extends React.Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    if (
      !($("#username").val() &&
      $("#password").val())
    ){
      alert("Please fill out the entire form.");
      return;
    }

    let done = (error, response) => {
      console.log(response);

      if (error){
        alert("Login Failed!")
        return error;
      }
      this.props.history.pushState(null, "home")
    }

    User.signin(
      {
        "grant_type": "password",
        "username": $('#username').val(),
        "password": $('#password').val()
      },

      done
    )
  }

  render () {
    return (
      <div id="signinPage">

        <form id="signinForm">
          <label htmlFor="username" id="usernameLabel">Username</label>
          <input type="text" id="username" />
          <label htmlFor="password" id="passwordLabel">Password</label>
          <input type="password" id="password" />
          <input type="submit" id="submit" onClick={this.handleSubmit} />
        </form>

        <Link to="signup">sign up</Link>

      </div>
    )
  }
}

export default Signinpage;
