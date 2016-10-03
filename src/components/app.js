import React, { Component } from 'react';
import Navigation from './navigation';

export default class App extends Component {
    render() {
        debugger
        return (
            <div>
                <div>
                    <Navigation/>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
