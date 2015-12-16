  import React from 'react';
  import { Link } from "react-router";
  import $ from 'jquery';

  import User from '../Models/user';

class Signuppage extends React.Component {

  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();

    if(($("#password").val() !== $("#passwordConfirm").val()) && $("#password").val().length < 8){
      alert("Password Values do not match or the passwords length is less than 8 characters!");

      $("#signupForm input").val("");
      return;
    }

    if (
      !($("#first").val() &&
      $("#last").val() &&
      $("#username").val() &&
      $("#email").val() &&
      $("#password").val())
    ){
      alert("Please fill out the entire form.");
      return;
    }

    let done = (error, response) => {
      if (error){
        return error;
      }
      console.log(response);
      this.props.history.pushState(null, "signin")
    }

    User.register(
      {
        "first": $('#first').val(),
        "last": $('#last').val(),
        "username": $('#username').val(),
        "email": $('#email').val(),
        "password": $('#password').val()
      },

      done
    )
  }

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
          <input type="password" id="password" className="password" placeholder="Minimum of 8 Characters"/>
          <label htmlFor="passwordConfirm" id="passwordConfirmLabel">Password Confirm:</label>
          <input type="password" id="passwordConfirm" className="password" placeholder="Minimum of 8 Characters"/>
          <label htmlFor="email" id="emailLabel">Email:</label>
          <input type="text" id="email" />
          <input type="submit" id="submit" onClick={this.handleSubmit} />
        </form>

        <Link to="signin">sign in</Link>

      </div>
    )
  }
}

export default Signuppage;
