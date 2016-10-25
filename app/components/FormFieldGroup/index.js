/**
*
* FormFieldGroup
*
*/

import React, { PropTypes } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

import styles from './styles.css';

function FormFieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id} className={styles.formFieldGroup}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

FormFieldGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
};

export default FormFieldGroup;
