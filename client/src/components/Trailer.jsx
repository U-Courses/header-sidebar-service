import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Trailer.css';

const Trailer = (props) => {
  const btnSize = () => (props.onTrailer ? { fontSize: '5em', transition: '0.5s' } : { fontSize: '3em', transition: '0.5s' });

  return (
    <section className={ styles.trailerBox }>
      <div className={ styles.trailerContainer }>
        <div className={ styles.trailer }>
          <img alt="" className={ `${styles.courseImg} ${styles.sidebarImg}` } src="http://www.avsnap.com/a_downloads/backgrounds/SpaceT%20640x480.png" />
          <div className={ `${styles.playbtn} ${styles.sidebarImg}` }
            onMouseEnter={ () => props.trailerHoverHandler() }
            onMouseLeave={ () => props.trailerHoverHandler() }>
            <FontAwesomeIcon className={ styles.playbtnIcon }
              icon={ faPlayCircle } style={ btnSize() }/>
          </div>
          <span className={ `${styles.trailerText} ${styles.sidebarImg}` }>Preview this course</span>
        </div>
      </div>
    </section>
  );
};

export default Trailer;
