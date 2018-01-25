/**
 * Contact Form selectors
 */

import { createSelector } from 'reselect';

/**
 * Direct selector to the contact form state domain
 */
const selectContact = (state) => state.get('contact');

const makeSelectSending = () =>
  createSelector(selectContact, (contactState) => contactState.get('sending'));

const makeSelectSent = () =>
  createSelector(selectContact, (contactState) => contactState.get('sent'));

const makeSelectError = () =>
  createSelector(selectContact, (contactState) => contactState.get('error'));

const makeSelectEmail = () =>
  createSelector(selectContact, (contactState) => contactState.get('email'));

const makeSelectFormData = () =>
  createSelector(selectContact, (contactState) => contactState.get('formData'));

const makeSelectFormValidity = () =>
  createSelector(selectContact, (contactState) =>
    contactState.get('isFormValid')
  );

export {
  selectContact,
  makeSelectEmail,
  makeSelectError,
  makeSelectSending,
  makeSelectSent,
  makeSelectFormData,
  makeSelectFormValidity,
};
