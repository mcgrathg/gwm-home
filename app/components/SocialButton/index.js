/**
*
* SocialButton
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

function SocialButton({ ...props }) {
  const { className, iconClassName, href, name, ...rest } = props;
  const tooltip = (
    <Tooltip id={iconClassName}>{name}</Tooltip>
  );

  return (
    <li
      className={classNames(className, styles.socialListItem)}
      {...rest}
    >
      <OverlayTrigger
        placement="bottom" overlay={tooltip}
        delayHide={150} delayShow={300}
      >
        <a
          className={styles.socialLink}
          href={href} target="_blank"
        >
          <i className={classNames(iconClassName, styles.icon)} aria-hidden="true"></i>
        </a>
      </OverlayTrigger>
    </li>
  );
}

SocialButton.propTypes = {
  iconClassName: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
};

export default SocialButton;
