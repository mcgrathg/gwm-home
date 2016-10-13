import expect from 'expect';
import videosReducer from '../reducer';
import { fromJS } from 'immutable';

describe('videosReducer', () => {
  it('returns the initial state', () => {
    expect(videosReducer(undefined, {})).toEqual(fromJS({}));
  });
});
