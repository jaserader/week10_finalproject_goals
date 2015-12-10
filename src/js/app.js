import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import Splashpage from "./splashpage";
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
      <IndexRoute component={Splashpage} />
    </Route>
  </Router>
), document.getElementById('app'));

export default App;
