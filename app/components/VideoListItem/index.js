/**
*
* VideoListItem
*
*/

import React, { PropTypes } from 'react';

import { Col } from 'react-bootstrap';

import styles from './styles.css';

function VideoListItem({ video, onVideoSelect }) {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </li>
  );
}

VideoListItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func,
};

export default VideoListItem;
