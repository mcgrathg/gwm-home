import React, { PropTypes } from 'react';
import classNames from 'classnames';

function H3({ className, ...rest }) {
  return (
    <h3 className={classNames(className, 'header')} {...rest} />
  );
}

H3.propTypes = {
  className: PropTypes.string,
};

export default H3;
