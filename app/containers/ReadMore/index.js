import React, { Component, PropTypes } from 'react';
import Truncate from 'react-truncate';
import classNames from 'classnames';

import styles from './styles.css';

class ReadMore extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      readMore: true,
    };

    this.toggleLines = this.toggleLines.bind(this);
  }

  toggleLines(event) {
    event.preventDefault();

    this.setState({
      readMore: !this.state.readMore,
    });
  }

  render() {
    const { children, text, lines } = this.props;
    return (
      <Truncate
        className={styles.readMore}
        lines={this.state.readMore && lines}
        ellipsis={(
          <span>
            ...
            <span className={styles.buttonWrapper}>
              <a
                className={classNames(styles.button)}
                onClick={this.toggleLines}
                href=""
              >
                {text}
              </a>
            </span>
          </span>
        )}
      >
        {children}
      </Truncate>
      );
  }
}

ReadMore.defaultProps = {
  lines: 3,
  text: 'Continue Reading >>',
};

ReadMore.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.node,
  lines: PropTypes.number,
};

export default ReadMore;
