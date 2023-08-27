import React from "react";
import "./wishlist.scss";
import { connect } from "react-redux";
import Loading from "../../components/Loading/Loading";

const Wishlist = ({ wishlist, products, dispatch }) => {
  const removeFromBasket = (id) => {
    dispatch({
      type: "SET_WISHLIST",
      payload: [...wishlist.filter((a) => a.id !== id)],
    });
  };
  return (
    <section className="wishlist">
      <h1 className="wishlist--title">Sevimlilər</h1>
      {products.length ? (
        wishlist.length ? (
          <div className="wishlist--items">
            {wishlist.map((a) => {
              const findWishlist = products.find((b) => b.id === a.id);
              return (
                <div key={a.id} className="wishlist--items--item">
                  <div className="wishlist--items--item--left">
                    <img src={findWishlist.images[0]} alt="" />
                </div>
                  <div className="wishlist--items--item--right">
                    <p className="wishlist--items--item--name">
                      {findWishlist.name}
                    </p>
                    <p className="wishlist--items--item--price">
                      ${findWishlist.price}
                    </p>
                    <p
                      className="wishlist--items--item--remove"
                      onClick={() => removeFromBasket(a.id)}
                    >
                      Sil
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="wishlist--empty">
            <img
              className="wishlist--empty--item"
              src="https://shop.lagganindia.com/uploads/empty_wishlist.png"
              alt=""
            />
          </div>
        )
      ) : (
        <Loading />
      )}
    </section>
  );
};

const t = (a) => a;
export default connect(t)(Wishlist);
