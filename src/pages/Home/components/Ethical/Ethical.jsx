import React from "react";
import "./ethical.scss";
import { Link } from "react-router-dom";
const Ethical = () => {
  return (
    <div className="ethical">
      <div className="ethical--text" data-aos="fade-up-right">
        <p className="ethical--text__title">Əla qızıl</p>
        <h2>Eleqant görünmək gözəldir</h2>
        <p className="ethical--text__desc">
          Məhsullarımız diqqətlə seçilir və əl ilə yığılır.
        </p>
        <Link to="/shop">
          <button>Hamısını al</button>
        </Link>
      </div>
    </div>
  );
};

export default Ethical;
