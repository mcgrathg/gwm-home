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

function Navigation({ currentRoute, className, liClassName, ...rest }) {
  const navLinks = links.map(({ text, to, isIndex = false }) => {
    const linkClassName = (
      (currentRoute.path === to) ?
      classNames(styles.navLink, styles.active, liClassName) :
      classNames(styles.navLink, liClassName)
    );

    return (
      <NavLink
        key={text}
        text={text}
        to={to}
        isIndex={isIndex}
        className={linkClassName}
      />
    );
  });

  return (
    <div
      className={classNames(styles.navigation, className)}
      {...rest}
    >
      <ul className={classNames(styles.navGroup, 'text-center', 'list-inline')}>
        {navLinks}
      </ul>
    </div>
  );
}

Navigation.propTypes = {
  currentRoute: PropTypes.object.isRequired,
  className: PropTypes.string,
  liClassName: PropTypes.string,
};

export default Navigation;
