import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component{
  render(){
    return(

      <footer>
        <Link to="home" id="logo" href="home"><i className="fa fa-list-ul"></i><span>GOALS</span></Link>

        <nav id="socialNav">
          <Link to="/"><i className="fa fa-facebook-official"></i></Link>
          <Link to="/"><i className="fa fa-twitter-square"></i></Link>
          <Link to="/"><i className="fa fa-instagram"></i></Link>
        </nav>

        <div id="footerNav1">
          <Link to="/">For Business</Link>
          <Link to="/">Contact Us</Link>
        </div>

        <div id="footerNav2">
          <Link to="/">About Us</Link>
          <Link to="/">Help</Link>
        </div>

        <div id="footerNav3">
          <Link to="/">Reviews</Link>
          <Link to="/">Privacy Policy</Link>
        </div>

        <div id="footerNav4">
          <Link to="/">Careers</Link>
          <Link to="/">Terms of Service</Link>
        </div>

      </footer>

    )
  }
}

export default Footer;
