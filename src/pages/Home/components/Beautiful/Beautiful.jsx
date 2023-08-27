import React from "react";
import "./beautiful.scss";
import { Link } from "react-router-dom";

const Beautiful = () => {
  return (
    <div className="beautiful">
      <div className="beautiful__img">
        <img
          src="https://cdn.shopify.com/s/files/1/0748/1612/7275/files/img1.jpg?v=1681062473&width=1296"
          alt=""
        />
      </div>

      <div className="beautiful__text" data-aos="fade-up-left">
        <p>Bizim şüarımız</p>
        <h2>Gözəl görünüş</h2>
        <span className="beautiful__text--desc">
          Zərgərlik əsrlər boyu bəşər mədəniyyətlərini valeh edən zamansız və
          əziz bir bəzək növüdür. Gözəlliyi, statusu, əhval-ruhiyyəni və özünü
          ifadəni simvolizə edən cəmiyyətdə özünəməxsus yer tutur. Müxtəlif
          qiymətli metallardan, qiymətli daşlardan və digər materiallardan
          hazırlanmış zərgərlik məmulatları zəriflikdən tutmuş cəsarətli
          ifadələrə qədər müxtəlif üslubları əhatə edir.Zərgərliyin tarixi ilk
          sivilizasiyaların mövcud olduğu qədim dövrlərə gedib çıxır. dekorativ
          parçalar yaratmaq üçün qabıqlar, sümüklər və daşlar kimi təbii
          materiallardan istifadə etmişdir. Zaman keçdikcə metallurgiya və
          sənətkarlıq inkişaf etdikcə zərgərlik müxtəlif cəmiyyətlərin mədəni,
          dini və sosial dəyərlərini əks etdirən daha mürəkkəb və mürəkkəb hala
          gəldi.Qızıl, gümüş və platin kimi qiymətli metallar uzun müddət
          davamlılığına görə üstünlük təşkil edirdi. və parlaq gözəllik. Onlar
          nəsildən-nəslə ötürülə bilən incə parçalar yaratmaq üçün əsas kimi
          xidmət edir. Qiymətli daşlar da zərgərlik dizaynında mühüm rol
          oynayır. Hər bir qiymətli daşın özünəməxsus simvolizmi və cazibəsi
          var, almazlar gücü və saflığı, yaqut ehtiras və məhəbbəti, zümrüdləri
          dirçəliş və böyüməyi, müdrikliyi və krallığı təcəssüm etdirən
          sapfirlərlə.
        </span>
        <Link to="/about">
          <button>Davamını oxu</button>
        </Link>
      </div>
    </div>
  );
};

export default Beautiful;
