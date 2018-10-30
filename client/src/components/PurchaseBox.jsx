import React from 'react';

const PurchaseBox = props => (
  <section className="purchase-box">
    <div className="sale-price"></div>
    <div className="list-price"></div>
    <div className="percent-off"></div>
    <div className="sale-time-left"></div>
    <div className="btn-box">
      <button id="cart-add-btn">Add to Cart</button>
    </div>
    <div className="btn-box">
      <button id="buy-now-btn red-btn">Buy Now</button>
    </div>
    <div>30-Day Money-Back Guarantee</div>
  </section>
);

export default PurchaseBox;