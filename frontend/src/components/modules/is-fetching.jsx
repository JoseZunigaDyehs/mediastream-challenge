import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Muestra loader o su children
export default class IsFetching extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.isFetching !== nextProps.isFetching ||
      this.props.error !== nextProps.error ||
      this.props.children !== nextProps.children
    )
  }
  getContent() {
    const { isFetching } = this.props;
    let content, children, boxLoader;

    if (isFetching) {
      boxLoader = <div className="loader"></div>
      content = (
        <React.Fragment>
          {children}
          {boxLoader}
        </React.Fragment>
      );
    } else {
      content = this.props.children;
    }

    return content;
  }
  render() {
    const content = this.getContent();

    return content;
  }
}

IsFetching.propTypes = {
  isFetching: PropTypes.bool,
  errorFunc: PropTypes.func,
  children: PropTypes.any,
}