import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component{
  render(){
    return(

      <footer>
        <Link to="home" id="logo" href="home"><i className="fa fa-list-ul"></i><span>GOALS</span></Link>

        <nav id="socialNav">
          <Link to=""><i className="fa fa-facebook-official"></i></Link>
          <Link to=""><i className="fa fa-twitter-square"></i></Link>
          <Link to=""><i className="fa fa-instagram"></i></Link>
        </nav>

      </footer>

    )
  }
}

export default Footer;
