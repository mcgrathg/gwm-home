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

function Navigation({ className, liClassName, ...rest }) {
  const navLinks = links.map(({ text, to, isIndex = false }) => (
    <NavLink
      key={text}
      text={text}
      to={to}
      isIndex={isIndex}
      className={classNames(styles.navLink, liClassName)}
    />
  ));

  return (
    <nav
      className={classNames(styles.navigation, className)}
      {...rest}
    >
      <ul className={classNames(styles.navGroup, 'text-center', 'list-inline')}>
        {navLinks}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
  liClassName: PropTypes.string,
};

export default Navigation;
