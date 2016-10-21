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
import HeaderIcon from 'components/HeaderIcon';
import Card from 'components/Card';
import Skills from 'components/Skills';
import Timeline from 'components/Timeline';
import SocialBar from 'components/SocialBar';
import CenteredButtonToolbar from 'components/CenteredButtonToolbar';

import { Button } from 'react-bootstrap';

export class ResumePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article className={styles.resumePage}>
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
            <CenteredButtonToolbar>
              <Button bsStyle="success">Download Resume</Button>
              <Button bsStyle="success">Contact Me</Button>
            </CenteredButtonToolbar>
          </Card>
        </section>

        <section className={styles.technicalSkills}>
          <H2>
            <HeaderIcon className="fa-wrench" />
            Technical Skills
          </H2>
          <Skills columns={skills} />
        </section>

        <section className={styles.workExperience}>
          <H2>
            <HeaderIcon className="fa-briefcase" />
            Work Experience
          </H2>
          <Timeline events={work} />
        </section>

        <section className={styles.education}>
          <H2>
            <HeaderIcon className="fa-pencil" />
            Education
          </H2>
          <Timeline events={education} />
        </section>
      </article>
    );
  }
}

export default connect()(ResumePage);
