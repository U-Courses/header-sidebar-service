import React from 'react';

const PurchaseBox = ({ discount_price, list_price }) => (
  <section className="purchase-box">
    <div className="discount-price">{ discount_price }</div>
    <div className="list-price">{ list_price }</div>
    <div className="percent-off">{ `${percentOff(discount_price, list_price)} off` }</div>
    <div className="btn-box">
      <button id="cart-add-btn">Add to Cart</button>
    </div>
    <div className="btn-box">
      <button id="buy-now-btn red-btn">Buy Now</button>
    </div>
    <div>30-Day Money-Back Guarantee</div>
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



