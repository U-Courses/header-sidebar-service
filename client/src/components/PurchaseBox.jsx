import React from 'react';

const PurchaseBox = ({ discount_price, list_price }) => (
  <section className="purchase-box">
    <div className="price-box">
      <div className="discount-price price"><strong>{ discount_price }</strong></div>
      <div className="list-price price">{ list_price }</div>
      <div className="percent-off price"><span>{ `${percentOff(discount_price, list_price)} off` }</span></div>
    </div>
    <div className="btn-box">
      <button id="cart-add-btn" className="buy-btn red-btn">Add to Cart</button>
    </div>
    <div className="btn-box">
      <button id="buy-now-btn" className="buy-btn">Buy now</button>
    </div>
    <div className="guarantee">30-Day Money-Back Guarantee</div>
  </section>
);

const percentOff = (discount, list) => {
  // initial state has empty data
  if (discount === undefined || list === undefined) {
    return '0%';
  }

  const discountNum = Number(discount.split('$')[1]);
  const listNum = Number(list.split('$')[1]);
  // percentage off rounded and set as string
  const percentOff = ((listNum - discountNum) / listNum).toFixed(2).split('.')[1];
  return `${percentOff}%`
};

export default PurchaseBox;



