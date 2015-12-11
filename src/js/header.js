import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <header>

        <a id="logo" href=""><i className="fa fa-list-ul"></i><span>GOALS</span></a>

        <nav id="headerNav">
          <input type="text" placeholder="search"></input>
          <a href="">logout</a>
        </nav>
      </header>
    )
  }
}

export default Header;
