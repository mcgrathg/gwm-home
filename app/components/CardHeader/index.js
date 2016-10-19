/**
*
* CardHeader
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.css';

function CardHeader({ ...props }) {
  const { children, className, ...rest } = props;
  return (
    <div
      className={classNames(styles.cardHeader, className)}
      {...rest}
    >
      { children }
    </div>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CardHeader;
