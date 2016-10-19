/**
*
* VideoListItem
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { Button, Row, Col, Image } from 'react-bootstrap';

import textStyle from '../../responsive-text-formatting.css';
import styles from './styles.css';

function VideoListItem({ video, isSelected, onVideoSelect }) {
  const imageUrl = video.snippet.thumbnails.medium.url;

  return (
    <Button onClick={() => onVideoSelect(video)} className={classNames(styles.videoListItem, isSelected ? styles.isSelected : null)}>
      <Row className={styles.row}>
        <Col md={5} className={styles.col}>
          <Image className={styles.image} src={imageUrl} alt="video-thumbnail" />
        </Col>
        <Col md={7} className={styles.col}>
          <div className={classNames(styles.heading, textStyle['text-left-md'], textStyle['text-left-lg'])}>
            {video.snippet.title}
          </div>
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
