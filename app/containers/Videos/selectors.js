import { createSelector } from 'reselect';

/**
 * Direct selector to the videos state domain
 */
const selectVideosDomain = () => (state) => state.get('videos');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Videos
 */

const selectVideos = () => createSelector(
  selectVideosDomain(),
  (substate) => substate.toJS()
);

export default selectVideos;
export {
  selectVideosDomain,
};
