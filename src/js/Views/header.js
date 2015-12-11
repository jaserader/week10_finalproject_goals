import React from 'react';
import { Link } from "react-router";

class Header extends React.Component{
  render(){
    return(
      <header>
        <Link id="logo" to="home"><i className="fa fa-list-ul"></i><span>GOALS</span></Link>
        <nav id="headerNav">
          <input type="text" placeholder="search"></input>
          <a href="">logout</a>
        </nav>
      </header>
    )
  }
}

export default Header;
