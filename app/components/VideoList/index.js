/**
*
* VideoList
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';
import { ButtonGroup } from 'react-bootstrap';

import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import Card from 'components/Card';
import VideoListItem from 'components/VideoListItem';

function VideoList({ videos, onCurrentVideoChange, currentVideo }) {
  const videoItems = videos.map((video) => (
    <VideoListItem
      className={styles.videoListItem}
      onVideoSelect={onCurrentVideoChange}
      key={video.etag}
      video={video}
      isSelected={video === currentVideo}
    />
  ));

  return (
    <Card className={styles.card}>
      <CardHeader className={styles.cardHeader}>
        <h4 className={styles.header}>Playlist</h4>
      </CardHeader>
      <CardBody>
        <ButtonGroup vertical className={styles.videoList}>
          {videoItems}
        </ButtonGroup>
      </CardBody>
    </Card>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array,
  onCurrentVideoChange: PropTypes.func,
  currentVideo: PropTypes.object,
};

export default VideoList;
