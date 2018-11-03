import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/HeaderStars.css'

const HeaderStars = ({ avgRating }) => {

  const partialFill = () => {
    if (avgRating === undefined) {
      return '0%';
    }
    const decimal = avgRating.toString().split('.')[1];
    if (decimal !== '0') {
      return `${decimal}0%`;
    }
  }

  const getStars = () => {
    const stars = [];
    for (let i = 1; i < 6; i += 1) {
      if (avgRating >= i) {
        stars.push(<span className={ styles.fullStar } key={i} ><FontAwesomeIcon icon={ faStar } /></span>)
      } else if (Math.ceil(avgRating) === i) {
        stars.push(<span className={ styles.partialStar } key={i} ><FontAwesomeIcon icon={ faStar } /></span>)
      } else {
        stars.push(<span className={ styles.emptyStar } key={i} ><FontAwesomeIcon icon={ faStar } /></span>)
      }
    }
    return stars;
  }

  return (
    <span>
      <span className={ styles.stars }>
      {
        getStars()
      }
      </span>
      <svg width="0" height="0">
        <linearGradient id="starPartialFill">
          <stop stopColor="#f4c150" offset="0%" />
          <stop stopColor="#f4c150" offset={ partialFill() } />
          <stop stopColor="#dedfe0" offset={ partialFill() } />
          <stop stopColor="#dedfe0" offset="100%" />
        </linearGradient>
        <linearGradient id="starEmpty">
          <stop stopColor="#dedfe0" offset="100%" />
        </linearGradient>
        <linearGradient id="starFilled">
          <stop stopColor="#f4c150" offset="100%" />
        </linearGradient>
      </svg>
    </span>
  )
};

export default HeaderStars;