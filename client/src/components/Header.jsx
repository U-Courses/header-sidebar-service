import React from 'react';
import TagRatingsEnroll from './TagRatingsEnroll.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

const Header = ({ data }) => (
  <div className="left-col">
    <div className="header-container">
      <section className="titles">
        <h1>{ data.title }</h1>
        <h3>{ data.description }</h3>
      </section>
      <TagRatingsEnroll course={ data } />
      <section className ="author-update-container">
        <div className="author-update">
          <div className="author">{ `Created by ${data.created_by}` }</div>
          <div className="update">{ `Last updated ${data.last_updated}` }</div>
        </div>
      </section>
      <section className ="languages-container">
        <div className="languages">
          <div className="speech-icon">
            <FontAwesomeIcon icon={ fas.faComment } style={ {color: 'white'} }/>
          </div>
          <div className="lang-text">{ data.language }</div>
          <div className="cc-icon">
            <FontAwesomeIcon icon={ fas.faClosedCaptioning } style={ {color: 'white'} }/>
          </div>
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
