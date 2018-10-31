import React from 'react';

const Interactives = ({ total_downloads }) => (
  <section className="interactives-box">
    <div className="interactives">
      <div>
        <strong>Interactive Features</strong>
      </div>
      <ul className="total-resources" >
      <li><span className="feature-icon"></span><span className="feature-text">{ `${total_downloads} downloadable resources` }</span></li>
      </ul>
    </div>
  </section>
);

export default Interactives;
