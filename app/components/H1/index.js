import React, { PropTypes } from 'react';

import classNames from 'classnames';

function H1({ className, ...rest }) {
  return (
    <h1 className={classNames('header', className)} {...rest} />
  );
}

H1.propTypes = {
  className: PropTypes.string,
};

export default H1;
