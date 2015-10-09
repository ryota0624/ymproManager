import React from "react";
import { Router, Route, Link, IndexRoute } from "react-router";
import UserPage from "../src/components/user/UserPage.js";
import EssayPage from "../src/components/essay/EssayPage.js";
import essayActions from "./actions/essayActions.js";
import userActions from "./actions/userActions.js";


class App extends React.Component {
  componentWillMount(){
    essayActions.fetch();
    userActions.fetch();
  }
  render() {
    return (
      <div>
        <h1>DB APP</h1>
        <Link to="/">users</Link>
        <Link to="/essays">essay</Link>
        { this.props.children }
      </div>
    )
  }
}

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={UserPage} />
    <Route path="essays" component={EssayPage} />
  </Route>
);

React.render(
  <Router>
    { routes }
  </Router>, document.getElementById("root")
);
