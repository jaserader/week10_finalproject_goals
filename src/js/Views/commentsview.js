import React, { PropTypes } from 'react';
import $ from "jquery";

import User from "../Models/user";
import Goal from "../Models/goal";

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
          console.log(response);
        }
      )
    }
  }

  render () {
    let comments;
    if(this.props.id.toString() === this.props.params.id){
      let goalArray = User.goals.filter((goal) => {
        return (goal.id.toString() === this.props.params.id);
      });
      let goal = goalArray[0];
      comments = goal.comments.map((comment) => {
        return (<li><p>{comment.body}</p></li>);
      });
      if(comments.length === 0){
        comments = (
          <div class="commentContainer" id={this.props.id.toString()}>
          <input id="newComment"  placeholder="New Comment...." onKeyDown={this.postComment}></input>
          </div>
        );
      }
      else{
        comments.unshift((
          <div id="commentContainer">
          <input id="newComment"  placeholder="New Comment...."></input>
          <span>Comments:</span>
          </div>
        ));
      }
    }
    else {
      comments = false;
    }
    return (<div id="commentSection">
      {comments}
    </div>);
  }
}

export default CommentsView;
