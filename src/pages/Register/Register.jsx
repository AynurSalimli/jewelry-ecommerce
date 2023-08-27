import React, { useState } from "react";
import "./register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    const emptyFields = Object.keys(formData).filter(
      (key) => formData[key] === ""
    );
    if (emptyFields.length > 0) {
      emptyFields.forEach((field) => {
        document.getElementById(field).classList.add("empty-field");
      });
    } else {
      // Kayıt işlemleri
    }
  };

  return (
    <div className="register">
      <h3>Qeydiyyat</h3>
      <p>Bütün sahələri doldurmağınız vacibdir</p>
      <div className="register--inputs">
        <input
          type="text"
          id="firstName"
          placeholder="Adınız"
          value={formData.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
        />
        <input
          type="text"
          id="lastName"
          placeholder="Soyadınız"
          value={formData.lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
        />
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Şifrə"
          value={formData.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />
        <button onClick={handleRegister}>Hesab yarat</button>
        <div className="loginlink">
          <p>Hesabınız var?</p>
          <a href="/login">Giriş</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
