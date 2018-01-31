/**
 * Header
 *
 */

import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'rc-scroll-anim';
import classNames from 'classnames';
import Navigation from 'components/Navigation';
import Logo from './logo.png';
import styles from './styles.css';

const Header = () => (
  <div className={classNames('header', styles.header)}>
    <div className={classNames('container', styles.wrapper)}>
      <Link to="home" className={styles.logo}>
        <Image responsive src={Logo} alt="Greg McGrath -  Logo" />
      </Link>
      <Navigation
        className={styles.navigation}
        navGroupClass={styles.navGroup}
      />
    </div>
  </div>
);

export default Header;
