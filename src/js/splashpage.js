import React from 'react';

class Splashpage extends React.Component {

  render(){

    return(
        <div id="splashpage">
            <nav id="homeNav">
              <span>Bringing responsibility to social networking.</span>
              <a href="">signup</a>
            </nav>

          <section id="hero">
            <button id="signupBtn">signup</button>
          </section>

          <section id="goalsInfo">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </section>

        </div>
    )
  }
}

export default Splashpage;
