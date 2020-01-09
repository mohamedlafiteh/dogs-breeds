import React, { Component } from "react";
import Main from "./components/main/Main";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import ErrorPage from "./components/errorPage/ErrorPage";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/About' component={About} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
