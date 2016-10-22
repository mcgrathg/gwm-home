/**
*
* SocialButton
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function SocialButton({ ...props }) {
  const { iconClassName, href, name, ...rest } = props;
  return (
    <li
      className={styles.socialButton}
      {...rest}
    >
      <a href={href} className={styles.socialLink} target="_blank">
        <i className={classNames(iconClassName, styles.icon)} aria-hidden="true" title={name}></i>
      </a>
    </li>
  );
}

SocialButton.propTypes = {
  iconClassName: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default SocialButton;
