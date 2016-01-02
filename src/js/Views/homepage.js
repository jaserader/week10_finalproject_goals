import React from 'react';
import {Link} from "react-router";
import $ from 'jquery';

import User from "../Models/user";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount(){
    $.ajax('https://goals-api.herokuapp.com/me').then(response => {
      this.setState({
        user: response
      });
    });
  }

  render () {
    let name = (
            <div className="nameBlock">
              <span>Name: {this.state.user.first} {this.state.user.last} </span>
              <span>Username: {this.state.user.username}</span>
            </div>
          );
    return (
      <div id="homepage">

        <aside>
          <section id="userInfo">

            <div id="userAvatar"></div>
            {name}

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

          <nav id="goalsNav">
            <Link to="/">Active</Link>
            <Link to="/">Completed</Link>
            <Link to="/">Following Activity</Link>
          </nav>

          <div id="goal">
            <div id="completedBox"><button id="completed"></button></div>

            <input id="goalTxt"></input>

            <button className="voteBtn">+</button>
            <button className="voteBtn">-</button>

            <span className="votes">Votes:</span>
            <span className="votes">10</span>

            <Link to="/"><i className="fa fa-angle-down"></i></Link>

          </div>

          <div id="goalExpanded">
            <div id="completedBox"><button id="completed"></button></div>

            <input id="goalTxt"></input>

            <button className="voteBtn">+</button>
            <button className="voteBtn">-</button>

            <span className="votes">Votes:</span>
            <span className="votes">10</span>

            <Link to="/"><i className="fa fa-angle-down"></i></Link>

            <div id="commentSection">
              <span>Comments:</span>
              <input id="newComment"  placeholder="New Comment...."></input>
              <input id="existingComment"></input>
              <input id="existingComment"></input>
              <input id="existingComment"></input>
            </div>

          </div>
          {this.props.children}
        </section>

      </div>
    )
  }
}

export default Homepage;
