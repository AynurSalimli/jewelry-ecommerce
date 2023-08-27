import React from "react";
import "./subscribe.scss";
const Subscribe = () => {
  return (
    <div className="subscribe" data-aos="fade-up">
      <div className="subscribe__text" data-aos="zoom-in">
        <span>Abunə olun və 10% Endirim əldə edin</span>
        <p>İlk sifarişdə 10% endirim əldə edin</p>
        <div className="subscribe__text--input">
          <svg
            class="svg-email"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 19.1173C21.9983 19.3508 21.9028 19.5742 21.7341 19.7394C21.5653 19.9045 21.3369 19.9981 21.0982 20H4.72C4.48074 19.9998 4.25136 19.9067 4.08226 19.7412C3.91317 19.5757 3.81818 19.3513 3.81818 19.1173V18.2222H20.1818V7.82222L12.9091 14.2222L3.81818 6.22222V4.88889C3.81818 4.65314 3.91396 4.42705 4.08445 4.26035C4.25494 4.09365 4.48617 4 4.72727 4H21.0909C21.332 4 21.5632 4.09365 21.7337 4.26035C21.9042 4.42705 22 4.65314 22 4.88889V19.1173ZM6.03091 5.77778L12.9091 11.8311L19.7873 5.77778H6.03091ZM2 14.6667H9.27273V16.4444H2V14.6667ZM2 10.2222H6.54545V12H2V10.2222Z"></path>
          </svg>
          <input type="text" placeholder="Emaili yazın" />
          <svg
            class="svg-submit"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.1433 11.6483L10.6733 7.17833L11.8517 6L18.3333 12.4817L11.8517 18.9633L10.6733 17.785L15.1433 13.315H5V11.6483H15.1433Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
