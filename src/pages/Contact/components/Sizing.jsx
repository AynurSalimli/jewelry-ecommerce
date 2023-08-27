import React from "react";
import "../contact.scss";
const Sizing = () => {
  return (
    <div className="sizing">
      <div className="sizing__img" >
        <img
          src="https://denmo-bijoux.myshopify.com/cdn/shop/articles/diamondblog4_5251b31a-d43c-43db-b7a4-ee6da68e7e04.jpg?v=1681065546&width=2048"
          alt=""
        />
      </div>
      <div className="sizing__text">
        <p className="sizing__text--first">Suallar?</p>
        <h3 className="sizing__text--second">
          Ölçü, üslub və başqa hər şeydə kömək etmək üçün buradayıq
        </h3>
        <p className="sizing__text--third">
          3 il Zəmanət, Uzadılmış 90 Gün Qaytarma, Sürətli Çatdırılma
        </p>
      </div>
    </div>
  );
};
export default Sizing;
