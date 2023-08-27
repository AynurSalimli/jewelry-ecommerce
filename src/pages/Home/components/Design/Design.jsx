import React from "react";
import "./design.scss";
import { Link } from "react-router-dom";
const Design = () => {
  return (
    <div className="design">
      <img
        src="https://cdn.shopify.com/s/files/1/0748/1612/7275/files/ls1.png?v=1681101365&width=180"
        alt=""
      />
      <p className="design__title" data-aos="zoom-in">
        24k qızıl
      </p>
      <h2 className="design__desc" data-aos="zoom-in">
        Biz orjinal şəxsiyyətinizi üzə çıxarmağınıza imkan vermək üçün misilsiz gözəl bijuteriya dizayn edirik.
      </h2>
      <p className="design__link" data-aos="zoom-in">
        <Link to="/shop">Sevdiyin dizaynı tap.</Link>
      </p>
    </div>
  );
};

export default Design;
