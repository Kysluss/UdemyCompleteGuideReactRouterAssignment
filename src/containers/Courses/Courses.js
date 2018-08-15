import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ], 
        selectedCourse: null
    }

    courseClickedHandler = (id) => {
        const matchedCourse = this.state.courses.filter(x => x.id === id)[0];

        this.props.history.push(this.props.match.url + '/' + matchedCourse.id + '/' + matchedCourse.title)
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                    <article 
                                        className="Course" 
                                        key={course.id} 
                                        onClick={() => this.courseClickedHandler(course.id)}
                                    >{course.title}</article>
                            );
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:id/:title'} exact component={Course} />
            </div>
        );
    }
}

export default Courses;