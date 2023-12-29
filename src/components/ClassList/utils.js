// utils.js or inside your custom hook
export function calculateAverageRating(reviews, courseId) {
    const courseReviews = reviews.filter(review => review.courseId === courseId);
    const total = courseReviews.reduce((acc, review) => acc + review.overall, 0);
    return courseReviews.length ? (total / courseReviews.length) : 0;
  }

  
// utils.js or inside your custom hook
export function sortCourses(courses) {
    return courses.sort((a, b) => {
      const ratingDifference = b.overallRating - a.overallRating;
      if (ratingDifference !== 0) {
        return ratingDifference;
      }
      return a.title.localeCompare(b.title);
    });
  }
  