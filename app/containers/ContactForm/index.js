/*
 *
 * ContactForm
 *
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
// import selectContactForm from './selectors';

import FormFieldGroup from 'components/FormFieldGroup';

import styles from './styles.css';

export class ContactForm extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { className } = this.props;

    return (
      <div className={classNames(styles.contactForm, className)}>
        <form>
          <FormFieldGroup
            id="formName"
            type="text"
            label="Name"
            placeholder="Enter your First and Last name"
          />
          <FormFieldGroup
            id="formEmail"
            type="email"
            label="Email"
            placeholder="Enter Email"
          />
          <FormFieldGroup
            id="formSubject"
            type="text"
            label="Subject"
            placeholder="Enter Subject"
          />
          <FormFieldGroup
            id="formMessage"
            type="textarea"
            label="Message"
            placeholder="Enter Message"
            componentClass="textarea"
          />
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = selectContactForm();
//
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

export default connect(
  // mapStateToProps, mapDispatchToProps
)(ContactForm);
