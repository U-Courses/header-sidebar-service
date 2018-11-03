import React from 'react';
import styles from '../styles/CouponDefault.css';

const CouponDefault = props => (
  <div className={ styles.defaultCouponArea }>
    <button className={ styles.defaultCouponBtn }
      onClick={() => props.couponClickHandler(props.active_coupon) }>Have a coupon?</button>
  </div>
);

export default CouponDefault;
