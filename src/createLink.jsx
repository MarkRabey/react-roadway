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
      const { scroll } = this.props;

      return (e) => {
        e.preventDefault();
        history.push(href);
        if (scroll !== false) {
          window.scrollTo(0, 0);
        }
      };
    }

    render() {
      const { href, scroll, ...props } = this.props;

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
    href: PropTypes.string,
  };

  Link.defaultProps = {
    scroll: true,
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
