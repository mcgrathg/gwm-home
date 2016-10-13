import expect from 'expect';
import portfolioPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('portfolioPageReducer', () => {
  it('returns the initial state', () => {
    expect(portfolioPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
