import React, { PropTypes } from 'react'

class CommentsView extends React.Component {
  render () {
    return (
    <h1>This is your goal id: {this.props.params.id}</h1>
    );
  }
}

export default CommentsView;
