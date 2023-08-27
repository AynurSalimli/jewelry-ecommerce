import React from "react";
import "../contact.scss";
const Address = () => {
  return (
    <div className="address">
      <div className="address-item" data-aos="flip-up">
        <div className="address-item-first">
          <i class="fa-solid fa-location-dot"></i>
        </div>
        <div className="address-item-second">
          <h5>Adres</h5>
          <p>0 Washington Square South <br/>New York, NY 10012, United<br/> States</p>
        </div>
      </div>
      <div className="address-item" data-aos="flip-up">
        <div className="address-item-first">
          <i class="fa-solid fa-phone"></i>
        </div>
        <div className="address-item-second">
          <h5>Zəng edin</h5>
          <p>(+877) 834-1434</p>
          <p>(+877) 834-1255</p>
        </div>
      </div>
      <div className="address-item" data-aos="flip-up">
        <div className="address-item-first">
          <i class="fa-solid fa-check"></i>
        </div>
        <div className="address-item-second">
          <h5>Açıq</h5>
          <p>Bazar ertəsi - Cümə: 8am - 4pm</p>
          <p> Şənbə - Bazar: 9am - 5pm</p>
        </div>
      </div>
      <div className="address-item" data-aos="flip-up">
        <div className="address-item-first">
          <i class="fa-regular fa-envelope"></i>
        </div>
        <div className="address-item-second">
          <h5>Email</h5>
          <p>fashionstyle@example.com</p>
          <p>info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
