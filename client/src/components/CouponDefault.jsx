import React from 'react';

const CouponDefault = props => (
  <div className="default-coupon-area">
    <button onClick={() => props.couponClickHandler() }>Have a coupon?</button>
  </div>
);

export default CouponDefault;