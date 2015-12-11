import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import Splashpage from "./Views/splashpage";
import Header from "./Views/header";
import Signuppage from "./Views/signuppage";
import Homepage from "./Views/homepage";
import Signinpage from "./Views/signinpage";

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
      <Route path="home" component={Homepage} />
      <Route path="signup" component={Signuppage} />
      <Route path="signin" component={Signinpage} />
    </Route>
  </Router>
), document.getElementById('app'));

export default App;
