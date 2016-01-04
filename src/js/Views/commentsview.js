import React, { PropTypes } from 'react';

import Goal from "../Models/goal";

class CommentsView extends React.Component {
  render () {
    let comments;
    if(this.props.id.toString() === this.props.params.id){
      comments = (<h1>For tonight we'll just display: {this.props.params.id}</h1>);
    }
    else {
      comments = false;
    }
    return comments;
  }
}

export default CommentsView;
