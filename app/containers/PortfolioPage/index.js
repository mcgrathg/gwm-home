/*
 *
 * PortfolioPage
 *
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';

import Videos from 'containers/Videos';
import H2 from 'components/H2';
import HeaderIcon from 'components/HeaderIcon';
import Card from 'components/Card';
import SocialBar from 'components/SocialBar';
import CenteredButtonToolbar from 'components/CenteredButtonToolbar';

import styles from './styles.css';

export class PortfolioPage extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.portfolioPage}>
        <Helmet
          title="Portfolio"
          meta={[
            { name: 'description', content: 'Description of PortfolioPage' },
          ]}
        />
        <SocialBar className={styles.social} liClassName={styles.socialListItem} />
        <article className={classNames('container', styles.portfolioPage)}>
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
              Demo Example
            </H2>
            <Card>
              <CenteredButtonToolbar>
                <a
                  className={styles.btnLink}
                  href="http://gwmextjs.surge.sh/"
                  target="_blank"
                >
                  <Button className={classNames('center-block')}>
                    Live Demo
                    <i className={classNames('fa fa-external-link', styles.icon)} />
                  </Button>
                </a>
                <a
                  className={styles.btnLink}
                  href="https://github.com/mcgrathg/sample-extjs"
                  target="_blank"
                >
                  <Button className={classNames('center-block')}>
                    Git Repo
                    <i className={classNames('fa fa-github-alt', styles.icon)} />
                  </Button>
                </a>
                <a
                  className={styles.btnLink}
                  href="http://gwm-docs.surge.sh/"
                  target="_blank"
                >
                  <Button className={classNames('center-block')}>
                    Documentation
                    <i className={classNames('fa fa-book', styles.icon)} />
                  </Button>
                </a>

              </CenteredButtonToolbar>
              <p className="lead">Some text here...</p>
            </Card>
          </section>
        </article>
      </div>
    );
  }
}

export default PortfolioPage;
