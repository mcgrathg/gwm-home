/**
*
* Header
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import { IndexLink } from 'react-router';

import Navigation from 'components/Navigation';
import Logo from './gmg-brackets.png';

import styles from './styles.css';

function Header() {
  return (
    <div className={classNames(styles.header)}>
      <Grid className="container">
        <Row className={styles.row}>
          <Col sm={4} className={styles.logoCol}>
            <IndexLink to="/">
              <Image responsive className={styles.logo} src={Logo} alt="Greg McGrath -  Logo" />
            </IndexLink>
          </Col>
          <Col sm={8} className={styles.navCol}>
            <Navigation />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Header;
