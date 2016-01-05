import React from 'react';
import { Link } from "react-router";
import $ from "jquery";


class Splashpage extends React.Component {

  componentDidMount(){
    function checkSize(){
      if ($(".checkSize").css("padding-top") === "1px" ){
        $("#textTop").text("Allow your friends to help you");
        $("#textBottom").text("accomplish your goals.");
      }
      else if ($(".checkSize").css("padding-top") === "0px" ){
        $("#textTop").text("Allow your friends to");
        $("#textBottom").text("help you accomplish your goals.");
      }
    }
    checkSize();
    $(window).resize(checkSize);
  }

  render(){

    return(
      <div id="splashpage">
          <nav id="homeNav">
            <span>Bringing responsibility to social networking.</span>
            <Link to="signup">sign up</Link>
          </nav>

        <section id="hero">
          <Link id="signupBtn" to="signup">sign up</Link>
          <span id="textTop" className="checkSize">Allow your friends to</span>
          <span id="textBottom" className="checkSize">help you accomplish your goals.</span>
        </section>

        <section id="goalsInfo">
          <div id="customerContainer">
            <div id="customerPicture1"></div>
            <div id="customerQuote">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          </div>

          <div id="customerContainer">
            <div id="customerPicture2"></div>
            <div id="customerQuote">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          </div>

          <div id="customerContainer">
            <div id="customerPicture3"></div>
            <div id="customerQuote">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          </div>

        </section>


      </div>
    )
  }
}

export default Splashpage;
