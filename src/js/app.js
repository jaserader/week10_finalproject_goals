import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import Homepage from "./homepage";
import Header from "./header";

class App extends React.Component{

  render(){
    return(
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App} >
      <IndexRoute component={Homepage} />
    </Route>
  </Router>
), document.getElementById('app'));

export default App;
