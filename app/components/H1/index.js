import React from 'react';

import classNames from 'classnames';
import styles from './styles.css';

function H1(props) {
  return (
    <h1 className={classNames(styles.heading1, 'header')} {...props} />
  );
}

export default H1;
