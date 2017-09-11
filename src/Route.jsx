import React from 'react';
import PropTypes from 'prop-types';
import createRoute from './createRoute';

const Route = ({
  params,
  search,
  history,
  location,
  ...props
}) => (
  <div { ...props } />
);

Route.propTypes = {
  params: PropTypes.object,
  search: PropTypes.string,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

Route.defaultProps = {
  params: {},
  search: null,
};


export default createRoute(Route);
