import React from "react";
import "./mission.scss";
const Mission = () => {
  return (
    <div className="mission">
      <div
        className="mission__text"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h2>Gözəllik missiyamız</h2>
        <p
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Gözəlik missiyamız bizi ruhlandıran qadınları dəstəkləyir. Özləri
          üzr istəməyən və hər şeyi öz yolu ilə etməkdən qorxmayan qadınlar. Biz
          yaradıcı əməkdaşlıqlar və qrant proqramımız vasitəsilə bu qadınları
          diqqət mərkəzində saxlamağı hədəfləyirik.
        </p>
      </div>
      <div className="mission__img">
        <img
          src="https://www.stoneandstrand.com/cdn/shop/files/gg-mission_1024x.jpg?v=1614369135"
          alt=""
        />
      </div>
    </div>
  );
};

export default Mission;
