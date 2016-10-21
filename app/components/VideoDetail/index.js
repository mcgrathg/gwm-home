/**
*
* VideoDetail
*
*/

import React, { PropTypes } from 'react';

import LoadingIndicator from 'components/LoadingIndicator';
import H3 from 'components/H3';

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
        <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
      </div>
      <div className="details">
        <H3 className={styles.header}>{video.snippet.title}</H3>
        <p className={styles.description}>{video.snippet.description}</p>
      </div>
    </div>
  );
}

VideoDetail.propTypes = {
  video: PropTypes.object,
};

export default VideoDetail;
