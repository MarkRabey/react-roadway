import React from 'react';
import PropTypes from 'prop-types';
import { createHistory } from './utils';

const createRouter = (WrappedComponent) => {
  class Router extends React.Component {
    constructor({ routes, pathname }) {
      super();
      this.state = {
        history: {},
        location: {},
      };

      this.updateHistory = this.updateHistory.bind(this);
      this.unlisten = () => {};
    }

    getChildContext () {
      return this.state;
    }

    componentDidMount() {
      const history = createHistory(this.props.options);
      const { location } = history;
      this.setState({ history, location });
      this.unlisten = history.listen(this.updateHistory);
    }

    componentWillUnmount () {
      this.unlisten()
    }

    createHistory() {
      let history = {};
    }

    updateHistory(location) {
      this.setState({ location });
    }

    render() {
      return <WrappedComponent { ...this.props } { ...this.state } />;
    }
  }

  Router.childContextTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  }

  Router.propTypes = {
    options: PropTypes.object,
  };

  return Router;
}

export default createRouter;