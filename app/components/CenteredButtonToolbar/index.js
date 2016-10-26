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

  const childColumns = () => (
    children.map((child, idx) => (
      <li
        key={idx}
        className={classNames(styles.li, liClassName)}
      >
        {child}
      </li>
    )
  ));

  return (
    <ButtonToolbar
      className={classNames(styles.centeredButtonToolbar, className)}
      {...rest}
    >
      <ul className={classNames(styles.ul, ulClassName)}>
        {childColumns()}
      </ul>
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
