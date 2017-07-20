import React from 'react';
import PropTypes from 'prop-types';

export default class Link extends React.Component {
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
    }
  }

  render() {
    const { href, ...props } = this.props; 
    return (
      <a { ...props } href={ href } onClick={ this.onClick(href) } />
    );
  }
}

Link.contextTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
