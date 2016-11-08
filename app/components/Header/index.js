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
      <Grid>
        <Row>
          <Col sm={4}>
            <IndexLink to="/">
              <Image responsive src={Logo} alt="Greg McGrath -  Logo" />
            </IndexLink>
          </Col>
          <Col sm={8}>
            <Navigation />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Header;
