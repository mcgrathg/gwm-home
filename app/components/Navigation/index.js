/**
*
* Navigation
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Image, Grid, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import Logo from './gmg6.png';

import styles from './styles.css';

function Navigation({ currentRoute }) {
  const currentPath = currentRoute.path;
  return (
    <Grid className={styles.navigation}>
      <Row className={classNames('container', styles.navigationRow)}>
        <Col xs={4} sm={2} md={4} className={styles.logoWrapper}>
          <IndexLinkContainer to="/">
            <NavItem>
              <Image className={styles.logo} src={Logo} alt="Greg McGrath -  Logo" />
            </NavItem>
          </IndexLinkContainer>
        </Col>
        <Col xs={8} sm={10} md={8} className={styles.navlinksCol}>
          <Nav pullRight justified bsStyle="tabs">
            <IndexLinkContainer to="/" active={currentPath === '/'}>
              <NavItem>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/resume" active={currentPath === '/resume'}>
              <NavItem>Resume</NavItem>
            </LinkContainer>
            <LinkContainer to="/portfolio" active={currentPath === '/portfolio'}>
              <NavItem>Portfolio</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact" active={currentPath === '/contact'}>
              <NavItem>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Col>
      </Row>
    </Grid>
  );
}

Navigation.propTypes = {
  currentRoute: PropTypes.object,
};

export default Navigation;
