import React from "react";
import "./damaged.scss";

const Damaged = () => {
  return (
    <div className="damaged">
      <h1>Zədələnmiş & qüsurlu məhsullar</h1>
      <ul>
        <li>
          <p>
            Göndərmə zamanı və ya satın alındıqdan sonra 60 gün ərzində
            zədələnmiş əşyalar halında, müştəri xidməti şöbəmizə e-poçt
            göndərin. Aşağıdakı məlumatlarla:
          </p>
          <p>
            Qüsur/zədələnmiş sahənin ətraflı izahı Qüsur/zədələnmiş ərazinin
            şəkli Əşyanızı mümkün qədər tez dəyişdirmək üçün sizinlə
            işləyəcəyik. Biz onu sizə heç bir ödəniş etmədən göndərəcəyik və
            sizdən tam adınızı və sifariş nömrənizi özündə əks etdirən e-poçt
            vasitəsilə aldığınız faktura/qəbzlə birlikdə zədələnmiş/qüsurlu
            məhsulu qaytarmağınızı xahiş edəcəyik. Pulsuz çatdırılma etiketi
            sizə təqdim olunacaq.
          </p>
        </li>
        <li>
          <p>Mübadiləmin/qaytarımın emal edilməsi nə qədər vaxt aparacaq?</p>
          <p>
            Bir dəfə alınan geri qaytarmaların işlənməsi 5 iş gününə qədər vaxt
            aparır. Sıx tətil mövsümündə qaytarmaların qəbulundan sonra
            işlənməsi 10 iş gününə qədər çəkə bilər. Qaytarmağınız emal
            edildikdən sonra sizə e-poçt vasitəsilə bildiriş göndəriləcək.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Damaged;
