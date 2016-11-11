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
import Card from 'components/Card';
import CenteredButtonToolbar from 'components/CenteredButtonToolbar';

import { intro } from './text';

import {
  RESUME_DOWNLOAD_URL,
} from 'containers/App/constants';


import btnStyle from 'containers/App/buttons.css';
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
        <Grid className={styles.grid}>
          <Row>
            <Col md={12}>
              <div className={classNames(styles.profile, 'center-block')}>
                <Image responsive circle className={styles.profileImg} src={Profile} alt="Greg McGrath" />
              </div>
              <Card className={styles.introCard}>
                <SocialBar className={styles.social} liClassName={styles.socialListItem} />
                <div className={classNames(styles.intro)}>
                  <H1>
                    Hello! I&apos;m Greg McGrath.
                  </H1>
                  { intro.map((txt, idx) => <p key={idx} className={classNames('lead', styles.lead)}>{txt}</p>) }
                </div>
                <CenteredButtonToolbar>
                  <Link to="/examples">
                    <Button className={btnStyle.examplesBtn}>View Work Examples</Button>
                  </Link>
                  <Link to="/contact">
                    <Button className={btnStyle.contactBtn}>Send Me a Message</Button>
                  </Link>
                </CenteredButtonToolbar>
              </Card>
            </Col>
          </Row>
        </Grid>
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
