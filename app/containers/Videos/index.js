/*
 *
 * Videos
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import * as Sticky from 'react-stickynode';

import {
  selectCurrentVideo,
  selectVideos,
  selectLoading,
  selectError,
 } from './selectors';

import {
  selectIsStickyEnabled,
  selectTruncateLongText,
 } from 'containers/App/selectors';


import {
  changeVideo,
  loadVideos,
} from './actions';

import LoadingIndicator from 'components/LoadingIndicator';
import VideoDetail from 'components/VideoDetail';
import VideoList from 'components/VideoList';

import styles from './styles.css';

export class Videos extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoadVideos();
  }
  render() {
    const {
      loading, error, videos, currentVideo,
      truncateLongText, onCurrentVideoChange, isStickyEnabled,
     } = this.props;

    let mainContent = null;

    // Show a loading indicator when we're loading
    if (loading) {
      mainContent = (<LoadingIndicator />);

    // Show an error if there is one
    } else if (error !== false) {
      mainContent = (<div>Something went wrong, please try again!</div>);

    // If we're not loading, don't have an error and there are videos, show the videos
    } else if (videos !== false) {
      mainContent = (
        <Row className={styles.row}>
          <Col md={8} className={styles.col}>
            <VideoDetail video={currentVideo} truncateLongText={truncateLongText} />
          </Col>
          <Col md={4} sm={6} className={classNames(styles.col, styles.videoListCol)}>
            <Sticky
              enabled={isStickyEnabled}
              top={89}
              innerZ={2500}
              bottomBoundary={'.videos'}
            >
              <VideoList
                videos={videos}
                currentVideo={currentVideo}
                onCurrentVideoChange={onCurrentVideoChange}
              />
            </Sticky>
          </Col>
        </Row>
      );
    }

    return (
      <div className={classNames(styles.videos, 'videos')}>
        {mainContent}
      </div>
    );
  }
}

Videos.propTypes = {
  loading: PropTypes.bool,
  truncateLongText: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  videos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  currentVideo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),

  isStickyEnabled: PropTypes.bool,

  onLoadVideos: PropTypes.func,
  onCurrentVideoChange: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadVideos: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadVideos());
    },
    onCurrentVideoChange: (evt) => dispatch(changeVideo(evt)),

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  currentVideo: selectCurrentVideo(),
  videos: selectVideos(),
  loading: selectLoading(),
  error: selectError(),
  truncateLongText: selectTruncateLongText(),
  isStickyEnabled: selectIsStickyEnabled(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Videos);
