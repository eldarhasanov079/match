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
        content={
          <div>
            <h4>🎓 Welcome to Match, the hub for UC Berkeley's brightest! 🐻💡 At Match, we're all about making class selection a breeze and a blast. Our platform is your go-to guide, rich with real student reviews and insights to help you make savvy academic choices.</h4>
            <p>Here's what makes us special:</p>
            <ul>
              <li>🌟 <strong>Community-Powered:</strong> Our reviews come straight from fellow students - real opinions, real experiences!</li>
              <li>🔍 <strong>Explore and Discover:</strong> Find classes that ignite your passion, from challenging brain teasers to inspiring lectures.</li>
              <li>🤝 <strong>Share and Care:</strong> Leave reviews to guide others and join a community that uplifts and informs.</li>
              <li>📚 <strong>A Learning Adventure:</strong> Every class review opens a door to new knowledge and possibilities.</li>
            </ul>
            <p>Dive into a sea of student wisdom, rate your own experiences, and embark on an academic journey like no other. Remember, at Match, your perfect class match is just a click away! 🎉</p>
          </div>
        }
        onClose={closePopup}
      />
      
      
      
      )}

      {showGuidelines && (
        <InfoPopup
        title="Guidelines"
        content={
          <div>
            <p>🌈 Hello, fellow Golden Bears! Here at Match, we want everyone to have a fantastic experience. Here are some golden guidelines to ensure our community thrives:</p>
            <ol>
              <li>🌟 <strong>Be Honest and Constructive:</strong> Your reviews are a guiding light! Keep them genuine and helpful.</li>
              <li>🤐 <strong>Respect Privacy:</strong> Our community values respect. Please don't share personal info about others.</li>
              <li>💪 <strong>Stay Positive:</strong> We're in this academic journey together. Let's build each other up!</li>
              <li>📚 <strong>Keep It Relevant:</strong> Stick to insights about classes - content, workload, and your experience.</li>
            </ol>
            <p>Remember, your words have power! Use them to foster a supportive, informative environment. Together, we'll create a space where every Bear feels at home and every review counts! 🐾</p>
          </div>
        }
        onClose={closePopup}
      />
      
      
      
      )}

      {showContact && (
        <InfoPopup
        title="Contact"
        content={
          <div>
            <p>💌 Got burning questions, sparkling feedback, or ingenious ideas? We're all ears at Match! Here's how you can reach out:</p>
            <ul>
              <li>📧 <strong>Email us at connect@matchberkeley.edu:</strong> Whether it's a feature you're dreaming of, a suggestion you'd like to share, or just a friendly hello, our inbox is always open.</li>
              <li>💡 <strong>Share Your Ideas:</strong> Have a thought on how we can improve? Let's hear it! Your insights help us grow.</li>
              <li>🤗 <strong>Support and Assistance:</strong> Need a hand with something? We're here to help make your Match experience smooth and enjoyable.</li>
            </ul>
            <p>At Match, every voice matters, and every message is a treasure. Let's connect, collaborate, and create an unmatched community together! 🌟</p>
          </div>
        }
        onClose={closePopup}
      />
      
      
      
      )}
    </div>
  );
}

export default App;
