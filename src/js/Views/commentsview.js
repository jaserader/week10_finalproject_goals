import React, { PropTypes } from 'react';
import $ from "jquery";

import User from "../Models/user";
import Goal from "../Models/goal";
import ViewedUser from "../Models/viewedUser";

class CommentsView extends React.Component {
  constructor(props){
    super(props)

    this.handleEnter = this.handleEnter.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  handleEnter(e){
    if(e.which === 13){
      return true;
    }

    return false;
  }

  postComment(e){
    if(this.handleEnter(e)){
      Goal.postComment(
        $("#newComment").val(),
        e.target.parentElement.id,
        (a, response) => {
          if(this.props.routes[1].path === "home"){
          User.goals.filter((goal) => {
            return (goal.id.toString() === response.goal_id.toString());
          })[0].comments.push(response);
          }
          else if(this.props.routes[1].path === "users/:userId"){
            ViewedUser.goals.filter((goal) => {
              return (goal.id.toString() === response.goal_id.toString());
            })[0].comments.push(response);
          }
          this.forceUpdate();
          $("#newComment").val(""); 
        }
      );
    }
  }


  render () {
    let comments;
    let goalArray;
    if(this.props.id.toString() === this.props.params.id){
      if(this.props.routes[1].path === "home"){
        goalArray = User.goals.filter((goal) => {
          return (goal.id.toString() === this.props.params.id);
        });
      }
      else if(this.props.routes[1].path === "users/:userId"){
        goalArray = ViewedUser.goals.filter((goal) => {
          return (goal.id.toString() === this.props.params.id);
        });
      }
      let goal = goalArray[0];
      comments = goal.comments.map((comment) => {
        return (<li key={comment.id}><h6>{comment.username}</h6><p>{comment.body}</p></li>);
      });
      if(comments.length === 0){
        comments = (
          <div className="commentContainer" id={this.props.id.toString()} key={this.props.id.toString()}>
          <input id="newComment"  placeholder="New Comment..." onKeyDown={this.postComment}></input>
          </div>
        );
      }
      else{
        comments.unshift((
          <div className="commentContainer" id={this.props.id.toString()} key={this.props.id.toString() + " The first!"}>
          <input id="newComment"  placeholder="New Comment..." onKeyDown={this.postComment}></input>
          <span>Comments:</span>
          </div>
        ));
      }
    }
    else {
      comments = false;
    }
    return (<ul className="commentSection">
      {comments}
    </ul>);
  }
}

export default CommentsView;
