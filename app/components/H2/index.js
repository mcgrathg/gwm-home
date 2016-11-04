import React, { PropTypes } from 'react';

import classNames from 'classnames';
import styles from './styles.css';

function H2({ className, disableBorder = false, ...rest }) {
  return (
    <h2 className={classNames(styles.heading2, className, 'header', { [styles.hasBorder]: !disableBorder })} {...rest} />
  );
}

H2.propTypes = {
  className: PropTypes.string,
  disableBorder: PropTypes.bool, // option to remove bottom border styling
};

export default H2;
