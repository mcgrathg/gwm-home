import React, { Component } from 'react';

const TimelineEvent = ({data}) => {
    const { title, company, location, start, end, styling } = data.job;
    const responsibilities = data.responsibilities.map(resp => {
        return (
            <li className="list-group-item">
                {resp}
            </li>
        );
    });

    return (
        <li className={styling}>
            <div class="timeline-badge primary">
                <a><i class="glyphicon glyphicon-record"></i></a>
            </div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h2>{title}</h2>
                    <div class="row">
                        <h5 class="col-lg-8">{company}</h5>
                        <h5 class="col-lg-4 text-right-lg">{start} &mdash; {end}</h5>
                    </div>
                </div>
                <div class="timeline-body">
                    <ul class="list-group">
                        {responsibilities}
                    </ul>
                </div>
            </div>
        </li>
    );
}

export default TimelineEvent;
