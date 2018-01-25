/*
 *
 * HomePage
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectWindowWidth } from 'containers/App/selectors';

import IntroductionCard from './introductionCard';

import styles from './styles.css';

export class HomePage extends PureComponent {
  render() {
    return (
      <div className={styles.homePage}>
        <IntroductionCard windowWidth={this.props.windowWidth} />
      </div>
    );
  }
}

HomePage.propTypes = {
  windowWidth: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  windowWidth: makeSelectWindowWidth(),
});

export default connect(mapStateToProps)(HomePage);
