import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Product.module.scss";
import Swal from "sweetalert2";
function FilteredSingleProducts({
  id,
  products,
  singleproduct,
  wishlist,
  category,
  basket,
  dispatch,
}) {
  const filteredProducts = products.filter(
    (a) =>
      a.id !== +id &&
      a.category_id === singleproduct.category_id &&
      a.subcategory_id === singleproduct.subcategory_id
  );
  const addBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: id, count: 1 }],
    });
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-start",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Məhsul səbətə əlavə edildi",
    });
  };
  const removeBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((a) => a.id !== id)],
    });
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-start",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Məhsul səbətə silindi",
    });
  };

  const addWishlist = (id) => {
    dispatch({
      type: "SET_WISHLIST",
      payload: [...wishlist, { id: id, count: 1 }],
    });
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-start",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Məhsul sevimlilərə əlavə edildi",
    });
  };

  const removeWishlist = (id) => {
    dispatch({
      type: "SET_WISHLIST",
      payload: [...wishlist.filter((a) => a.id !== id)],
    });
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-start",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Məhsul sevimlilərdən silindi",
    });
  };
  console.log(filteredProducts);
  return (
    <div className="filtered_single">
      <h2>Oxşar məhsullar</h2>
      <div className="filtered_single_products">
        {filteredProducts.map((a) => {
          return (
            <div className="product">
              <div className="product_img">
                <img src={a.images[0]} alt="" />
              </div>
              <p>
                <NavLink to={`/products/${a.id}`}>{a.name}</NavLink>
              </p>
              <p>${a.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const t = (a) => a;
export default connect(t)(FilteredSingleProducts);
