import React from "react";
import "./collections.scss";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <>
      <div className="collections">
        <h2>Bizim kolleksiyalarımız</h2>
        <div className="collections__items">
          <div
            className="collections__items--rings"
          >
            <Link to="/category/3/rings">Üzüklər</Link>
          </div>
          <div
            className="collections__items--earrings"
          >
            <Link to="/category/4/earrings">Sırğalar</Link>
          </div>
          <div
            className="collections__items--necklaces"
          >
            <Link to="/category/1/necklaces">Boyunbağılar</Link>
          </div>
          <div
            className="collections__items--bracelets"
          >
            <Link to="/category/2/bracelets">Qolbaqlar</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
