import React, { Component } from 'react';

class Timeline extends Component {
    renderTimelineEvents() {
        return this.props.events.map((data) => {
            return (
                <TimelineEvent data={data}/>
            );
        });
    }
    render() {
        return (
            <section className="container">
                <ul className="timeline">
                    {this.renderTimelineEvents()}
                </ul>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default
