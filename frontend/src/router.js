import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import * as actions from "./actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Main from "./components/main/Main";
import NotFound from './components/not-found/NotFound';
import Header from './components/header/Header';


export class Router extends Component {
  getContent() {
    return (
      <BrowserRouter basename="/admin">
        <div>
          <Header {...this.props} />
          <div className="main-content">
            <Switch>
              <Route
                key="home"
                exact
                path="/"
                render={props => {
                  return <Main {...this.props} {...props} />;
                }}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
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
