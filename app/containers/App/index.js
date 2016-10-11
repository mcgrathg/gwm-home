/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

import Footer from 'components/Footer';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import styles from './styles.css';

function App(props) {
  return (
    <div className={classNames('container', styles.wrapper)}>
      <Helmet
        titleTemplate="%s - Greg McGrath - Front End Developer"
        defaultTitle=" Greg McGrath - Front End Developer"
        meta={[
          { name: 'description', content: 'Greg McGrath\'s Site' },
        ]}
      />
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLinkContainer to="/">
              <a>React-Bootstrap</a>
            </IndexLinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight bsStyle="tabs">
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
        </Navbar.Collapse>
      </Navbar>

      {React.Children.toArray(props.children)}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
