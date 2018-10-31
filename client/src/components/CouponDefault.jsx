import React from 'react';

const CouponDefault = props => (
  <div className="default-coupon-area">
    <button onClick={() => props.couponClickHandler(props.active_coupon) }>Have a coupon?</button>
  </div>
);

export default CouponDefault;