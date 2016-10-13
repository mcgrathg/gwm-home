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
import Card from 'components/Card';
import Skills from 'components/Skills';
import Timeline from 'components/Timeline';
import SocialBar from 'components/SocialBar';


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

        <H1 className="page-header">
          Resume
          <i className="fa fa-file-text text-muted" />
        </H1>

        <section>
          <Card className={styles.introCard}>
            <SocialBar className={styles.social} />
            <p className="lead">{header.intro}</p>
            <ButtonToolbar className={styles.resumeButtons}>
              <Button bsStyle="success">Download Resume</Button>
              <Button bsStyle="success">Contact Me</Button>
            </ButtonToolbar>
          </Card>
        </section>

        <section className={styles.technicalSkills}>
          <H2 className="text-center">
            Technical Skills
            <i className="fa fa-wrench text-muted" />
          </H2>
          <Skills columns={skills} />
        </section>

        <section className={styles.workExperience}>
          <H2 className="text-center">
            Work Experience
            <i className="fa fa-briefcase text-muted" />
          </H2>
          <Timeline events={work} />
        </section>

        <section className={styles.education}>
          <H2 className="text-center">
            Education
            <i className="fa fa-pencil text-muted" />
          </H2>
          <Timeline events={education} />
        </section>
      </div>
    );
  }
}

export default connect()(ResumePage);
