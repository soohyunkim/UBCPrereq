import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Prereqs extends Component {

  render() {
    const {url, subject, courseNumber} = this.props;
    const subjectUrl = url.concat(subject);

    return (
      <div className="Prereqs">
        <div className="Subject"> Subject: </div>
        <div>{subject}</div>
        <div className="Course Number"> Course Number: </div>
        <div>{courseNumber}</div>
      </div>
    );
  }
}

Prereqs.defaultProps = {
  url: 'https://courses.students.ubc.ca/cs/main?pname=subjarea&tname=subjareas&req=1&dept=',
  subject: 'CPSC',
  course: '&course=',
  courseNumber: '100',
};

Prereqs.propTypes = {
  url: React.PropTypes.string.isRequired,
  subject: React.PropTypes.string.isRequired,
  course: React.PropTypes.string,
  courseNumber: React.PropTypes.string,
}
