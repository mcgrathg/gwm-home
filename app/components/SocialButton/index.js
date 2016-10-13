/**
*
* SocialButton
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

function SocialButton({ ...props }) {
  const { className, href, ...rest } = props;
  return (
    <li
      className={styles.socialButton}
      {...rest}
    >
      <a href={href} className={styles.socialLink} target="_blank">
        <i className={className} aria-hidden="true"></i>
      </a>
    </li>
  );
}

SocialButton.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,

};

export default SocialButton;
