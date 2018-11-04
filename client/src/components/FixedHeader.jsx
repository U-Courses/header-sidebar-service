import React from 'react';
import TagRatingsEnroll from './TagRatingsEnroll.jsx';
import styles from '../styles/FixedHeader.css';

const FixedHeader = ({ course }) => (
  <div className={ styles.fixedBanner }>
    <div className={ styles.fixedContent }>
      <p className={ styles.smallTitle }><strong>{ course.title }</strong></p>
      <TagRatingsEnroll course={ course } />
    </div>
  </div>
);

export default FixedHeader;
