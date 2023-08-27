import React from "react";
import "./photos.scss";
const Photos = () => {
  return (
    <div className="photos">
      <div className="photos__text" data-aos="zoom-in-up">
        <span>@Enchant</span>
        <p>İnstagramda izləyin</p>
      </div>

      <div className="photos__images">
        <div className="photo__container">
          <img
            src="https://cdn.shopify.com/s/files/1/0748/1612/7275/files/i1.jpg?v=1681067031&width=360"
            alt=""
            data-aos="zoom-in-up"
          />
          <div className="photo__overlay">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="photo__container">
          <img
            src="https://cdn.shopify.com/s/files/1/0748/1612/7275/files/i3.jpg?v=1681067031&width=180"
            alt=""
            data-aos="zoom-in-up"
          />
          <div className="photo__overlay">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="photo__container">
          <img
            src="https://cdn.shopify.com/s/files/1/0748/1612/7275/files/i10.jpg?v=1681100388&width=360"
            alt=""
            data-aos="zoom-in-up"
          />
          <div className="photo__overlay">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>

        <div className="photo__container">
          <img
            src="https://cdn.shopify.com/s/files/1/0748/1612/7275/files/i5.jpg?v=1681067031&width=180"
            alt=""
            data-aos="zoom-in-up"
          />
          <div className="photo__overlay">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>

        <div className="photo__container">
          <img
            src="https://cdn.shopify.com/s/files/1/0748/1612/7275/files/i4.jpg?v=1681067031&width=180"
            alt=""
            data-aos="zoom-in-up"
          />
          <div className="photo__overlay">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>

        <div className="photo__container">
          <img
            src="https://cdn.shopify.com/s/files/1/0748/1612/7275/files/i6.jpg?v=1681067031&width=180"
            alt=""
            data-aos="zoom-in-up"
          />
          <div className="photo__overlay">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
