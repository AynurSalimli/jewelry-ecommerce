import React from "react";
import { Link } from "react-router-dom";
import './popular.scss'
const Popular = () => {
  return (
    <div className="popular">
      <div className="popular__item" data-aos="zoom-out-up">
        <Link to="/category/4/earrings">
          <div className="popular__item--img">
            <img
              src="https://cdn.shopify.com/s/files/1/0748/1612/7275/files/b19.jpg?v=1681060393&width=1920"
              alt=""
            />
          </div>
        </Link>
        <h4>Müasir bəyanat</h4>
        <p className="popular__item--desc">
          İstənilən geyimə stil toxunuşu əlavə edən müasir bükülmə ilə zamansız
          və taxıla bilən sırğalar.
        </p>
        <Link to="/category/4/earrings">Sırğa al</Link>
      </div>
      <div className="popular__item" data-aos="zoom-out-up">
        <Link to="/category/1/necklaces">
          <div className="popular__item--img">
            <img
              src="https://cdn.shopify.com/s/files/1/0748/1612/7275/files/b20.jpg?v=1681060393&width=1920"
              alt=""
            />
          </div>
        </Link>
        <h4>14k Qızıl Vermeil</h4>
        <p className="popular__item--desc">
          14k Qızıl Vermeildən hazırlanmış parçalar hipoalerjenikdir,
          nikelsizdir və gündəlik geyinmək üçün hazırlanır.
        </p>
        <Link to="/category/1/necklaces"> Klassik al</Link>
      </div>
      <div className="popular__item" data-aos="zoom-out-up">
        <Link to="/category/3/rings">
          <div className="popular__item--img">
            <img
              src="https://cdn.shopify.com/s/files/1/0748/1612/7275/files/b17.jpg?v=1681060393&width=1920"
              alt=""
            />
          </div>
        </Link>
        <h4>Ərimiş qızıl</h4>
        <p className="popular__item--desc">
          Ən populyar üslubumuzu təqdim edirik, yeni və qalın dizaynda Molten
          Choker və gündəlik geyinmək üçün hazırlanır.
        </p>
        <Link to="/category/3/rings">İndi al</Link>
      </div>
    </div>
  );
};

export default Popular;
