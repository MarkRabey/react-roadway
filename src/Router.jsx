import React from 'react';
import PropTypes from 'prop-types';
import createRouter from './createRouter';

const Router = ({ history, location, ...props }) => (
  <div { ...props } />
);

Router.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

Router.defaultProps = {
  history: {},
  location: {},
};

export default createRouter(Router);
