import React from 'react';
import HeaderStars from './HeaderStars.jsx'

const TagRatingsEnroll = ({ course }) => {
  // Add margin if tag present
  const tagStyle = () => {
    const style = {};
    if (course.tag) {
      style.marginRight = '15px';
    }

    if (course.tag === 'Best Seller') {
      style.background = '#f4c150';
    } else if (course.tag === 'Highest Rated') {
      style.background = '#f59c49';
    } else if (course.tag === 'Hot & New') {
      style.background = '#ec5252';
      style.color = '#fff';
    } else if (course.tag === 'New') {
      style.background = '#46c28e';
      style.color = '#fff';
    }

    return style;
  }
  
  return(
    <section className="tag-ratings-enroll">
    { course.tag &&
      <div className="tag" style={ tagStyle() }>{ course.tag }</div> // Render if tag is not null
    }
      <div className="ratings">
        <HeaderStars avgRating={ course.avg_rating }/>
        <span className="avg-rating">{ course.avg_rating }</span>
        <span className="total-ratings">{ `(${course.total_ratings} ratings)` }</span>
      </div>
      <div className="enrollment">{ `${course.enrollment} students enrolled` }</div>
    </section>
  )
};

export default TagRatingsEnroll;