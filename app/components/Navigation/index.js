/**
 *
 * Navigation
 *
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import NavLink from 'components/NavLink';

import { links } from './links';

import styles from './styles.css';

export class Navigation extends Component {
  render() {
    const { className, linkStyles, icon } = this.props;
    const navLinks = links.map(({ text, to, isIndex = false }) => (
      <NavLink
        key={text}
        text={text}
        to={to}
        isIndex={isIndex}
        styles={linkStyles}
        icon={icon}
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
};

export default Navigation;
