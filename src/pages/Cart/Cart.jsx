import React from "react";
import "./cart.scss";
import { connect } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
const Cart = ({ basket, products, dispatch }) => {
  const increaseCount = (id) => {
    let f = basket.find((a) => a.id === id);
    f.count += 1;
    dispatch({
      type: "SET_BASKET",
      payload: [...basket],
    });
  };
  const decreaseCount = (id) => {
    let f = basket.find((a) => a.id === id);
    f.count -= 1;
    if (!f.count) {
      dispatch({
        type: "SET_BASKET",
        payload: [...basket.filter((a) => a.id !== id)],
      });
      return;
    }
    dispatch({
      type: "SET_BASKET",
      payload: [...basket],
    });
  };
  const removeFromBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((a) => a.id !== id)],
    });
  };
  const totalPrice = basket.reduce(
    (acc, item) =>
      acc + products.find((a) => a.id === item.id)?.price * item.count,
    0
  );
  const totalProductCount = basket.reduce(
    (total, item) => total + item.count,
    0
  );

  return (
    <section className="cart">
      <h1 className="cart--title">Səbət</h1>

      {products.length ? (
        basket.length ? (
          <div className="cart--products">
            <div className="cart--items">
              {basket.map((a) => {
                const findProducts = products.find((b) => b.id === a.id);
                const itemTotalPrice = findProducts.price * a.count;

                return (
                  <div key={a.id} className="cart--items--item">
                    <div className="cart--items--item--product">
                      <div className="cart--items--item--product--img">
                        <img src={findProducts.images[0]} alt="" />
                      </div>
                      <div className="cart--items--item--product--name">
                        <p className="cart--items--item--product--name--title">
                          <Link to={`/products/${a.id}`}>
                            {findProducts.name}
                          </Link>
                        </p>
                        <p
                          className="cart--items--item--product--name--remove"
                          onClick={() => removeFromBasket(a.id)}
                        >
                          Sil
                        </p>
                      </div>
                    </div>
                    <div className="cart--items--item--count">
                      <div className="cart--items--buttons">
                        <button onClick={() => decreaseCount(a.id)}>-</button>
                        <p className="cart--items--buttons--price">{a.count}</p>
                        <button onClick={() => increaseCount(a.id)}>+</button>
                      </div>
                    </div>
                    <div className="cart--items--item--price">
                      ${itemTotalPrice}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart--items--item--total" style={{position: "sticky"}}>
              <p className="cart--items--item--total--count">
                Səbətdəki məhsulların sayı: {totalProductCount}
              </p>
              <p className="cart--items--item--total--price">
                Toplam ödəniləcək məbləğ: ${totalPrice}
              </p>
              <p className="cart--items--item--total--sale">
                Nağd alışda endirim: ${totalPrice / 10}
              </p>
              <p className="cart--items--item--total--paid">Cəmi ödəniləcək məbləğ: ${totalPrice - totalPrice/10}</p>
            </div>
          </div>
        ) : (
          <div className="cart--empty">
            <img
              className="cart--empty--item"
              src="https://hsnbazar.com/images/empty-cart.png"
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
export default connect(t)(Cart);
