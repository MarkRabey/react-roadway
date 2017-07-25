import React from 'react';
import PropTypes from 'prop-types';
import createRouter from './createRouter';

const Router = ({ history, location, ...props }) => (
  <div { ...props } />
);

Router.propTypes = {
  history: PropTypes.func.isRequired,
  location: PropTypes.func.isRequired,
};

export default createRouter(Router);
