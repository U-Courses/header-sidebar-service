import React from 'react';
import styles from '../styles/CouponForm.css';

const CouponForm = ({ couponInputValue, couponInputChangeHandler, couponSubmitHandler }) => (
  <div className={ styles.couponFormArea }>
    <form className={ styles.couponForm } onSubmit={ couponSubmitHandler }>
      <div className={ styles.formGroup }>
        <input type="text" name="couponFormInput" value={ couponInputValue } placeholder="Enter Coupon" className={ styles.formInput } onChange={ couponInputChangeHandler }/>
        <button type="submit"className={ styles.couponFormBtn }>Apply</button>
      </div>
    </form>
  </div>
);

export default CouponForm;
