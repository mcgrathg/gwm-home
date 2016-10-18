/**
*
* VideoList
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

import { ButtonGroup } from 'react-bootstrap';

import VideoListItem from 'components/VideoListItem';

function VideoList({ videos, onVideoSelect }) {
  const videoItems = videos.map((video) => (
    <VideoListItem
      onVideoSelect={onVideoSelect}
      key={video.etag}
      video={video}
    />
  ));

  return (
    <ButtonGroup vertical className={styles.videoList}>
      {videoItems}
    </ButtonGroup>
  );
}

VideoList.propTypes = {
  videos: PropTypes.object,
  onVideoSelect: PropTypes.func,
};

export default VideoList;
