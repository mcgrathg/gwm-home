/**
*
* CenteredButtonToolbar
*
*/

import React, { Children, PropTypes } from 'react';
import classNames from 'classnames';

import { ButtonToolbar, Row, Col } from 'react-bootstrap';

import styles from './styles.css';

function CenteredButtonToolbar({ ...props }) {
  const { children, className, rowClassName, colClassName, ...rest } = props;
  const colCount = Children.count(children);
  const colWidth = Math.ceil(12 / colCount);

  const childColumns = () => (
    children.map((child, idx) => (
      <Col
        sm={colWidth}
        key={idx}
        className={classNames(styles.col, colClassName)}
      >
        {child}
      </Col>
    )
  ));

  return (
    <ButtonToolbar
      className={classNames(styles.centeredButtonToolbar, className)}
      {...rest}
    >
      <Row className={classNames(styles.col, rowClassName)}>
        {childColumns()}
      </Row>
    </ButtonToolbar>
  );
}

CenteredButtonToolbar.propTypes = {
  className: PropTypes.string,
  rowClassName: PropTypes.string,
  colClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CenteredButtonToolbar;
