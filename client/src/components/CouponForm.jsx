import React from 'react';
import styles from '../styles/CouponForm.css'

const CouponForm = props => (
  <div className={ styles.couponFormArea }>
    <form className={ styles.couponForm }>
      <div className={ styles.formGroup }>
        <input type="text" placeholder="Enter Coupon" className={ styles.formInput }/>
        <button type="submit"className={ styles.couponFormBtn } >Apply</button>
      </div>
    </form>
  </div>
);

export default CouponForm;