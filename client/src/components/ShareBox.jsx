import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const ShareBox = props => (
  <section className="share-box">
    <div className="delineation"></div>
    <div className="share-invite-container">
      <div className="share">
        <span className="share-text">Share and earn up to $30</span>
      </div>
      <div className="invite">
        <span className="invite-icon">
          <FontAwesomeIcon icon={ faLongArrowAltRight } />
        </span>
        <span className="invite-text">Share</span>
      </div>
    </div>
  </section>
);

export default ShareBox;