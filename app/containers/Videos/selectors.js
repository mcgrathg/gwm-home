/**
 * Video Container selectors
 */

// import { createSelector } from 'reselect';

/**
 * Direct selector to the videos container state domain
 */
const selectVideo = () => (state) => state.get('video');

export {
  selectVideo,
};
