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
  const { children, className, ulClassName, liClassName, ...rest } = props;

  const getChildColumn = (child) => (
    <li key={child.props.to} className={classNames(styles.li, liClassName)}>
      {child}
    </li>
  );

  const childColumns = Array.isArray(children)
    ? children.map(getChildColumn)
    : getChildColumn(children);

  return (
    <ButtonToolbar
      className={classNames(styles.centeredButtonToolbar, className)}
      {...rest}
    >
      <ul className={classNames(styles.ul, ulClassName)}>{childColumns}</ul>
    </ButtonToolbar>
  );
}

CenteredButtonToolbar.propTypes = {
  className: PropTypes.string,
  ulClassName: PropTypes.string,
  liClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CenteredButtonToolbar;
