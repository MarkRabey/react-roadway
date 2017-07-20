import React from 'react';
import PropTypes from 'prop-types';
import { matchRoute } from './utils';

const Route = (Component) => {
  class RouteComponent extends React.Component {
    render () {
      const { match, ...props } = this.props;
      const { history, location } = this.context;

      const matched = matchRoute(match, location);
      if (match && !matched) return null;

      return (
        <Component
          { ...props }
          history={ history }
          location={ location }
          params={ matched.params }
          search={ matched.search }
        />
      );
    }
  }

  RouteComponent.contextTypes = {
    history: PropTypes.object,
    location: PropTypes.object
  };

  return RouteComponent;
}

export default Route;