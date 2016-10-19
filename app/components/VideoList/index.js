/**
*
* VideoList
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

import { ButtonGroup } from 'react-bootstrap';

import VideoListItem from 'components/VideoListItem';

function VideoList({ videos, onCurrentVideoChange, currentVideo }) {
  const videoItems = videos.map((video) => (
    <VideoListItem
      onVideoSelect={onCurrentVideoChange}
      key={video.etag}
      video={video}
      isSelected={video === currentVideo}
    />
  ));

  return (
    <ButtonGroup vertical className={styles.videoList}>
      {videoItems}
    </ButtonGroup>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array,
  onCurrentVideoChange: PropTypes.func,
  currentVideo: PropTypes.object,
};

export default VideoList;
