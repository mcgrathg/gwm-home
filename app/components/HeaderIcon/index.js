/**
*
* HeaderIcon
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.css';

function HeaderIcon({ ...props }) {
  const { className, ...rest } = props;
  return (
    <span className={classNames(styles.headerIcon, 'fa-stack')} aria-hidden="true" {...rest}>
      <i className={classNames(styles.backgroundIcon, 'fa', 'fa-circle', 'fa-stack-2x')} aria-hidden="true" />
      <i className={classNames(styles.foregroundIcon, 'fa', 'fa-stack-1x', 'fa-inverse', className)} />
    </span>
  );
}

HeaderIcon.propTypes = {
  className: PropTypes.string,
};

export default HeaderIcon;
