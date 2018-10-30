import React from 'react';
import Trailer from './Trailer.jsx';
import PurchaseBox from './PurchaseBox.jsx';
import Features from './Features.jsx';
import Interactives from './Interactives.jsx';
import CouponDefault from './CouponDefault.jsx';
import CouponForm from './CouponForm.jsx';
import ShareBox from './ShareBox.jsx';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCoupon: false,
    };
    this.couponClickHandler = this.couponClickHandler.bind(this);
  }

  couponClickHandler() {
    this.setState({ hasCoupon: true });
  }
  
  render() {
    let coupon;
    if (!this.state.hasCoupon) {
      coupon = <CouponDefault couponClickHandler={ this.couponClickHandler }/>;
    } else {
      coupon = <CouponForm />;
    }
    return (
      <div className="right-col">
        <div className="side-bar-container">
          <Trailer />
          <PurchaseBox />
          <Features />
          <Interactives />
          <section className="coupon-box">
            { coupon } 
          </section>
          <ShareBox />
        </div>
      </div>
    );
  }
};

export default Sidebar;