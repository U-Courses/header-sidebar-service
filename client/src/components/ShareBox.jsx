import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/ShareBox.css';

const ShareBox = props => (
  <section>
    <div className={ styles.delineation }></div>
    <div className={ styles.shareInviteContainer }>
      <div className={ styles.share }>
        <span className={ styles.shareText }>Share and earn up to $30</span>
      </div>
      <div className={ styles.invite }>
        <span className={ styles.inviteIcon }>
          <FontAwesomeIcon icon={ faLongArrowAltRight } />
        </span>
        <span className={ styles.inviteText }>Share</span>
      </div>
    </div>
  </section>
);

export default ShareBox;