/**
*
* Navigation
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import NavLink from 'components/NavLink';

import { links } from './links';

import styles from './styles.css';

function Navigation({ className, navGroupClass, linkStyles, icon }) {
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
    <nav className={classNames(styles.navigation, className)}>
      <ul className={classNames(styles.navGroup, navGroupClass, 'list-inline')}>
        {navLinks}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
  navGroupClass: PropTypes.string,
  linkStyles: PropTypes.object,
  icon: PropTypes.node,
};

export default Navigation;
