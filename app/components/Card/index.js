/**
*
* Card
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.css';

function Card({ ...props }) {
  const { children, className, ...rest } = props;
  return (
    <div
      className={classNames(styles.card, className)}
      {...rest}
    >
      { children }
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
