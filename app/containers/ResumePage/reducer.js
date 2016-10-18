/*
 *
 * ResumePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_SKILLS,
  LOAD_WORK,
  LOAD_EDUCATION,
} from './constants';

const initialState = fromJS({
  skills: [],
  work: [],
  education: [],
});

function resumePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default resumePageReducer;
