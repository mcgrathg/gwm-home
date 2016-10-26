/*
 *
 * ContactForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from './constants';

const initialState = fromJS({
  sending: false,
  error: false,
  formData: false,
  email: false,
});

function contactFormReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return state
        .set('sending', true)
        .set('error', false)
        .set('formData', action.formData)
        .set('email', false);
    case SEND_MESSAGE_SUCCESS:
      return state
        .set('sending', false)
        .set('email', action.email);
    case SEND_MESSAGE_ERROR:
      return state
        .set('sending', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default contactFormReducer;
