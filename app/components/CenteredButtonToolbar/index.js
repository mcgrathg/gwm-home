/**
*
* CenteredButtonToolbar
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { ButtonToolbar } from 'react-bootstrap';

import styles from './styles.css';

function CenteredButtonToolbar({ ...props }) {
  const { children, className, ...rest } = props;
  return (
    <ButtonToolbar
      className={classNames(styles.centeredButtonToolbar, className)}
      {...rest}
    >
      { children }
    </ButtonToolbar>
  );
}

CenteredButtonToolbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CenteredButtonToolbar;
