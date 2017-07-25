import React from 'react';
import PropTypes from 'prop-types';
import { matchRoute } from './utils';

const createRoute = (WrappedComponent) => {
  const RouteComponent = ({ match, ...props }, { history, location }) => {
    const matched = matchRoute(match, location);
    if (match && !matched) return null;
    return (
      <WrappedComponent
        { ...props }
        history={ history }
        location={ location }
        params={ matched.params }
        search={ matched.search }
      />
    );
  };

  RouteComponent.propTypes = {
    match: PropTypes.string,
  };

  RouteComponent.defaultProps = {
    match: '/',
  };

  RouteComponent.contextTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  };

  return RouteComponent;
};

export default createRoute;
