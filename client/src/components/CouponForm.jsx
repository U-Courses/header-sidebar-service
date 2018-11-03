import React from 'react';

const CouponForm = props => (
  <div className="coupon-form-area">
    <form className="coupon-form">
      <div className="form-group">
        <input type="text" placeholder="Enter Coupon" className="form-input" />
        <button type="submit"className="coupon-form-btn red-btn">Apply</button>
      </div>
    </form>
  </div>
);

export default CouponForm;