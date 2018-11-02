import React from 'react';
import TagRatingsEnroll from './TagRatingsEnroll.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

const Header = ({ course }) => (
  <div className="left-col">
    <div className="header-container">
      <section className="titles">
        <h1>{ course.title }</h1>
        <h3>{ course.description }</h3>
      </section>
      <TagRatingsEnroll course={ course } />
      <section className ="author-update-container">
        <div className="author-update">
          <div className="author">{ `Created by ${course.created_by}` }</div>
          <div className="update">{ `Last updated ${course.last_updated}` }</div>
        </div>
      </section>
      <section className ="languages-container">
        <div className="languages">
          <div className="speech-icon">
            <FontAwesomeIcon icon={ fas.faComment } style={ {color: 'white'} }/>
          </div>
          <div className="lang-text">{ course.language }</div>
          <div className="cc-icon">
            <FontAwesomeIcon icon={ fas.faClosedCaptioning } style={ {color: 'white'} }/>
          </div>
          <div className="cc-text">
          { course.ccOptions && 
              <span>{ `${course.ccOptions.join(', ')} [Auto-generated]` }</span>
          }
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Header;
