import React from "react";
import "../shop.scss";
import { Link } from "react-router-dom";

const Productcard = () => {
  return (
    <div className="product__card">
      <div className="product__card--item">
        <img
          className="product__card--item__img"
          src="https://denmo-bijoux.myshopify.com/cdn/shop/files/x6.jpg?v=1681229877&width=360"
          alt=""
        />
        <Link to="bracelets">
          <h2 className="product__card--item__title">Bracelets →</h2>
        </Link>
        <p className="product__card--item__number">25 items</p>
      </div>
      <div className="product__card--item">
        <img
          className="product__card--item__img"
          src="https://denmo-bijoux.myshopify.com/cdn/shop/files/i4.jpg?v=1681067031&width=360"
          alt=""
        />
        <Link to="necklaces">
          <h2 className="product__card--item__title">Necklaces →</h2>
        </Link>
        <p className="product__card--item__number">25 items</p>
      </div>
      <div className="product__card--item">
        <img
          className="product__card--item__img"
          src="https://denmo-bijoux.myshopify.com/cdn/shop/files/i5.jpg?v=1681067031&width=360"
          alt=""
        />
        <Link to="earrings">
          <h2 className="product__card--item__title">Earrings →</h2>
        </Link>
        <p className="product__card--item__number">25 items</p>
      </div>
      <div className="product__card--item">
        <img
          className="product__card--item__img"
          src="https://denmo-bijoux.myshopify.com/cdn/shop/files/img1.jpg?v=1681062473&width=360"
          alt=""
        />
        <Link to="rings">
          <h2 className="product__card--item__title">Rings →</h2>
        </Link>

        <p className="product__card--item__number">25 items</p>
      </div>
    </div>
  );
};

export default Productcard;
