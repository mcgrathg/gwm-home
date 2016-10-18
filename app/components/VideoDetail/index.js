/**
*
* VideoDetail
*
*/

import React, { PropTypes } from 'react';

import { Col } from 'react-bootstrap';

import styles from './styles.css';

function VideoDetail({ video }) {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Col md={8} className={styles.videoDetail}>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </Col>
  );
}

VideoDetail.propTypes = {
  video: PropTypes.object,
};

export default VideoDetail;
