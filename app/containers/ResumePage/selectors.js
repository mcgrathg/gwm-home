import { createSelector } from 'reselect';

/**
 * Direct selector to the resumePage state domain
 */
const selectResumePageDomain = () => (state) => state.get('resumePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ResumePage
 */

const selectResumePage = () => createSelector(
  selectResumePageDomain(),
  (substate) => substate.toJS()
);

export default selectResumePage;
export {
  selectResumePageDomain,
};
