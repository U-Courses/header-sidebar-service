import React from 'react';
import TagRatingsEnroll from './TagRatingsEnroll.jsx';

const Header = ({ data }) => (
  <div className="left-col">
    <div className="header-container">
      <section className="titles header-row">
        <h1>{ data.title }</h1>
        <h3>{ data.description }</h3>
      </section>
      <TagRatingsEnroll data={ data } />
      <section className ="author_update_lang">
        <div className="author_update">
          <div className="author">{ `Created by ${data.created_by}` }</div>
          <div className="update">{ `Last updated ${data.last_updated}` }</div>
        </div>
        <div className="languages">
          <div className="icon"></div>
          <div className="lang-text">{ data.language }</div>
          <div className="icon"></div>
          <div className="cc-text">
          { data.ccOptions && 
              <span>{ `${data.ccOptions.join(', ')} [Auto-generated]` }</span>
          }
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Header;
