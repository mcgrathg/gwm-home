import expect from 'expect';
import resumePageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('resumePageReducer', () => {
  it('returns the initial state', () => {
    expect(resumePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
