import React from "react";
import "./popup.scss";
const Popup = () => {
  return (
    <div className="popup">
      <div className="popup--left">
        <h3>Save 10% on your first order</h3>
        <p>
          Entice customers to sign up for your mailing list with discounts or
          exclusive offers. Include an image for extra impact.
          <div className="popup--left__input">
            <input type="email" name="" id="" placeholder="Your email" />
            <button type="submit">subscribe</button>
          </div>
        </p>
      </div>
      <div className="popup--right">
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default Popup;
