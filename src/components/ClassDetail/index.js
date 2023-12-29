// src/components/ClassDetail/index.js
import React from 'react';
import './styles.css';



function ClassDetail({ course, reviews }) {
  const calculateAverage = (reviews, key) => {
    const total = reviews.reduce((acc, review) => {
      const value = parseFloat(review[key]) || 0; // Ensure the value is treated as a float
      return acc + value;
    }, 0);
    return reviews.length ? (total / reviews.length).toFixed(1) : 'N/A'; // .toFixed(1) limits the decimal to 1 place
  };

  // Calculate average ratings from reviews
  const averageRatings = {
    overall: calculateAverage(reviews, 'overall'),
    difficulty: calculateAverage(reviews, 'difficulty'),
    workload: calculateAverage(reviews, 'workload'),
    interesting: calculateAverage(reviews, 'interesting'),
    useful: calculateAverage(reviews, 'useful')
  };

  return (
    <div className="class-detail">
      <h2>{course.code}: {course.title}</h2>
      <p>{course.description}</p>
      
      {/* Display average ratings */}
      <div className="average-ratings">
        <h3>Average Ratings</h3>
        <div className="rating">Overall: {averageRatings.overall}</div>
        <div className="rating">Difficulty: {averageRatings.difficulty}</div>
        <div className="rating">Workload: {averageRatings.workload}</div>
        <div className="rating">Interesting: {averageRatings.interesting}</div>
        <div className="rating">Useful: {averageRatings.useful}</div>
      </div>

      {/* Display individual student reviews */}
      <div className="individual-reviews">
        <h3>Student Reviews</h3>
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <div className="rating">Overall Rating: {review.overall}</div>
            <div className="rating">Difficulty: {review.difficulty}</div>
            <div className="rating">Workload: {review.workload}</div>
            <div className="rating">Interesting: {review.interesting}</div>
            <div className="rating">Useful: {review.useful}</div>
            <p className="comment">{review.comment}</p>
            <div className="review-meta">
              <span className="semester">{review.semester}</span>
              <span className="instructor">{review.instructor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassDetail;
