import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Interactives.css';

const Interactives = ({ total_downloads }) => (
  <section>
    <div>
      <div className={ styles.interactiveHeader }>
        <strong className={ styles.interactiveHeaderText }>Interactive Features</strong>
        <FontAwesomeIcon icon={ faInfoCircle } fixedWidth/>
      </div>
      <ul className={ styles.totalResources } >
      <li>
        <span className={ styles.featureIcon }>
          <FontAwesomeIcon icon={ faFileAlt } fixedWidth/>
        </span>
        <span className={ styles.featureText }>{ `${total_downloads} downloadable resources` }</span>
      </li>
      </ul>
    </div>
  </section>
);

export default Interactives;
