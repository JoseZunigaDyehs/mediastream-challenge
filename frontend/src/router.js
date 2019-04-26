import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import * as actions from "./actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Main from "./components/main/Main";
import MoviesFavs from './components/movies/movie-favs';
import MovieDetails from './components/movies/movie-details';
import NotFound from "./components/not-found/NotFound";
import Header from "./components/header/Header";

export class Router extends Component {
  getContent() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header {...this.props} />
          <Switch>
            <Route
              key="home"
              exact
              path="/"
              render={props => {
                return <Main {...this.props} {...props} />;
              }}
            />
            <Route
              key="detail-movie"
              exact
              path="/movie/:id"
              render={props => {
                return <MovieDetails {...this.props} {...props} />;
              }}
            />
            <Route
              key="favs"
              exact
              path="/favs/"
              render={props => {
                return <MoviesFavs {...this.props} {...props} />;
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
  render() {
    return this.getContent();
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router);
