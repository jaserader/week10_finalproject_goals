import React from 'react';
import { Link } from "react-router";

class Splashpage extends React.Component {

  render(){

    return(
      <div id="splashpage">
          <nav id="homeNav">
            <span>Bringing responsibility to social networking.</span>
            <Link to="signup">sign up</Link>
          </nav>

        <section id="hero">
          <Link id="signupBtn" to="signin">sign up</Link>
          <span id="textTop">Allow your friends to</span>
          <span id="textBottom">help you accomplish your goals.</span>
        </section>

        <section id="goalsInfo">
          <div id="customerPicture"></div>
          <div id="customerPicture"></div>
          <div id="customerPicture"></div>
        </section>

        <section>
          <div id="customerQuote">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div id="customerQuote">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div id="customerQuote">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

        </section>

      </div>
    )
  }
}

export default Splashpage;
