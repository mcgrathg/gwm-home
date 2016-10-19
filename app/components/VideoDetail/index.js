/**
*
* VideoDetail
*
*/

import React, { PropTypes } from 'react';

import LoadingIndicator from 'components/LoadingIndicator';

import styles from './styles.css';

function VideoDetail({ video }) {
  if (!video) {
    return <LoadingIndicator />;
  }

  const { videoId } = video.snippet.resourceId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={styles.videoDetail}>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

VideoDetail.propTypes = {
  video: PropTypes.object,
};

export default VideoDetail;
