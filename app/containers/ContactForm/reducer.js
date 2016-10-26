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
  FORM_VALIDITY,
} from './constants';

const initialState = fromJS({
  sending: false,
  sent: false,
  error: false,
  formData: false,
  email: false,
  isFormValid: false,
});

function contactFormReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return state
        .set('sending', true)
        .set('sent', false)
        .set('error', false)
        .set('formData', action.formData)
        .set('email', false);
    case SEND_MESSAGE_SUCCESS:
      return state
        .set('sending', false)
        .set('sent', true)
        .set('email', action.email)
        .set('formData', false);
    case SEND_MESSAGE_ERROR:
      return state
        .set('sending', false)
        .set('error', action.error);
    case FORM_VALIDITY:
      return state
        .set('isFormValid', action.isFormValid);
    default:
      return state;
  }
}

export default contactFormReducer;
