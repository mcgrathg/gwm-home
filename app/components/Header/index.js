/**
* Header
*
*/

import React from 'react';
import classNames from 'classnames';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import { IndexLink } from 'react-router';

import Navigation from 'containers/Navigation';
import Logo from './gmg-brackets.png';

import styles from './styles.css';

function Header() {
  return (
    <div className={classNames(styles.header, 'header')}>
      <Grid>
        <Row>
          <Col sm={5} md={4}>
            <IndexLink to="/">
              <Image responsive className={styles.logo} src={Logo} alt="Greg McGrath -  Logo" />
            </IndexLink>
          </Col>
          <Col sm={7} md={8}>
            <Navigation navGroupClass={styles.navGroup} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Header;
