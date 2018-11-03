import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Interactives = ({ total_downloads }) => (
  <section className="interactives-box">
    <div className="interactives">
      <div className="interactive-header">
        <strong className="interactive-header-text">Interactive Features</strong>
        <FontAwesomeIcon icon={ faInfoCircle } fixedWidth/>
      </div>
      <ul className="total-resources" >
      <li>
        <span className="feature-icon">
          <FontAwesomeIcon icon={ faFileAlt } fixedWidth/>
        </span>
        <span className="feature-text">{ `${total_downloads} downloadable resources` }</span>
      </li>
      </ul>
    </div>
  </section>
);

export default Interactives;
