import React from 'react';
import { Link } from "react-router";

import User from '../Models/user';

class Header extends React.Component{
  constructor(props){
    super(props)

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    this.unsubscribe = User.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleLogout(){
    User.logout();
  }

  render(){
    let home = (<Link id="logo" to="/"><i className="fa fa-list-ul"></i><span>GOALS</span></Link>);
    let logout = (<Link to="signin">signin</Link>);

    if (User.token) {
      home = (<Link id="logo" to="home"><i className="fa fa-list-ul"></i><span>GOALS</span></Link>)
      logout = (<Link to="signin" onClick={this.handleLogout}>logout</Link>)
    }

    return(
      <header>
        { home }
        <nav id="headerNav">
          <input type="text" placeholder="search"></input>
        { logout }
        </nav>
      </header>
    )
  }
}

export default Header;
