/**
 * Video Container selectors
 */

import { createSelector } from 'reselect';

/**
 * Direct selector to the videos container state domain
 */
const selectVideosContainer = () => (state) => state.get('videosContainer');

const selectLoading = () => createSelector(
  selectVideosContainer(),
  (videoState) => videoState.get('loading')
);

const selectError = () => createSelector(
  selectVideosContainer(),
  (videoState) => videoState.get('error')
);

const selectVideos = () => createSelector(
  selectVideosContainer(),
  (videoState) => videoState.getIn(['userData', 'videos'])
);

const selectCurrentVideo = () => createSelector(
  selectVideosContainer(),
  (videoState) => videoState.get('currentVideo')
);

export {
  selectCurrentVideo,
  selectVideos,
  selectError,
  selectLoading,
};
