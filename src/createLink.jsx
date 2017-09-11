import React from 'react';
import PropTypes from 'prop-types';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const createLink = (WrappedComponent) => {
  class Link extends React.Component {
    constructor() {
      super();
      this.onClick = this.onClick.bind(this);
    }

    onClick(href) {
      const { history } = this.context;
      const { noscroll } = this.props;

      return (e) => {
        e.preventDefault();
        history.push(href);
        if (!noscroll) {
          window.scrollTo(0, 0);
        }
      };
    }

    render() {
      const { href, scroll, noscroll, ...props } = this.props;

      if (!scroll) {
        console.warn('The property `scroll` has been deprecated as of version 0.3.0. To disable automatically scrolling to the top, add the `noscroll` prop.');
      }

      return (
        <WrappedComponent
          { ...props }
          href={ href }
          onClick={ this.onClick(href) }
        />
      );
    }
  }

  Link.propTypes = {
    scroll: PropTypes.bool,
    noscroll: PropTypes.bool,
    href: PropTypes.string,
  };

  Link.defaultProps = {
    scroll: true,
    noscroll: false,
    href: null,
  };

  Link.contextTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  };

  Link.displayName = `createLink(${ getDisplayName(WrappedComponent) })`;

  return Link;
};

export default createLink;
