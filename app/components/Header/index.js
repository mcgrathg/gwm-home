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

function Header({ currentRoute, ...rest }) {
  return (
    <div className={classNames(styles.header)}>
      <Grid className="container">
        <Row>
          <Col sm={4} className={styles.logoContainer}>
            <IndexLink to="/">
              <Image responsive className={styles.logo} src={Logo} alt="Greg McGrath -  Logo" />
            </IndexLink>
          </Col>
          <Col sm={8}>
            <Navigation currentRoute={currentRoute} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  currentRoute: PropTypes.object.isRequired,
};

export default Header;
