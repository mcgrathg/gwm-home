/*
 *
 * PortfolioPage
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import { Button, ButtonToolbar } from 'react-bootstrap';

import H2 from 'components/H2';
import HeaderIcon from 'components/HeaderIcon';
import Card from 'components/Card';
import CenteredButtonToolbar from 'components/CenteredButtonToolbar';
import Videos from 'containers/Videos';


import styles from './styles.css';

export class PortfolioPage extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article className={classNames('container', styles.portfolioPage)}>
        <Helmet
          title="Portfolio"
          meta={[
            { name: 'description', content: 'Description of PortfolioPage' },
          ]}
        />
        <section className={styles.videoList}>
          <H2>
            <HeaderIcon className="fa-video-camera" />
            Video Examples
          </H2>
          <Videos />
        </section>
        <section className={styles.demo}>
          <H2>
            <HeaderIcon className="fa-desktop" />
            Demo
          </H2>
          <Card>
            <p className="lead">Some text here...</p>
            <CenteredButtonToolbar className={styles.resumeButtons}>
              <a
                className={styles.btnLink}
                href="http://gwmextjs.surge.sh/"
                target="_blank"
              >
                <Button
                  className={classNames(styles.demoButton, 'center-block')}
                  bsStyle="primary"
                >
                  View ExtJS Demo
                </Button>
              </a>
              <a
                className={styles.btnLink}
                href="http://gwm-docs.surge.sh/"
                target="_blank"
              >
                <Button
                  className={classNames(styles.demoButton, 'center-block')}
                >
                  View Demo&apos;s Documentation
                </Button>
              </a>
            </CenteredButtonToolbar>
          </Card>
        </section>
        <section>
          <Card className={styles.introCard}>
            <ButtonToolbar className={styles.resumeButtons}>
              <Button bsStyle="success">Download Resume</Button>
              <Button bsStyle="success">Contact Me</Button>
            </ButtonToolbar>
          </Card>
        </section>
      </article>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(PortfolioPage);
