import React from 'react';
import HeaderStars from './HeaderStars.jsx';
import styles from '../styles/TagRatingsEnroll.css';

const TagRatingsEnroll = ({ course, isHeaderFixed }) => {
  // Add margin if tag present
  const tagStyle = () => {
    const style = {};
    if (course.tag) {
      style.marginRight = '15px';
    }

    if (course.tag.length < 4) {
      style.background = '#f4c150';
    } else if (course.tag.length < 5) {
      style.background = '#f59c49';
    } else if (course.tag.length < 6) {
      style.background = '#ec5252';
      style.color = '#fff';
    } else if (course.tag.length >= 6) {
      style.background = '#46c28e';
      style.color = '#fff';
    }

    return style;
  };
  return (
    <section className={ styles.tagRatingsEnroll }>
    { (course.tag && !isHeaderFixed)
      && <div className={ styles.tag }
        style={ tagStyle() }>{ course.tag }</div> // Render if tag is not null
    }
      <div className={ styles.ratings }>
        <HeaderStars avgRating={course.avgRating }/>
        <span className={styles.avgRating}>{course.avgRating }</span>
        <span>{ `(${course.totalRatings} ratings)` }</span>
      </div>
      <div>{ `${course.enrollment} students enrolled` }</div>
    </section>
  );
};

export default TagRatingsEnroll;
