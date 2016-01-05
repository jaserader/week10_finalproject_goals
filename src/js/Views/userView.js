import React, { PropTypes } from 'react';
import {Link} from "react-router";
import $ from 'jquery';

import User from "../Models/user";
import Goal from "../Models/goal";
import ViewedUser from "../Models/viewedUser";


class UserView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      userGoals: [],
      users: [],
      expanded: ""
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
    let url;
    if(this.state.expanded === e.target.parentElement.id.toString()){
      url = `users/${this.state.user.id}`;
      Goal.currentGoal = "";
      this.setState({
        expanded: Goal.currentGoal
      });
    }
    else {
      url = `users/${this.state.user.id}/goals/${e.target.parentElement.id}`;
      this.setState({
        expanded: Goal.currentGoal
      })
    }
    this.props.history.pushState(null, url);
  }

  componentWillReceiveProps(newProps){
    $.ajax(`https://goals-api.herokuapp.com/users/${newProps.params.userId}`).then(response => {
      ViewedUser.id = response.id
      this.setState({
        user: response
      });
    });
    $.ajax(`https://goals-api.herokuapp.com/users/${newProps.params.userId}/goals`).then(response => {
      ViewedUser.goals = response.map(goal =>{
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
      userGoals: ViewedUser.goals
    });
 }).fail(error => {
    console.error(error);
  });

  $.ajax('https://goals-api.herokuapp.com/users').then(response => {
    this.setState({
      users: response
    });
  });
  }

  componentDidMount(){
    $.ajax(`https://goals-api.herokuapp.com/users/${this.props.params.userId}`).then(response => {
      ViewedUser.id = response.id
      this.setState({
        user: response
      });
    });
    $.ajax(`https://goals-api.herokuapp.com/users/${this.props.params.userId}/goals`).then(response => {
      ViewedUser.goals = response.map(goal =>{
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
      userGoals: ViewedUser.goals
    });
 }).fail(error => {
    console.error(error);
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
        let link = `users/${this.state.user.id}/goals/${goal.id}`;
        return (  <div className="goal" key={goal.id} >
                    <div id="completedBox"><button id="completed"></button></div>
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
                <img src="http://www.gravatar.com/avatar/?d=identicon"  id="userAvatar"></img>

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

          {goals}

        </section>

      </div>


    )
  }
}

export default UserView;
