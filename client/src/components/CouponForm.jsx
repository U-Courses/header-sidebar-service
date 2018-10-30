import React from 'react';

const CouponForm = props => (
  <div className="coupon-area">
    <form className="coupon-form">
      <span className="form-group">
        <input type="text" placeholder="Enter Coupon" className="form-input" />
        <span>
          <button type="submit"className="coupon-btn red-btn">Apply</button>
        </span>
      </span>
    </form>
  </div>
);

export default CouponForm;