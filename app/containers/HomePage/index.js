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


export class HomePage extends Component {
  render() {
    return (
      <div className={styles.homePage}>
        <Helmet
          titleTemplate="Greg McGrath - Software Developer"
          meta={[{ name: 'description', content: 'Description of HomePage' }]}
        />
        <div className={'container'}>
          <IntroductionCard windowWidth={this.props.windowWidth} />
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
