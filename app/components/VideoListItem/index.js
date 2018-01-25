/**
 *
 * VideoListItem
 *
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { Button, Row, Col, Image } from 'react-bootstrap';

import textStyle from 'containers/App/responsive-text-formatting.css';
import styles from './styles.css';

function VideoListItem({ video, isSelected, onVideoSelect, className }) {
  const imageUrl = video.snippet.thumbnails.medium.url;

  return (
    <Button
      onClick={() => onVideoSelect(video)}
      className={classNames(
        className,
        styles.videoListItem,
        isSelected ? styles.isSelected : null
      )}
    >
      <Row className={styles.row}>
        <Col sm={5} className={styles.col}>
          <Image
            className={styles.image}
            src={imageUrl}
            alt="video-thumbnail"
          />
        </Col>
        <Col sm={7} className={styles.col}>
          <h5
            className={classNames(
              styles.heading,
              textStyle['text-left-md'],
              textStyle['text-left-lg']
            )}
          >
            {video.snippet.title}
          </h5>
        </Col>
      </Row>
    </Button>
  );
}

VideoListItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func,
  isSelected: PropTypes.bool,
  className: PropTypes.string,
};

export default VideoListItem;
