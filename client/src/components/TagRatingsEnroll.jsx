import React from 'react';

const TagRatingsEnroll = ({ data }) => (
  <section className="tag_ratings_enroll">
    <div className="tag">{ data.tag }</div>
    <div className="ratings">
      <div className="stars"></div>
      <div className="avg-rating">{ data.avg_rating }</div>
      <div className="total-ratings">{ `(${data.total_ratings} ratings)` }</div>
    </div>
    <div className="enrollment">{ `${data.enrollment} students enrolled` }</div>
  </section>
);

export default TagRatingsEnroll;