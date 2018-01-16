/*
 *
 * PortfolioPage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';

import { selectIsSmallDevice } from 'containers/App/selectors';

import Videos from 'containers/Videos';
import H2 from 'components/H2';
import HeaderIcon from 'components/HeaderIcon';
import Card from 'components/Card';
import CardBody from 'components/CardBody';
import SocialBar from 'components/SocialBar';
import CenteredButtonToolbar from 'components/CenteredButtonToolbar';

import { intro, demo } from './text';

import btnStyle from 'containers/App/buttons.css';
import styles from './styles.css';

export class PortfolioPage extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const screenSizeWarning = this.props.isSmallDevice ? (
      <p className={classNames(styles.demoWarning, 'text-center')}>
        Demo is not yet optimized for small devices
      </p>
    ) : (
      undefined
    );

    return (
      <div className={styles.portfolioPage}>
        <Helmet
          title="Examples"
          meta={[
            { name: 'description', content: 'Description of PortfolioPage' },
          ]}
        />
        <div className={styles.introCard}>
          <div className="container">
            <SocialBar className={styles.social} />
            {intro.map((txt, idx) => (
              <p key={idx} className={classNames('lead', styles.lead)}>
                {txt}
              </p>
            ))}
          </div>
        </div>
        <article className={classNames('container', styles.portfolioPage)}>
          <section className={styles.videoList}>
            <H2>
              <HeaderIcon className="fa-video-camera" />
              Video Examples
            </H2>
            <Videos />
          </section>
        </article>
      </div>
    );
  }
}

PortfolioPage.propTypes = {
  isSmallDevice: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isSmallDevice: selectIsSmallDevice(),
});

export default connect(mapStateToProps)(PortfolioPage);
