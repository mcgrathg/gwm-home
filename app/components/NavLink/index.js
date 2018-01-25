/**
 *
 * NavLink
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, IndexLink } from 'react-router';

import defaultStyles from './styles.css';

class NavLink extends PureComponent {
  render() {
    const {
      text,
      to,
      isIndex,
      className,
      icon,
      currentPath = '',
      styles = defaultStyles,
    } = this.props;

    return <div>{'Nav Link'}</div>;

    // const isActive = to === currentPath;
    // const linkProps = {
    //   className: classNames(
    //     styles.navLink,
    //     isActive ? styles.activeLink : styles.inactiveLink
    //   ),
    //   to,
    // };

    // const link = isIndex ? (
    //   <IndexLink {...linkProps}>
    //     {icon}
    //     {text}
    //   </IndexLink>
    // ) : (
    //   <Link {...linkProps}>
    //     {icon}
    //     {text}
    //   </Link>
    // );

    // return (
    //   <span className={classNames(className, styles.navListItem, 'header')}>
    //     {link}
    //   </span>
    // );
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  currentPath: PropTypes.string,
  className: PropTypes.string,
  isIndex: PropTypes.bool,
  styles: PropTypes.object,
  icon: PropTypes.node,
};

export default NavLink;
