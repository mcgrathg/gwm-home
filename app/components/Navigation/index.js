/**
*
* Navigation
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import { Link, IndexLink } from 'react-router';

import Logo from './gmg-brackets.png';

import styles from './styles.css';

function Navigation({ currentRoute }) {
  const currentPath = currentRoute.path;
  return (
    <div className={classNames(styles.navigation)}>
      <Grid className="container">
        <Row>
          <Col sm={4} className={styles.logoContainer}>
            <IndexLink to="/">
              <Image responsive className={styles.logo} src={Logo} alt="Greg McGrath -  Logo" />
            </IndexLink>
          </Col>
          <Col sm={8}>
            <Row className={classNames(styles.fluidCol)}>
              <Col xs={3}>
                <IndexLink to="/" >
                  Home
                </IndexLink>
              </Col>
              <Col xs={3}>
                <Link to="/resume" >
                  Resume
                </Link>
              </Col>
              <Col xs={3}>
                <Link to="/portfolio" >
                  Portfolio
                </Link>
              </Col>
              <Col xs={3}>
                <Link to="/contact" >
                  Contact
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

Navigation.propTypes = {
  currentRoute: PropTypes.object,
};

export default Navigation;
