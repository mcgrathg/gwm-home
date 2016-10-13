import { createSelector } from 'reselect';

/**
 * Direct selector to the portfolioPage state domain
 */
const selectPortfolioPageDomain = () => (state) => state.get('portfolioPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PortfolioPage
 */

const selectPortfolioPage = () => createSelector(
  selectPortfolioPageDomain(),
  (substate) => substate.toJS()
);

export default selectPortfolioPage;
export {
  selectPortfolioPageDomain,
};
