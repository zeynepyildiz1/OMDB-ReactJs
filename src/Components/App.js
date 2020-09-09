import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import movieTable from "./movieTable";
import MovieDetail from "./MovieDetail";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Switch>
            <Route path="/movie" component={MovieDetail} />
            <Route exact path="/" component={movieTable} />
          </Switch>
        </div>
      </div>
    );
  }
}
