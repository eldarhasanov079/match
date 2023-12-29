import React, { useState } from 'react';
import courseData from './course-data.json';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import ClassList from './components/ClassList';
import ClassDetail from './components/ClassDetail';
import ReviewForm from './components/ReviewForm';

import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showClassDetailPopup, setShowClassDetailPopup] = useState(false);
  const [showReviewFormPopup, setShowReviewFormPopup] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [showAbout, setShowAbout] = useState(false);
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleClassSelect = (course) => {
    setSelectedCourse(course);
    setShowClassDetailPopup(true);
  };

  const handleReviewFormOpen = () => {
    setShowReviewFormPopup(true);
  };

  const handleReviewSubmit = (e, review, courseCode) => {
    e.preventDefault();
    const newReview = { ...review, courseId: courseCode };
    setReviews([...reviews, newReview]);
    setShowReviewFormPopup(false); // Close the review form after submission
  };

  const closePopup = () => {
    setShowClassDetailPopup(false);
    setShowReviewFormPopup(false);
    setShowAbout(false);
    setShowGuidelines(false);
    setShowContact(false);
  };

  // Simple Popup Component
const InfoPopup = ({ title, content, onClose }) => {
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="popup">
        <div className="popup-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
        <div className="popup-content">
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};


  return (
    <div className="App">
      <NavBar
        onAbout={() => setShowAbout(true)}
        onGuidelines={() => setShowGuidelines(true)}
        onContact={() => setShowContact(true)}
      />
      <SearchBar onSearch={handleSearch} />
      <button onClick={handleReviewFormOpen} className="review-button">
        + Leave a Review
      </button>
      <ClassList
        courses={courseData.courses}
        searchTerm={searchTerm}
        onClassSelect={handleClassSelect}
      />
      

      {showClassDetailPopup && selectedCourse && (
        <InfoPopup
        //title={`${selectedCourse.code}: ${selectedCourse.title}`}
          content={
            <ClassDetail
              course={selectedCourse}
              reviews={reviews.filter(review => review.courseId === selectedCourse.code)}
            />
          }
          onClose={closePopup}
        />
      )}

      {showReviewFormPopup && (
        <InfoPopup
          title="Leave a Review"
          content={<ReviewForm onSubmit={handleReviewSubmit} courses={courseData.courses} />}
          onClose={closePopup}
        />
      )}

      {showAbout && (
        <InfoPopup
          title="About"
          content="This is information about the application and what it is for."
          onClose={closePopup}
        />
      )}

      {showGuidelines && (
        <InfoPopup
          title="Guidelines"
          content="Here are the guidelines for using the application responsibly."
          onClose={closePopup}
        />
      )}

      {showContact && (
        <InfoPopup
          title="Contact"
          content="If you need to get in touch, please contact us at info@example.com."
          onClose={closePopup}
        />
      )}
    </div>
  );
}

export default App;
