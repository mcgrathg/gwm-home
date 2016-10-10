/*
 *
 * ResumePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { header, skills, work, education } from './messages';
import styles from './styles.css';

import H1 from 'components/H1';
import H2 from 'components/H2';
import Skills from 'components/Skills';
import Timeline from 'components/Timeline';


import { Button, ButtonToolbar } from 'react-bootstrap';

export class ResumePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.resumePage}>
        <Helmet
          title={header.title}
          meta={[
            { name: 'description', content: 'Greg McGrath\'s Resume' },
          ]}
        />
        <H1>
          Resume
          <i className="fa fa-file-text text-muted" />
        </H1>
        <section className="intro">
          <p className="lead">{header.intro}</p>
          <ButtonToolbar className="resume-buttons">
            <Button bsStyle="success">Download Resume</Button>
            <Button bsStyle="success">Contact Me</Button>
          </ButtonToolbar>
        </section>
        <section className="technical-skills">
          <H2>
            Technical Skills
            <i className="fa fa-wrench text-muted" />
          </H2>
          <Skills columns={skills} />
        </section>
        <section className="technical-skills">
          <H2>
            Work Experience
            <i className="fa fa-briefcase text-muted" />
          </H2>
          <Timeline markers={work} />
        </section>
        <section className="technical-skills">
          <H2>
            Education
            <i className="fa fa-pencil text-muted" />
          </H2>
          <Timeline markers={education} />
        </section>
      </div>
    );
  }
}

// function mapStateToProps({ work, education, skills }) {
//   debugger;
//   return { work, education, skills };
// }

export default connect()(ResumePage);
