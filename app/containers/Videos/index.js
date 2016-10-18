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
  selectVideos,
  selectLoading,
  selectError,
} from 'containers/App/selectors';
import { selectVideo } from './selectors';

import { changeVideo } from './actions';
import { loadVideos } from '../App/actions';

import LoadingIndicator from 'components/LoadingIndicator';
import VideoList from 'components/VideoList';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

import styles from './styles.css';

export class Videos extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    loadVideos();
  }
  render() {
    let mainContent = null;

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      mainContent = (<ListGroup component={LoadingIndicator} />);

    // Show an error if there is one
    } else if (this.props.error !== false) {
      const ErrorComponent = () => (
        <ListGroupItem>
          Something went wrong, please try again!
        </ListGroupItem>
      );
      mainContent = (<ListGroup component={ErrorComponent} />);

    // If we're not loading, don't have an error and there are videos, show the videos
    } else if (this.props.videos !== false) {
      mainContent = (<VideoList videos={this.props.videos} onCurrentVideoChange={this.props.onCurrentVideoChange} />);
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
  // currentVideo: PropTypes.oneOfType([
  //   PropTypes.object,
  //   PropTypes.bool,
  // ]),
  loadVideos: PropTypes.func,
  onCurrentVideoChange: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeCurrentVideo: (evt) => dispatch(changeCurrentVideo(evt.target.value)),
    // changeRoute: (url) => dispatch(push(url)),
    onLoadVideos: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadVideos());
    },
    onCurrentVideoChange: (evt) => {
      dispatch(changeVideo(evt.target.value));
    },

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  video: selectVideo(),
  videos: selectVideos(),
  loading: selectLoading(),
  error: selectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Videos);
