/**
*
* Navigation
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Button, Image, Grid, Row, Col, Nav, NavItem } from 'react-bootstrap';
// import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
//
import { Link, IndexLink } from 'react-router';


import Logo from './gmg-brackets.png';
// import Logo from './gmg-dbl-braces.png';

import styles from './styles.css';

function Navigation({ currentRoute }) {
  const currentPath = currentRoute.path;
  return (
    <div className={classNames(styles.navigation)}>
      <div className="container">
        <div className={classNames(styles.fixedCol, 'pull-left')}>
          <IndexLink to="/">
            <Image responsive className={styles.logo} src={Logo} alt="Greg McGrath -  Logo" />
          </IndexLink>
        </div>
        <Row className={classNames(styles.fluidCol)}>
          <Col sm={3}>
            <IndexLink to="/" >
              Home
            </IndexLink>
          </Col>
          <Col sm={3}>
            <Link to="/resume" >
              Resume
            </Link>
          </Col>
          <Col sm={3}>
            <Link to="/portfolio" >
              Portfolio
            </Link>
          </Col>
          <Col sm={3}>
            <Link to="/contact" >
              Contact
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  currentRoute: PropTypes.object,
};

export default Navigation;
