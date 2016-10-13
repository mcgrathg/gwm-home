/**
*
* SocialButton
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

function SocialButton({ ...props }) {
  const { iconClassName, href, ...rest } = props;
  return (
    <li
      className={styles.socialButton}
      {...rest}
    >
      <a href={href} className={styles.socialLink} target="_blank">
        <i className={iconClassName} aria-hidden="true"></i>
      </a>
    </li>
  );
}

SocialButton.propTypes = {
  iconClassName: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,

};

export default SocialButton;
