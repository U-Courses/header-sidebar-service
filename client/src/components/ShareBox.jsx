import React from 'react';

const ShareBox = props => (
  <section className="share-box">
    <div className="delineation"></div>
    <div className="share">
      <span>Share and earn up to $30</span><span className="share-blue">*</span>
    </div>
    <div className="invite">
      <span className="share-blue invite-icon"></span><span className="share-blue invite-text"></span>
    </div>
  </section>
);

export default ShareBox;