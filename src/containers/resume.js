import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Timeline from './timeline';

class Resume extends Component {
    renderSkills() {
        return this.props.skills.map((data) => {
            debugger;
            return (
                <div></div>
            );
        });
    }
    renderWorkExperience() {
        return this.props.work.map((data) => {
            debugger;
            return (
                <div></div>
            );
        });
    }
    renderEducation() {
        return this.props.education.map((data) => {
            debugger;
            return (
                <div></div>
            );
        });
    }
    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h1 className="text-left">Resume<i className="fa fa-file-text text-muted"></i></h1>
                </div>
                <p className="lead">
                    Dedicated and hardworking professional with over 9 years ofexperience in software development. Strong interpersonal, communication andorganization skills, able to lead small teams and deliver efficient results ina timely manner in a fast-paced environment.
                    Strong relationship with clients,ensuring customer satisfaction with team’s work.
                </p>
                <section class="resume-buttons text-center">
                    <button class="btn btn-success" type="button">Download Resume</button>
                    <button class="btn btn-success" type="button">Contact me</button>
                </section>
                <h2 id="work">Technical Skills<i class="fa fa-wrench text-muted"></i></h2>
                <section className="technical-skills">{this.renderSkills()}</section>
                <h2 id="work">Work Experience<i class="fa fa-briefcase text-muted"></i></h2>
                <section className="work-experience">{this.renderWorkExperience()}</section>
                <h2 id="education">Education<i class="fa fa-pencil text-muted"></i></h2>
                <section className="education">{this.renderEducation()}</section>
            </div>
        );
    }
}

function mapStateToProps({work, education, skills}) {
    return { work, education, skills };
}

export default connect(mapStateToProps)(Resume);
