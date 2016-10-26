/*
 *
 * ContactForm actions
 *
 */

import {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
  FORM_VALIDITY,
} from './constants';

/**
 * Send email based on Contact Form, this action starts the POST saga
 *
 * @return {object} An action object with a type of LOAD_VIDEOS
 */
export function sendMessage(formData) {
  return {
    type: SEND_MESSAGE,
    formData,
  };
}

/**
 * Dispatched when the contact email was sent successfully by the POST saga
 *
 * @param  {array} email Contents of email sent
 *
 * @return {object} An action object with a type of SEND_MESSAGE_SUCCESS passing the message details
 */
export function messageSent({ email }) {
  return {
    type: SEND_MESSAGE_SUCCESS,
    email,
  };
}

/**
 * Dispatched when sending contact email fails
 *
 * @param  {Array} error Array of error strings
 *
 * @return {object} An action object with a type of SEND_MESSAGE_ERROR passing the error
 */
export function messageSentError(error) {
  return {
    type: SEND_MESSAGE_ERROR,
    error,
  };
}

export function setFormValidity(isFormValid) {
  return {
    type: FORM_VALIDITY,
    isFormValid,
  };
}
