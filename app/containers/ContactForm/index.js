/*
 *
 * ContactForm
 *
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Form } from 'formsy-react';
import { ParentContextMixin, Input, Textarea } from 'formsy-react-components';
import { Button } from 'react-bootstrap';


import {
  selectEmail,
  selectError,
  selectSending,
 } from './selectors';

import {
  sendMessage,
} from './actions';

import H2 from 'components/H2';
import HeaderIcon from 'components/HeaderIcon';
import LoadingIndicator from 'components/LoadingIndicator';

import btnStyle from './buttons.css';
import styles from './styles.css';

export class ContactForm extends Component { // eslint-disable-line react/prefer-stateless-function

  mixins: [ParentContextMixin]

  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
      sent: false,
    };
  }

  // componentWillUpdate({ email }, { sent }) {
  //   if (sent) {
  //     this.contactForm.reset();
  //     this.setState({ sent: false });
  //   }
  // }

  setFormValid = (isFormValid) => {
    this.setState({ isFormValid });
  }

  addAlert(msg, title = 'Success!', status = 'success') {
    this.container[status](msg, title, {
      closeButton: true,
    });
  }

  clearAlert() {
    this.container.clear();
  }

  render() {
    const { className, sending } = this.props;
    const { isFormValid } = this.state;
    let submittingIndicator;

    if (sending) {
      submittingIndicator = (<div className={styles.loadingIndicator}><LoadingIndicator /></div>);
    }

    return (
      <Form
        disabled={sending}
        className={classNames(styles.contactForm, className)}
        onSubmit={(...props) => this.props.onFormSubmit(...props)}
        onValid={() => this.setFormValid(true)}
        onInvalid={() => this.setFormValid(false)}
        ref={(c) => (this.contactForm = c)}
      >
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
          name="from"
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
          name="html"
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
          disabled={!isFormValid || sending}
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
  onFormSubmit: PropTypes.func,
  sending: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  email: selectEmail(),
  error: selectError(),
  sending: selectSending(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFormSubmit: (formData) => {
      dispatch(sendMessage(formData));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
