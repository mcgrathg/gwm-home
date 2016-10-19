/**
*
* VideoListItem
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

import { Button, Row, Col, Image } from 'react-bootstrap';

function VideoListItem({ video, onVideoSelect }) {
  const imageUrl = video.snippet.thumbnails.medium.url;

  return (
    <Button onClick={() => onVideoSelect(video)} className={styles.videoListItem}>
      <Row>
        <Col md={5}>
          <Image className={styles.image} src={imageUrl} alt="video-thumbnail" />
        </Col>
        <Col md={7}>
          <div className={styles.heading}>{video.snippet.title}</div>
        </Col>
      </Row>
    </Button>
  );
}

VideoListItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func,
};

export default VideoListItem;
