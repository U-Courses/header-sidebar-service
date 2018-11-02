import React from 'react';

const Trailer = props => (
  <section className="trailer-box">
    <div className="trailer-container">
      <div className="trailer">
        <img alt="" src={ props.img } />
        <button className="playbtn"></button>
        <span>Preview this course</span>
      </div>
      {/* <div className="trailer-img">
      </div> */}
    </div>
  </section>
);

export default Trailer;
