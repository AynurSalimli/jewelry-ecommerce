import React from "react";
import "../contact.scss";
const Question = () => {
  return (
    <div className="question" data-aos="zoom-in">
      <h3>Hər hansı bir sualınız var?</h3>
      <p className="question-desc">
        Satış komandası ilə əlaqə saxlamaq üçün aşağıdakı formdan istifadə edin
      </p>
      <div className="question-email">
        <input type="text" placeholder="Adınız" className="question-email-name" />
        <input
          type="email"
          placeholder="Emailiniz "
          className="question-email-gmail"
        />
      </div>
      <div className="question-number">
        <input
          type="text"
          placeholder="Telefon nömrəsi"
          className="question-number-tel"
        />
      </div>
      <div className="question-text">
        <textarea placeholder="Mesajınız"></textarea>
      </div>
      <button>Göndər </button>
    </div>
  );
};

export default Question;
