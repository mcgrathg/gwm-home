/**
*
* NavLink
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link, IndexLink } from 'react-router';

import styles from './styles.css';

function NavLink({ text, to, isIndex, className }) {
  const linkProps = {
    to,
    className: styles.navLink,
    activeClassName: styles.active,
  };

  const link = (
    isIndex ?
      <IndexLink {...linkProps}>{text}</IndexLink> :
      <Link {...linkProps}>{text}</Link>
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
  className: PropTypes.string,
  isIndex: PropTypes.bool,
};

export default NavLink;
