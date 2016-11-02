/*
 *
 * HomePage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import { Image, Grid, Row, Col } from 'react-bootstrap';

import H1 from 'components/H1';
import Profile from './profile.jpg';
import SocialBar from 'components/SocialBar';

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
                <H1>
                  Hello!
                </H1>
                <Row>
                  <Col xs={2}>
                    <Image circle className={styles.logo} src={Profile} alt="Greg McGrath" />
                  </Col>
                  <Col xs={10}>
                    <p className={classNames('lead', styles.lead)}>
                      Hello! I&apos;m Greg McGrath and I am a software developer with over 9 years of professional experience specializing in the front end and web applications.
                    </p>
                    <p className={classNames('lead', styles.lead)}>
                      I&apos;m adept at problem solving, have a passion for details, can handle ambitious deadlines, and am a strong team player.
                    </p>
                    <p className={classNames('lead', styles.lead)}>
                      I love reading to my son, playing fetch with my Jack Russells, and supporting the Chicago Cubs and AC Milan.
                    </p>
                    <p className={classNames('lead', styles.lead)}>
                      I live in Ballston Spa in Upstate New York.
                    </p>
                    <p className={classNames('lead', styles.lead)}>
                      If you’d like to get in touch, feel free to say hello through any of the social links below or messaging me through my website.
                    </p>
                  </Col>
                </Row>
              </Grid>
              <SocialBar className={styles.social} liClassName={styles.socialListItem} />
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
