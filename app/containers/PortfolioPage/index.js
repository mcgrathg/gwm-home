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

import { selectIsSmallDevice } from 'containers/App/selectors';

import Videos from 'containers/Videos';
import H2 from 'components/H2';
import HeaderIcon from 'components/HeaderIcon';
import SocialBar from 'components/SocialBar';

import { intro } from './text';

import styles from './styles.css';

export class PortfolioPage extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
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
