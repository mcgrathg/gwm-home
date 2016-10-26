/*
 *
 * ContactForm
 *
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ToastContainer, ToastMessage } from 'react-toastr';
import { post } from 'axios';

// import sendgrid from 'sendgrid';
// const helper = require('sendgrid').mail;


import { Form } from 'formsy-react';
import { ParentContextMixin, Input, Textarea } from 'formsy-react-components';
import { Button } from 'react-bootstrap';
// import selectContactForm from './selectors';

import H2 from 'components/H2';
import HeaderIcon from 'components/HeaderIcon';
import LoadingIndicator from 'components/LoadingIndicator';


import {
  // SENDGRID_API_KEY,
} from 'containers/App/_keys';


const ToastMessageFactory = React.createFactory(ToastMessage.animation);
// const sg = sendgrid(SENDGRID_API_KEY);

import btnStyle from './buttons.css';
import styles from './styles.css';

export class ContactForm extends Component { // eslint-disable-line react/prefer-stateless-function

  mixins: [ParentContextMixin]

  constructor(props) {
    super(props);

    this.addAlert = this.addAlert.bind(this);
    this.clearAlert = this.clearAlert.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      canSubmit: false,
      isSubmitting: false,
    };
  }

  addAlert(msg, title = 'Success!', status = 'success') {
    this.container[status](msg, title, {
      closeButton: true,
    });
  }

  clearAlert() {
    this.container.clear();
  }

  submitForm = ({ name, email, subject = 'New Contact Message', message }) => {
    const sendgridjsUrl = 'https://gwm-contactform.herokuapp.com/send';

    post(sendgridjsUrl, {
      from: email,
      subject: `[GWM Contact From] ${subject}`,
      html: `<b>From:</b><br />${name}<br /><br />
        <b>Email:</b><br />${email}<br /><br />
        <b>Message:</b><br />${message.split('\n').join('<br />')}`,
    })
    .then(() => { this.addAlert('Message Has Been Sent'); })
    .catch((error) => {
      this.addAlert(`Your message could not be delivered because:\n${error}`, 'Error', 'error');
      console.error('error', error);
    });
  }


  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    const { className } = this.props;
    const { isSubmitting } = this.state;

    let submittingIndicator;
    if (isSubmitting) {
      submittingIndicator = (<div className={styles.loadingIndicator}><LoadingIndicator /></div>);
    }

    return (
      <Form
        disabled={isSubmitting}
        className={classNames(styles.contactForm, className)}
        onSubmit={this.submitForm}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        ref={(c) => (this.contactForm = c)}
      >
        <ToastContainer
          toastMessageFactory={ToastMessageFactory}
          ref={(c) => (this.container = c)}
          className="toast-bottom-left"
        />
        <H2>
          <HeaderIcon className="fa-paper-plane" />
          Send a Message
        </H2>
        <Input
          name="name"
          value=""
          label="Name"
          labelClassName="col-md-6"
          elementWrapperClassName={classNames('col-md-12', styles.formInput)}
          type="text"
          required
        />
        <Input
          name="email"
          value=""
          label="Email"
          labelClassName="col-md-6"
          elementWrapperClassName={classNames('col-md-12', styles.formInput)}
          type="email"
          validations="isEmail"
          validationErrors={{
            isEmail: 'This doesn’t look like a valid email address.',
          }}
          required
        />
        <Input
          name="subject"
          value=""
          label="Subject"
          labelClassName="col-md-6"
          elementWrapperClassName={classNames('col-md-12', styles.formInput)}
          type="text"
        />
        <Textarea
          name="message"
          value=""
          label="Message"
          labelClassName="col-md-6"
          elementWrapperClassName={classNames('col-md-12', styles.formInput)}
          type="text"
          required
        />
        <Button
          className={classNames('pull-right', btnStyle.submitBtn)}
          type="submit"
          disabled={!this.state.canSubmit}
        >
          Send
        </Button>
        {submittingIndicator}
      </Form>
    );
  }
}


ContactForm.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
          // windowWidth: selectWindowWidth(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
