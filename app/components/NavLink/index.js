/**
*
* NavLink
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link, IndexLink } from 'react-router';

import styles from './styles.css';

function NavLink({ text, to, isIndex, className, ...rest }) {
  const link = (
    isIndex ?
      <IndexLink to={to} className={styles.navLink}>{text}</IndexLink> :
      <Link to={to} className={styles.navLink}>{text}</Link>
  );

  return (
    <li
      className={classNames(className, styles.navListItem)}
      {...rest}
    >
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
