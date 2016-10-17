/**
 * Video Container selectors
 */

import { createSelector } from 'reselect';

/**
 * Direct selector to the videos container state domain
 */
const selectVideosPage = () => (state) => state.get('videosContainer');

const selectVideo = () => createSelector(
  selectVideosPage(),
  (portfolioPage) => portfolioPage.get('video')
);

export {
  selectVideosPage,
  selectVideo,
};
