import React from 'react';

const Sidebar = (props) => (
  <div className="right-col">
    <div className="side-bar-container">
      <section className="trailer-box">
       <div className="trailer">
         <a></a>
       </div>
      </section>
      <section className="purchase-box">
        <div className="sale-price"></div>
        <div className="list-price"></div>
        <div className="percent-off"></div>
        <div className="sale-time-left"></div>
        <div className="btn-box">
          <button id="cart-add-btn">Add to Cart</button>
        </div>
        <div className="btn-box">
          <button id="buy-now-btn">Buy Now</button>
        </div>
        <div>30-Day Money-Back Guarantee</div>
      </section>
      <section className ="features">
        <div>
          <strong>Includes</strong>
        </div>
        <div>
          <ul>
            <li><span className="feature-icon"></span><span className="feature-text"></span></li>
            {/* Turn into component x5 */}
          </ul>
        </div>
      </section>
      <section className="interactives-box">
        <div className="interactives">
          <div>
            <strong>Interactive Features</strong>
          </div>
          <div className="total-resources"></div>
        </div>
      </section>
      <section className="coupon-box">
        <div className="coupon-area">
          <button>Have a coupon?</button>
        </div>
      </section>
      <section className="share-box">
        <div className="delineation"></div>
        <div className="share"></div>
        <div className="invite">
          <span className="invite-icon"></span><span className="invite-text"></span>
        </div>
      </section>
    </div>
  </div>
);

export default Sidebar;