import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import TagRatingsEnroll from './TagRatingsEnroll.jsx';
import styles from '../styles/Header.css';

const Header = ({ course }) => (
  <div className={ styles.leftCol }>
    <div>
      <section className={ styles.titles }>
        <h1>{ course.title }</h1>
        <h3>{ course.description }</h3>
      </section>
      <TagRatingsEnroll course={ course } />
      <section className={ styles.authorUpdateContainer }>
        <div className={ styles.authorUpdate }>
          <div className={ styles.author }>{ `Created by ${course.created_by}` }</div>
          <div className={ styles.update }>{ `Last updated ${course.last_updated}` }</div>
        </div>
      </section>
      <section className={ styles.languagesContainer }>
        <div className={ styles.languages }>
          <div className={ styles.speechIcon }>
            <FontAwesomeIcon icon={ fas.faComment } style={ { color: 'white' } }/>
          </div>
          <div className={ styles.langText }>{ course.language }</div>
          <div className={ styles.ccIcon }>
            <FontAwesomeIcon icon={ fas.faClosedCaptioning } style={ { color: 'white' } }/>
          </div>
          <div>
          { course.ccOptions
              && <span>{ `${course.ccOptions.join(', ')} [Auto-generated]` }</span>
          }
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Header;
