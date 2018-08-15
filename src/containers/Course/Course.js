import React, { Component } from 'react';

class Course extends Component {
    render () {
        if(!this.props.match.params.id) return null;

        return (
            <div>
                <h1>{this.props.match.params.title}</h1>
                <p>{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;