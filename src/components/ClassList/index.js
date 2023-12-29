// src/components/ClassList/index.js
import React from 'react';
import './styles.css';
import ClassDetail from '../ClassDetail';
import ReviewForm from '../ReviewForm';
import { calculateAverageRating, sortCourses } from './utils'; // adjust the path as needed


function ClassList({ courses, searchTerm, onClassSelect}) {
  // Filter courses based on the search term
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (course.code && course.code.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  const handleClassClick = (course) => {
    onClassSelect(course);
  };

  return (
    <div className="class-list">
      {filteredCourses.map((course, index) => (
        <div key={index} className="class-item" onClick={() => handleClassClick(course)}>
          <div className="class-code">{course.code}</div>
          <div className="class-title">{course.title}</div>
          {/* More details can be shown here */}
        </div>
      ))}
    </div>
  );
}

export default ClassList;
