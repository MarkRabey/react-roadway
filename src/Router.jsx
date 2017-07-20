import React from 'react';
import PropTypes from 'prop-types';
import createBrowserHistory from 'history/createBrowserHistory';

const createHistory = (options) => {
  let history = {};
  history.listen = () => {};
  history.push = () => {};

  if (typeof document !== 'undefined') {
    history = createBrowserHistory(options);
  }

  return history;
}

const Router = (Component) => {
  class RouterComponent extends React.Component {
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

    updateHistory(location) {
      this.setState({ location });
    }

    render() {
      return <Component { ...this.props } { ...this.state } />;
    }
  }

  RouterComponent.childContextTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  }

  RouterComponent.propTypes = {
    options: PropTypes.object,
  };

  return RouterComponent;
}

export default Router;