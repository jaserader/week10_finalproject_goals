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
              <Link to="home">Freddy Roberts</Link>
              <Link to="home">Freddy Roberts</Link>
              <Link to="home">Freddy Roberts</Link>
              <Link to="home">Freddy Roberts</Link>
              <Link to="home">Freddy Roberts</Link>
              <Link to="home">Freddy Roberts</Link>
              <Link to="home">Freddy Roberts</Link>
              <Link to="home">Freddy Roberts</Link>
              <Link to="home">Freddy Roberts</Link>
              <Link to="home">Freddy Roberts</Link>
              <Link to="home">Freddy Roberts</Link>
            </ul>
          </section>
        </aside>

        <section id="goalsListBox">
          <span id="goalsLabel">Goals</span>

          <div id="goal">
            <div id="completedBox"><button id="completed"></button></div>

            <input id="goalTxt"></input>

            <a><i class="fa fa-caret-square-o-down"></i></a>

            <button className="voteBtn">+</button>
            <button className="voteBtn">-</button>

            <span className="votes">Votes:</span>
            <span className="votes">10</span>

          </div>

        </section>

      </div>
    )
  }
}

export default Homepage;
