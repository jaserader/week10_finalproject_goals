import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <header>

        <a id="logo" href=""><i className="fa fa-flag-checkered"></i><span>Goals</span></a>

        <nav>
          <a>logout</a>
        </nav>
      </header>
    )
  }
}

export default Header;
