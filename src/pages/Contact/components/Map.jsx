import React from "react";
import "../contact.scss";
const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194217.42320023614!2d49.73905982129655!3d40.48306856810836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1saz!2saz!4v1691089556233!5m2!1saz!2saz"
        width="100%"
        height="500"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="map-store">
        <h2>Mağazamız</h2>
        <p>10 Naxçıvan, Bakı 1005</p>
        <p>Bakı, Azərbaycan</p>
        <p>B.e - Cümə, 10am - 9pm</p>
        <p>Şənbə, 11am - 9pm</p>
        <p>Bazar, 11am - 5pm</p>
        <button>
          <a href="https://www.google.com/maps/place/Coders+Azerbaijan/@40.3800591,49.7649509,11.99z/data=!4m19!1m12!4m11!1m3!2m2!1d49.8329752!2d40.3864605!1m6!1m2!1s0x40307da6f327d463:0xbe68553e791e5e84!2sCoders+Azerbaijan+10+Nakhchivani+St+Baku+1005!2m2!1d49.8240488!2d40.3827993!3m5!1s0x40307da6f327d463:0xbe68553e791e5e84!8m2!3d40.3827993!4d49.8240488!16s%2Fg%2F11fjzbsyc7?entry=ttu">
            <i class="fa-solid fa-location-dot"></i>Xəritədə göstər
          </a>
        </button>
      </div>
    </div>
  );
};

export default Map;
