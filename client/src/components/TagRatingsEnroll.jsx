import React from 'react';

const TagRatingsEnroll = ({ course }) => {
  let tagMargin;
  if (course.tag) {
    tagMargin = {'margin-right': '15px'};
  } else {
    tagMargin = {};
  }
  return(
    <section className="tag-ratings-enroll">
      <div className="tag" style={ tagMargin }>{ course.tag }</div>
      <div className="ratings">
        <span className="stars">Stars</span>
        <span className="avg-rating">{ course.avg_rating }</span>
        <span className="total-ratings">{ `(${course.total_ratings} ratings)` }</span>
      </div>
      <div className="enrollment">{ `${course.enrollment} students enrolled` }</div>
    </section>
  )
};

export default TagRatingsEnroll;