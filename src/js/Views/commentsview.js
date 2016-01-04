import React, { PropTypes } from 'react';

import User from "../Models/user";

class CommentsView extends React.Component {
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
          <div id="commentContainer">
          <span>Comments:</span>
          <input id="newComment"  placeholder="New Comment...."></input>
          </div>
        );
      }
      else{
        comments.unshift((
          <div id="commentContainer">
          <span>Comments:</span>
          <input id="newComment"  placeholder="New Comment...."></input>
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
