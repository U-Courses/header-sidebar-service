import React from 'react';

const Header = props => (
  <div className="left-col">
    <div className="header-container">
      <section className="titles header-row">
        <h1></h1>
        <h3></h3>
      </section>
      <section className="tag_ratings_enroll header-row">
        <div className="tag"></div>
        <div className="ratings"></div>
        <div className="enrollment"></div>
      </section>
      <section className ="author_update_lang">
        <div className="author_update">
          <div className="author"></div>
          <div className="update"></div>
        </div>
        <div className="languages"></div>
      </section>
    </div>
  </div>
);

export default Header;
