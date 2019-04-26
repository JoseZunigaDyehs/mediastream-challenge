import React, { Component } from 'react'
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import MoviesList from '../movies/movies-list';
import IsFetching from '../modules/is-fetching';
import Error from '../modules/error';

export default class Main extends Component {
  shouldComponentUpdate = (nextProps) => {
    return (
      !Immutable.is(nextProps.reviewStates,this.props.reviewStates) ||
      !Immutable.is(nextProps.reviewStates,this.props.reviewStates)
    )
  }
  componentWillMount = () => {
    this.props.getPopularMovies();
  }
  content = () => {
    const { moviesStates } = this.props,
      error = moviesStates.get('error'),
      isFetching = moviesStates.get('isFetching');
    if (error !== "") {
      return <Error error={error} />;
    }
    return (
      <IsFetching isFetching={isFetching}>
        <MoviesList {...this.props}></MoviesList>
      </IsFetching>
    )
  }
  render() {
    return this.content();
  }
}

Main.propTypes = {
  moviesStates: PropTypes.any.isRequired,
  reviewStates: PropTypes.any.isRequired,
}