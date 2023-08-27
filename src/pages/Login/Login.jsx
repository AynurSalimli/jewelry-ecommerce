import React from "react";
import "./login.scss";
const Login = () => {
  return (
    <div className="register">
      <h3>Giriş</h3>
      <p>Bütün sahələri doldurmağınız vacibdir</p>
      <div className="register--inputs">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Şifrə" />
        <button>Giriş</button>
        <div className="loginlink">
          <p>Hesabınız yoxdur? </p>
          <a href="/register">Qeydiyyat</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
