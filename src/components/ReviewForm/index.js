// src/components/ReviewForm/index.js

import React, { useState } from 'react';
import './styles.css';

function ReviewForm({ onSubmit, courses }) {
  const [review, setReview] = useState({
    courseId: '',
    overall: 0,
    difficulty: 0,
    workload: 0,
    interesting: 0,
    useful: 0,
    semester: '',
    instructor: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e, review, review.courseId);
    setReview({
      courseId: '',
      overall: 0,
      difficulty: 0,
      workload: 0,
      interesting: 0,
      useful: 0,
      semester: '',
      instructor: '',
      comment: ''
    }); // Reset form
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <select
        name="courseId"
        value={review.courseId}
        onChange={handleChange}
        required
      >
        <option value="">Select a Course</option>
        {courses.map((course, index) => (
          <option key={index} value={course.code}>{course.code} - {course.title}</option>
        ))}
      </select>
      {/* Fields for numerical ratings */}
      <input type="number" name="overall" placeholder="Overall rating" value={review.overall} onChange={handleChange} required />
      <input type="number" name="difficulty" placeholder="Difficulty" value={review.difficulty} onChange={handleChange} required />
      <input type="number" name="workload" placeholder="Workload" value={review.workload} onChange={handleChange} required />
      <input type="number" name="interesting" placeholder="Interesting" value={review.interesting} onChange={handleChange} required />
      <input type="number" name="useful" placeholder="Usefulness" value={review.useful} onChange={handleChange} required />
      {/* Fields for semester and instructor */}
      <input type="text" name="semester" placeholder="Semester taken (e.g., Fall 2023)" value={review.semester} onChange={handleChange} required />
      <input type="text" name="instructor" placeholder="Instructor" value={review.instructor} onChange={handleChange} required />
      {/* Field for comment */}
      <textarea name="comment" placeholder="Comment" value={review.comment} onChange={handleChange} required />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
