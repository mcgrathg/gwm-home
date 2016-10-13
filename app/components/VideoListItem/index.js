/**
*
* VideoListItem
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

import { Button } from 'react-bootstrap';

function VideoListItem({ video, onVideoSelect }) {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <Button onClick={() => onVideoSelect(video)} className={styles.videoListItem}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt="video-thumbnail" />
        </div>
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </Button>
  );
}

VideoListItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func,
};

export default VideoListItem;
