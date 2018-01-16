/*
 *
 * HomePage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';

import { selectWindowWidth } from 'containers/App/selectors';

import styles from './styles.css';
import IntroductionCard from './introductionCard';
import ResumePage from 'containers/ResumePage';
import PortfolioPage from 'containers/PortfolioPage';
import ContactPage from 'containers/ContactPage';

export class HomePage extends Component {
  render() {
    return (
      <div className={styles.homePage}>
        <Helmet
          titleTemplate="Greg McGrath - Software Developer"
          meta={[{ name: 'description', content: 'Description of HomePage' }]}
        />
        <div>
          <IntroductionCard windowWidth={this.props.windowWidth} />
          <ResumePage />
          <PortfolioPage />
          <ContactPage />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  windowWidth: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  windowWidth: selectWindowWidth(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
