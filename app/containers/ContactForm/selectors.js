/**
 * Contact Form selectors
 */

import { createSelector } from 'reselect';

/**
 * Direct selector to the contact form state domain
 */
const selectContactForm = () => (state) => state.get('contactForm');

const selectSending = () => createSelector(
  selectContactForm(),
  (contactState) => contactState.get('sending')
);

const selectError = () => createSelector(
  selectContactForm(),
  (contactState) => contactState.get('error')
);

const selectEmail = () => createSelector(
  selectContactForm(),
  (contactState) => contactState.get('email')
);

const selectFormData = () => createSelector(
  selectContactForm(),
  (contactState) => contactState.get('formData')
);


export {
  selectEmail,
  selectError,
  selectSending,
  selectFormData,
};
