import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import Splashpage from "./Views/splashpage";
import Header from "./Views/header";
import Signuppage from "./Views/signuppage";
import Homepage from "./Views/homepage";
import Signinpage from "./Views/signinpage";
import Footer from "./Views/footer";
import Notfoundpage from "./Views/notfoundpage";
import CommentsView from "./Views/commentsview";
import Goal from "./Models/goal";
import UserView from "./Views/userView";

class App extends React.Component{
  constructor(props){
    super(props)

    this.render = this.render.bind(this);
  }

  render(){
    return(
      <div className="appContainer">
        <Header appRender = {this.render}/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App} >
      <IndexRoute component={Splashpage} />
      <Route path="home" component={Homepage} >
        <Route path="goals/:id" component={CommentsView} />
      </Route>
      <Route path="users/:userId" component={UserView}>
        <Route path="goals/:id" component={CommentsView} />
      </Route>
      <Route path="signup" component={Signuppage} />
      <Route path="signin" component={Signinpage} />
    </Route>
    <Route path="*" component={Notfoundpage} />
  </Router>
), document.getElementById('app'));

export default App;
