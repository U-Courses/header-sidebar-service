import React from 'react';

const CouponDefault = props => (
  <div className="default-coupon-area">
    <button className="default-coupon-btn" onClick={() => props.couponClickHandler(props.active_coupon) }>Have a coupon?</button>
  </div>
);

export default CouponDefault;