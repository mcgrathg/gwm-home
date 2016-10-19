/*
 *
 * Videos
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';


import {
  selectCurrentVideo,
  selectVideos,
  selectLoading,
  selectError,
 } from './selectors';

import {
  changeVideo,
  loadVideos,
} from './actions';

import LoadingIndicator from 'components/LoadingIndicator';
import VideoDetail from 'components/VideoDetail';
import VideoList from 'components/VideoList';
import Card from 'components/Card';

import { Row, Col } from 'react-bootstrap';

import styles from './styles.css';

export class Videos extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoadVideos();
  }
  render() {
    let mainContent = null;

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      mainContent = (<LoadingIndicator />);

    // Show an error if there is one
    } else if (this.props.error !== false) {
      mainContent = (<div>Something went wrong, please try again!</div>);

    // If we're not loading, don't have an error and there are videos, show the videos
    } else if (this.props.videos !== false) {
      mainContent = (
        <Row className={styles.row}>
          <Col md={8} className={styles.col}>
            <VideoDetail video={this.props.currentVideo} />
          </Col>
          <Col md={4} className={styles.col}>
            <Card className={styles.card}>
              <VideoList
                videos={this.props.videos}
                currentVideo={this.props.currentVideo}
                onCurrentVideoChange={this.props.onCurrentVideoChange}
              />
            </Card>
          </Col>
        </Row>
      );
    }

    return (
      <div className={styles.videos}>
        {mainContent}
      </div>
    );
  }
}

Videos.propTypes = {
  loading: PropTypes.bool,
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
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Videos);
