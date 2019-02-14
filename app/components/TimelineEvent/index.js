/**
 *
 * TimelineEvent
 *
 */

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import H2 from 'components/H2';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import styles from './styles.css';

class TimelineEvent extends Component {
  // eslint-disable-line react/prefer-stateless-function
  getHeaderContents() {
    const { title, company, location, start = '', end = '' } = this.props;
    const details = [];

    if (company) {
      details.push({
        txt: company,
        icon: 'building-o',
      });
    }

    if (location) {
      details.push({
        txt: location,
        icon: 'globe',
      });
    }

    if (start || end) {
      details.push({
        txt: start + (start && end ? ' — ' : '') + end,
        icon: 'calendar-o',
      });
    }

    return (
      <div>
        <H2 disableBorder>{title}</H2>
        <ul className={classNames(styles.subheading, 'list-inline')}>
          {details.map(({ txt, icon }) => (
            <li key={txt}>
              <i className={classNames(`fa fa-${icon} fa-fw`, styles.icon)} />
              {txt}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  getBodyContents() {
    const { responsibilities } = this.props;

    return (
      <ListGroup>
        {responsibilities.map((task, idx) => {
          let val = task;
          if (typeof task === 'object') {
            const { header, description } = task;
            let { subheader } = task;

            if (subheader) {
              subheader = <small>{subheader}</small>;
            }
            val = (
              <span>
                <h4 className={styles.taskHeader}>
                  {header}
                  {subheader}
                </h4>
                {description}
              </span>
            );
          }
          return (
            <ListGroupItem key={idx} className={styles.responsibility}>
              <div className={styles.responsibilityText}>{val}</div>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }

  render() {
    const { isInverted, className } = this.props;

    return (
      <ListGroupItem
        className={classNames(
          styles.timelineEvent,
          styles[isInverted ? 'inverted' : null],
          className
        )}
      >
        <div className={styles.badge}>
          <a>
            <i className="glyphicon glyphicon-record" />
          </a>
        </div>
        <div className={styles.panel}>
          <CardHeader className={styles.header}>
            {this.getHeaderContents()}
          </CardHeader>
          <CardBody className={styles.body}>{this.getBodyContents()}</CardBody>
        </div>
      </ListGroupItem>
    );
  }
}

TimelineEvent.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string,
  location: PropTypes.string,
  start: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isInverted: PropTypes.bool,
  className: PropTypes.string,
  responsibilities: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        header: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
        subheader: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
        description: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      }),
    ])
  ),
};

export default TimelineEvent;
