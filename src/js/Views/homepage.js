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
      userGoals: [],
      users: []
    };

    this.handleEnter = this.handleEnter.bind(this);
    this.handlePostGoal = this.handlePostGoal.bind(this);
    this.commentLink = this.commentLink.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleEnter(e){
    if(e.which === 13){
      return true;
    }

    return false;
  }

  handleCheckbox(e){
    Goal.putComplete(
      e.target.id,
      e.target.className
    );

    let updated = this.state.userGoals.map(goal => {
      if(goal.id == e.target.id) {
        goal.completed = !goal.completed; // just freaking invert it.
      }
      return goal;
    });
    this.setState({userGoals: updated});
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

        $('#goalTxt').val("");
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
    let url;
    if(this.state.expanded === e.target.parentElement.id.toString()){
      url = `home`;
      Goal.currentGoal = "";
      this.setState({
        expanded: Goal.currentGoal
      });
    }
    else {
      url = `home/goals/${e.target.parentElement.id}`;
      this.setState({
        expanded: Goal.currentGoal
      })
    }
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

    $.ajax('https://goals-api.herokuapp.com/users').then(response => {
      this.setState({
        users: response
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

        let complete;

          if (goal.completed === true){
            complete = (<button className="completed" id={goal.id} onClick={this.handleCheckbox} ></button>)}
          else {
            complete = (<button className="incomplete" id={goal.id} onClick={this.handleCheckbox} ></button>)
            };

        let link = `home/goals/${goal.id}`;

        return (  <div className="goal" key={goal.id} >
                    <div id="completedBox">{complete}</div>
                    <p>{goal.body}</p>
                    <Link to={link} onClick={this.commentLink} id={goal.id} key={goal.id}><i className="fa fa-angle-down"></i></Link>
                    {children}
                  </div>);
      })

      let users = this.state.users.map((user)=>{
        let links = `users/${user.id}`;

        if(User.id === user.id){
            return;
          }

        return(
          <li key={user.id}><Link to={links}>{`${user.first} ${user.last}`}</Link></li>
        );
      })

      return (
        <div id="homepage">

          <aside>
            <section id="userInfo">
                <img src="http://lorempixel.com/150/150/cats"  id="userAvatar"></img>

               <div className="nameBlock">
                 <span className="label">Name: {this.state.user.first} {this.state.user.last} </span>
                 <span className="label">Username: {this.state.user.username}</span>
               </div>

            </section>

          <section id="friendsList">
            <span>Users List:</span>

            <ul id="followingList">
            {users}
            </ul>
          </section>
        </aside>

        <section id="goalsListBox">

          <span id="goalsLabel">Goals</span>

          <div className="goal">
            <div id="completedBox"><button id="completed" ></button></div>

            <input id="goalTxt" placeholder="New Goal..." onKeyDown={this.handlePostGoal} ></input>

          </div>

          {goals}


        </section>

      </div>


    )
  }
}

export default Homepage;
