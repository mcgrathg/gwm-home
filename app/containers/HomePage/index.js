/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { Image, Row, Col } from 'react-bootstrap';

import H2 from 'components/H2';

import Profile from './profile.jpg';

import styles from './styles.css';

export function HomePage() {
  return (
    <article>
      <Helmet
        title="Home"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application homepage' },
        ]}
      />
      <div>
        My Test
        <section className={`${styles.textSection} ${styles.centered}`}>
          <H2>
            Hello!
          </H2>
          <Row>
            <Col xs={6}>
              <Image className={styles.logo} src={Profile} alt="Greg McGrath" />
            </Col>
            <Col xs={6}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Col>
          </Row>
        </section>
      </div>
    </article>
  );
}

HomePage.propTypes = {

};
