/**
*
* Navigation
*
*/

import React from 'react';

import { Image, Grid, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import Logo from './logo.png';

import styles from './styles.css';

function Navigation() {
  return (
    <Grid className={styles.navigation}>
      <Row className={styles.navigationRow}>
        <Col xs={4} sm={2} md={2} className={styles.logoWrapper}>
          <IndexLinkContainer to="/">
            <NavItem>
              <Image className={styles.logo} src={Logo} alt="Greg McGrath -  Logo" />
            </NavItem>
          </IndexLinkContainer>
        </Col>
        <Col xs={8} sm={10} md={10}>
          <Nav pullRight justified bsStyle="tabs" className={styles.navlinks}>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/resume">
              <NavItem eventKey={2}>Resume</NavItem>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <NavItem eventKey={2}>Portfolio</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem eventKey={2}>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Col>
      </Row>
    </Grid>
  );
}

export default Navigation;
