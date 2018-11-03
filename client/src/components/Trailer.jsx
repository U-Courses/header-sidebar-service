import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Trailer = props => {
  const btnSize = () => props.onTrailer ? { fontSize: '5em', transition: '0.5s' } : { fontSize: '3em', transition: '0.5s' };

  return (
    <section className="trailer-box">
      <div className="trailer-container">
        <div className="trailer">
          <img alt="" className="course-img sidebar-img" src="http://www.avsnap.com/a_downloads/backgrounds/SpaceT%20640x480.png" />
          <div className="playbtn sidebar-img"  onMouseEnter={ () => props.trailerHoverHandler() } onMouseLeave={ () => props.trailerHoverHandler() }>
            <FontAwesomeIcon className ="playbtn-icon" icon={ faPlayCircle } style={ btnSize() }/>
          </div>
          <span className="trailer-text sidebar-img">Preview this course</span>
        </div>
      </div>
    </section>
  )
};

export default Trailer;
