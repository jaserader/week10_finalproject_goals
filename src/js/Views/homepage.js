import React, { PropTypes } from 'react';
import {Link} from "react-router";
import $ from 'jquery';

import User from "../Models/user";
import Goal from "../Models/goal";


class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      userGoals: []
    };

    this.handleEnter = this.handleEnter.bind(this);
    this.handlePostGoal = this.handlePostGoal.bind(this);
    this.commentLink = this.commentLink.bind(this);
  }

  handleEnter(e){
    if(e.which === 13){
      return true;
    }

    return false;
  }

  handlePostGoal(e){

    if(this.handleEnter(e)){
      let done = (error, response) => {
        let goal = {
           body: response.body,
           comments: response.comments,
           completed: response.completed,
           created: response.created_at,
           id: response.id,
           upvotes: response.upvotes,
           user: response.user_id,
           username: response.username
        };

        User.goals.push(goal);

        this.setState({
          userGoals: User.goals
        });

        if (error){
          alert("Post Failed!")
          return error;
        }
      }

      Goal.post(
        {
          "body": $('#goalTxt').val()
        },

        done
      )
    }
  }

  commentLink(e){
    e.preventDefault();
    Goal.viewGoal(e.target.parentElement.id);
    let url = `home/goals/${e.target.parentElement.id}`;
    this.props.history.pushState(null, url);
  }

  componentDidMount(){
    $.ajax('https://goals-api.herokuapp.com/me').then(response => {
      User.id = response.id;
      this.setState({
        user: response
      });
        $.ajax(`https://goals-api.herokuapp.com/users/${User.id}/goals`).then(response => {
          User.goals = response.map(goal =>{
           return {
             body: goal.body,
             comments: goal.comments,
             completed: goal.completed,
             created: goal.created_at,
             id: goal.id,
             upvotes: goal.upvotes,
             user: goal.user_id,
             username: goal.username
          }
        });

        this.setState({
          userGoals: User.goals
        });
     }).fail(error => {
        console.error(error);
      });
    });
  }

  render () {

      let goals = this.state.userGoals.map(goal => {
        let comments = goal.comments.map((comment) => {
          return (<p key={goal.id}>{comment.username}:{comment.body}</p>);
        });
        let children = React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {id: goal.id});
        });
        let link = `home/goals/${goal.id}`;
        return (  <div id="goal" key={goal.id} >
                  <div id="completedBox"><button id="completed"></button></div>

                  <p>{goal.body}</p>

                  {children}
                  <button className="voteBtn">+</button>
                  <button className="voteBtn">-</button>

                  <span className="votes">Votes:</span>
                  <span className="votes">10</span>

                  <Link to={link} onClick={this.commentLink} id={goal.id} key={goal.id}><i className="fa fa-angle-down"></i></Link>

                </div>);
      })

      return (
        <div id="homepage">

          <aside>
            <section id="userInfo">
                <img src="http://www.gravatar.com/avatar/?d=identicon"  id="userAvatar"></img>

               <div className="nameBlock">
                 <span>Name: {this.state.user.first} {this.state.user.last} </span>
                 <span>Username: {this.state.user.username}</span>
               </div>

            </section>

          <section id="friendsList">
            <span>Following List:</span>

            <ul id="followingList">
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

            <input id="goalTxt" onKeyDown={this.handlePostGoal} ></input>

            <button className="voteBtn">+</button>
            <button className="voteBtn">-</button>

            <span className="votes">Votes:</span>
            <span className="votes">10</span>

            <Link to="/"><i className="fa fa-angle-down"></i></Link>

          </div>

          {goals}

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
        </section>

      </div>


    )
  }
}

export default Homepage;
