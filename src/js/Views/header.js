import React from 'react';
import { Link } from "react-router";

class Header extends React.Component{
  render(){
    return(
      <header>

        <Link id="logo" to="home"><i className="fa fa-flag-checkered"></i><span>Goals</span></Link>

        <nav>
          <a>logout</a>
        </nav>
      </header>
    )
  }
}

export default Header;
