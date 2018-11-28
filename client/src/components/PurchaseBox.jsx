import React from 'react';
import styles from '../styles/PurchaseBox.css';

const percentOff = (discount, list) => {
  // initial state has empty data
  if (discount === undefined || list === undefined) {
    return '0%';
  }
  const totalPercentOff = ((list - discount) / list).toFixed(2).split('.')[1];
  if (Number(totalPercentOff) < 10) {
    return `${totalPercentOff.slice(1)}%`;
  }
  return `${totalPercentOff}%`;
};

const PurchaseBox = ({ discount_price, list_price }) => (
  <section>
    <div className={ styles.priceBox }>
      <div className={ `${styles.discountPrice} ${styles.price}` }><strong>{ `$${discount_price}` }</strong></div>
      <div className={ `${styles.listPrice} ${styles.price}` }>{ `$${list_price}` }</div>
        <div className={`${styles.percentOffItem} ${styles.price}`}><span>{`${percentOff(discount_price, list_price)} off` }</span></div>
    </div>
    <div className={ styles.btnBox }>
      <button className={ `${styles.cartAddBtn} ${styles.buyBtn}` }>Add to Cart</button>
    </div>
    <div className={ styles.btnBox }>
      <button className={ `${styles.buyNowBtn} ${styles.buyBtn}` }>Buy now</button>
    </div>
    <div className={ styles.guarantee }>30-Day Money-Back Guarantee</div>
  </section>
);

export default PurchaseBox;
