/*
 *
 * Videos
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectVideos from './selectors';
import styles from './styles.css';

export class Videos extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.videos}>
      </div>
    );
  }
}

const mapStateToProps = selectVideos();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
