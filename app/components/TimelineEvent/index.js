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
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import styles from './styles.css';
import textStyle from '../../responsive-text-formatting.css';

class TimelineEvent extends Component { // eslint-disable-line react/prefer-stateless-function
  getHeaderContents() {
    const { title, company, location, start, end } = this.props;
    const titleTag = <H2 disableBorder>{title}</H2>;

    const details = [];

    if (company) {
      details.push(<span><i className={classNames('fa fa-building-o', styles.icon)} />{company}</span>);
    }

    if (location) {
      details.push(<span><i className={classNames('fa fa-globe', styles.icon)} />{location}</span>);
    }

    if (start || end) {
      details.push(<span>
        <i className={classNames('fa fa-calendar-o', styles.icon)} />{start}{(start && end ? ' — ' : undefined)}{end}
      </span>);
    }

    return (
      <div>
        {titleTag}
        <ul className={classNames(styles.subheading, 'list-inline')}>
          {details.map((detail, idx) => <li key={idx}>{detail}</li>)}
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
          if (typeof (task) === 'object') {
            const { header, description } = task;
            let { subheader } = task;

            if (subheader) {
              subheader = <small>{subheader}</small>;
            }
            val = (<span>
              <h4 className={styles.taskHeader}>{header}{subheader}</h4>
              {description}
            </span>);
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
    const { isInverted } = this.props;

    return (
      <ListGroupItem className={classNames(styles.timelineEvent, styles[isInverted ? 'inverted' : null])}>
        <div className={styles.badge}>
          <a><i className="glyphicon glyphicon-record"></i></a>
        </div>
        <div className={styles.panel}>
          <CardHeader className={styles.header}>
            {this.getHeaderContents()}
          </CardHeader>
          <CardBody className={styles.body}>
            {this.getBodyContents()}
          </CardBody>
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
