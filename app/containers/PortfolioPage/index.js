/*
 *
 * PortfolioPage
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import { Button, ButtonToolbar, Row, Col } from 'react-bootstrap';

import H1 from 'components/H1';
import H2 from 'components/H2';
import Card from 'components/Card';
import CenteredButtonToolbar from 'components/CenteredButtonToolbar';
import Videos from 'containers/Videos';


import styles from './styles.css';

export class PortfolioPage extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article className={styles.portfolioPage}>
        <Helmet
          title="Portfolio Page"
          meta={[
            { name: 'description', content: 'Description of PortfolioPage' },
          ]}
        />
        <H1 className="page-header">
          Portfolio
          <i className="fa fa-file-text text-muted" />
        </H1>
        <section className={styles.technicalSkills}>
          <H2 className="text-center">
            Demo
            <i className="fa fa-video text-muted" />
          </H2>
          <p className="lead">Some text here...</p>
          <CenteredButtonToolbar className={styles.resumeButtons}>
            <Row>
              <Col sm={6} className={styles.col}>
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
              </Col>
              <Col sm={6} className={styles.col}>
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
              </Col>
            </Row>
          </CenteredButtonToolbar>

        </section>
        <section className={styles.technicalSkills}>
          <H2 className="text-center">
            Video Examples
            <i className="fa fa-video text-muted" />
          </H2>
          <Videos />
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
