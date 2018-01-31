/*
 *
 * HomePage
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import QueueAnim from 'rc-queue-anim';
import { makeSelectWindowWidth } from 'containers/App/selectors';

import IntroductionCard from './introductionCard';

import styles from './styles.css';

export class HomePage extends PureComponent {
  render() {
    return (
      <QueueAnim
        className={styles.homePage}
        type={['right', 'left']}
        ease={['easeOutQuart', 'easeInOutQuart']}
        key="home"
      >
        <IntroductionCard key="one" windowWidth={this.props.windowWidth} />
      </QueueAnim>
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
