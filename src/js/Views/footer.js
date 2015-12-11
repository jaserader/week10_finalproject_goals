import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component{
  render(){
    return(

      <footer>
        <a id="logo" href=""><i className="fa fa-list-ul"></i><span>GOALS</span></a>

        <nav id="socialNav">
          <Link to="home"><i className="fa fa-facebook-official"></i></Link>
          <Link to="home"><i className="fa fa-twitter-square"></i></Link>
          <Link to="home"><i className="fa fa-instagram"></i></Link>
        </nav>

        <div id="footerNav1">
          <Link>For Business</Link>
          <Link>Contact Us</Link>
        </div>

        <div id="footerNav2">
          <Link>About Us</Link>
          <Link>Help</Link>
        </div>

        <div id="footerNav3">
          <Link>Reviews</Link>
          <Link>Privacy Policy</Link>
        </div>

        <div id="footerNav4">
          <Link>Careers</Link>
          <Link>Terms of Service</Link>
        </div>

      </footer>

    )
  }
}

export default Footer;
