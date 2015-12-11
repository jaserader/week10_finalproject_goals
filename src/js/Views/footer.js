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

      </footer>

    )
  }
}

export default Footer;
