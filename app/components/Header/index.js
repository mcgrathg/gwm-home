/**
 * Header
 *
 */

import React from 'react';
import { Image } from 'react-bootstrap';
import { IndexLink } from 'react-router';
import Navigation from 'containers/Navigation';
import Logo from './logo.png';
import styles from './styles.css';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.wrapper}>
      <IndexLink to="/" className={styles.logo}>
        <Image responsive src={Logo} alt="Greg McGrath -  Logo" />
      </IndexLink>
      <Navigation
        className={styles.navigation}
        navGroupClass={styles.navGroup}
      />
    </div>
  </div>
);

export default Header;
