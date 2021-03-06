/**
 *
 * Navigation
 *
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLocationState } from 'containers/App/selectors';

import NavLink from 'components/NavLink';

import { links } from './links';

import styles from './styles.css';

export class Navigation extends Component {
  render() {
    const { className, linkStyles, icon, location } = this.props;
    const { pathname } = location.locationBeforeTransitions;
    const navLinks = links.map(({ text, to, isIndex = false }) => (
      <NavLink
        key={text}
        text={text}
        to={to}
        isIndex={isIndex}
        styles={linkStyles}
        icon={icon}
        location={location}
        currentPath={pathname}
      />
    ));

    return (
      <nav className={classNames(styles.navigation, className)}>{navLinks}</nav>
    );
  }
}

Navigation.propTypes = {
  className: PropTypes.string,
  linkStyles: PropTypes.object,
  icon: PropTypes.node,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  location: selectLocationState(),
});

export default connect(mapStateToProps)(Navigation);
