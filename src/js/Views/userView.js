import React, { PropTypes } from 'react'

class UserView extends React.Component {
  render () {
    return(
      <div><h1>this is your user id: {this.props.params.userId}</h1></div>
    )
  }
}

export default UserView;
