import React, { useState } from "react";
import "../contact.scss";

const AccordionItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`accordion-item ${expanded ? "expanded" : ""}`}>
      <button
        className={`accordion-button ${expanded ? "expanded" : ""}`}
        onClick={toggleAccordion}
        aria-expanded={expanded}
      >
        <span className="accordion-title">{title}</span>
        <span className="icon" aria-hidden="true"></span>
      </button>
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="container" data-aos="fade-up">
      <h2>FAQ</h2>
      <p>Aşağıda ümumi suallardan bəziləri verilmişdir</p>
      <div className="accordion">
        <AccordionItem
          title="Göndərmə nə qədər vaxt aparacaq?"
          content="Bütün sifarişlər Bellingham WA-dakı anbarımızdan 12-36 saat ərzində göndərilir. Çatdırılma vaxtları göndərmə seçiminizdən asılı olacaq, lakin bütün sifarişlər müəssisəmizdən qapınıza qədər izlənilir."
        />
        <AccordionItem
          title="Sifarişimin təsdiqləndiyini necə bilə bilərəm?"
          content="Bu, verə biləcəyiniz cavab nümunəsidir. Cavablarda mümkün qədər hərtərəfli olmaq yaxşıdır, çünki bu, ümumi etibarı artırmağa meyllidir."
        />
        <AccordionItem
          title="Sifarişim verildikdən sonra göndərmə ünvanımı dəyişə bilərəmmi?"
          content="Bu, verə biləcəyiniz cavab nümunəsidir. Sifarişinizi verdikdən sonra ünvanı dəyişə bilməyiniz təəssüf ki mümkün deyildir."
        />
      </div>
    </div>
  );
};

export default Accordion;
