import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__item">
        <h4>Müştərilər</h4>
        <NavLink to="/contact">
          <p>Əlaqə</p>
        </NavLink>
        <NavLink to="/faq">
          <p>Ən çox verilən suallar</p>
        </NavLink>
        <NavLink to="/refund">
          <p>Qaytarmaq & Dəyişmək</p>
        </NavLink>
        <NavLink to="/shipping">
          <p>Göndərmə & Çatdırılma</p>
        </NavLink>
        <NavLink to="/damaged">
          <p>Zədələnmiş & qüsurlu məhsullar</p>
        </NavLink>
        <NavLink to="/cancel">
          <p>Sifarişin ləğvi & Dəyişdirilməsi</p>
        </NavLink>
      </div>
      <div className="footer__item">
        <h4>Məlumat</h4>
        <NavLink></NavLink>
        <NavLink to="/shop">
          <p>Mağaza</p>
        </NavLink>
        <NavLink to="/about">
          <p>Haqqımızda</p>
        </NavLink>
        <NavLink to="/blog">
          <p>Bloq</p>
        </NavLink>
        <NavLink to="/wishlist">
          <p>Sevimlilər</p>
        </NavLink>
        <NavLink to="/cart">
          <p>Səbət</p>
        </NavLink>
      </div>
      <div className="footer__item">
        <h4>Kateqoriyalar</h4>
        <p>
          <NavLink to="/shop">Bütün məhsullar</NavLink>
        </p>
        <p>
          <NavLink to="/category/3/üzüklər">Üzüklər</NavLink>
        </p>
        <p>
          <NavLink to="/category/4/sırğalar">Sırğalar</NavLink>
        </p>
        <p>
          <NavLink to="/category/2/qolbaqlar">Qolbaqlar</NavLink>
        </p>
        <p>
          <NavLink to="/category/1/boyunbağılar">Boyunbağılar</NavLink>
        </p>
      </div>

      <div className="footer__item">
        <h4>Email ünvanı</h4>
        <p>İlk sifarişinizdə 10% endirim qazanın</p>
        <input type="email" placeholder="Emailiniz"style={{color: "white"}} />
        <button>Abunə ol</button>
        <ul>
          <li>
            <i class="fa-brands fa-facebook-f"></i>
          </li>
          <li>
            <i class="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i class="fa-brands fa-pinterest"></i>
          </li>
          <li>
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i class="fa-brands fa-youtube"></i>
          </li>
          <li>
            <i class="fa-brands fa-tiktok"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
