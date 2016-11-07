/*
 *
 * HomePage
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import { Image, Grid, Row, Col, Button } from 'react-bootstrap';

import { Link } from 'react-router';

import H1 from 'components/H1';
import Profile from './profile.jpg';
import SocialBar from 'components/SocialBar';

import { intro } from './text';

import styles from './styles.css';

export class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.homePage}>
        <Helmet
          titleTemplate="Greg McGrath - Software Developer"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
        <article>
          <div>
            <section className={classNames(styles.textSection, styles.centered)}>
              <Grid className={styles.intro}>
                <Row className={styles.rowEqualHeight}>
                  <Col sm={3} className={styles.leftCol}>
                    <Image responsive circle className={styles.profile} src={Profile} alt="Greg McGrath" />
                    <SocialBar className={styles.social} liClassName={styles.socialListItem} />
                  </Col>
                  <Col sm={9}>
                    <H1 className="header">
                      Hello!
                    </H1>
                    { intro.map((txt, idx) => <p key={idx} className={classNames('lead', styles.lead)}>{txt}</p>) }
                  </Col>
                </Row>
                <div className="text-center">
                  <Link to="/contact"><Button className={styles.circle}>Contact Me</Button></Link>
                </div>
              </Grid>
            </section>
          </div>
        </article>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
