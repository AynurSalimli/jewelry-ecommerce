import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./header.scss";
const Header = ({ category, subcategory, basket, wishlist }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="header">
      <p className="header__logo" data-aos="zoom-in">
        <NavLink to="/">Enchant</NavLink>
      </p>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="24"
          viewBox="0 0 52 24"
        >
          <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
            <rect
              id="Rectangle_3"
              data-name="Rectangle 3"
              width="42"
              height="4"
              rx="2"
              transform="translate(304 47)"
              fill="#574c4c"
            />
            <rect
              id="Rectangle_5"
              data-name="Rectangle 5"
              width="42"
              height="4"
              rx="2"
              transform="translate(304 67)"
              fill="#574c4c"
            />
            <rect
              id="Rectangle_4"
              data-name="Rectangle 4"
              width="52"
              height="4"
              rx="2"
              transform="translate(294 57)"
              fill="#574c4c"
            />
          </g>
        </svg>
      </div>
      <div className={`header__right ${showNavbar && "active"}`}>
        <div className="header__menu" data-aos="zoom-in">
          <ul className="header__menu--elements">
            <li>
              <NavLink to="/">Ana səhifə</NavLink>
            </li>
            <li className="header__menu--elements--shop">
              <NavLink>Mağaza</NavLink>
              <ul className="header__menu--dropdown">
                <div className="dropdownelements">
                  {category.map((a) => {
                    const findSubcategory = subcategory.filter(
                      (b) => a.id === b.cat_id
                    );
                    return (
                      <div className="dropdownelement">
                        <li
                          key={a.id}
                          className="header__menu--dropdown--title"
                        >
                          <NavLink
                            to={`/category/${a.id}/${a.name.toLowerCase()}`}
                            className="dropdown--title"
                          >
                            {a.name}
                          </NavLink>
                          <ul>
                            {findSubcategory.map((a) => (
                              <li
                                key={a.id}
                                className="header__menu--dropdown--desc"
                              >
                                <NavLink
                                  style={{ paddingTop: "6px" }}
                                  to={`/subcategory/${
                                    a.id
                                  }/${a.title.toLowerCase()}`}
                                >
                                  {a.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </div>
                    );
                  })}
                </div>
                <li className="see-all">
                  <NavLink to="/shop">
                    <button>Hamısına bax</button>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/about">Haqqımızda</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Əlaqə</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Bloq</NavLink>
            </li>
          </ul>
        </div>
        <div className="header__items" data-aos="zoom-in">
          <div className="header__items--login">
            <NavLink to="/register">
              <svg
                focusable="false"
                width="18"
                height="17"
                class="svg-user"
                viewBox="0 0 18 17"
              >
                <circle
                  cx="9"
                  cy="5"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linejoin="round"
                ></circle>
                <path
                  d="M1 17v0a4 4 0 014-4h8a4 4 0 014 4v0"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                ></path>
              </svg>
            </NavLink>
          </div>
          <div className="header__items--wish">
            <NavLink to="/wishlist">
              <svg
                class="svg-heart"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </NavLink>
            {wishlist.length > 0 ? (
              <div className="count">{wishlist.length}</div>
            ) : null}
          </div>
          <div className="header__items--basket">
            <NavLink to="/cart">
              <svg
                class="svg-cart"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M17 12C16.8783 10.3844 16.8493 8.62292 16.6432 6.82973C16.3117 3.95723 14.8592 2 12 2C9.14079 2 7.68828 3.95723 7.3568 6.8286C7.15067 8.62292 7.12175 10.3833 7 11.9989"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linejoin="bevel"
                  ></path>
                  <path
                    d="M22 23V9H2V23H22Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_4428_3972">
                    <rect
                      width="22"
                      height="23"
                      fill="white"
                      transform="translate(1 1)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </NavLink>
            {basket.length > 0 ? (
              <div className="count">{basket.length}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
const t = (a) => a;
export default connect(t)(Header);
