import React from 'react';
import {Link} from "react-router";

class Homepage extends React.Component {
  render () {
    return (
      <div id="homepage">

        <aside>
          <section id="userInfo">

            <div id="userAvatar"></div>

            <span>name: Timothy Gass</span>
            <span>username: timgass25</span>

          </section>

          <section id="friendsList">
            <span>Following List:</span>

            <ul id="followingList">
              <Link>Freddy Roberts</Link>
              <Link>Freddy Roberts</Link>
              <Link>Freddy Roberts</Link>
              <Link>Freddy Roberts</Link>
              <Link>Freddy Roberts</Link>
              <Link>Freddy Roberts</Link>
              <Link>Freddy Roberts</Link>
              <Link>Freddy Roberts</Link>
              <Link>Freddy Roberts</Link>
              <Link>Freddy Roberts</Link>
              <Link>Freddy Roberts</Link>
            </ul>
          </section>
        </aside>

        <section id="goalsListBox">
          <span>Goals</span>
        </section>

      </div>
    )
  }
}

export default Homepage;
