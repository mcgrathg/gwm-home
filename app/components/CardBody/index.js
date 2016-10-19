/**
*
* CardBody
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.css';

function CardBody({ ...props }) {
  const { children, className, ...rest } = props;
  return (
    <div
      className={classNames(styles.cardBody, className)}
      {...rest}
    >
      { children }
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CardBody;
