/**
*
* NavLink
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link, IndexLink } from 'react-router';

import defaultStyles from './styles.css';

function NavLink({ text, to, isIndex, className, icon, currentPath, styles = defaultStyles }) {
  const isActive = to === currentPath;
  const linkProps = {
    className: classNames(styles.navLink, isActive ? styles.activeLink : styles.inactiveLink),
    to,
  };

  const link = (
    isIndex ?
      <IndexLink {...linkProps}>{icon}{text}</IndexLink> :
      <Link {...linkProps}>{icon}{text}</Link>
  );

  return (
    <li className={classNames(className, styles.navListItem, 'header')}>
      {link}
    </li>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  className: PropTypes.string,
  isIndex: PropTypes.bool,
  styles: PropTypes.object,
  icon: PropTypes.node,
};

export default NavLink;
