import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Product.module.scss";
import Swal from "sweetalert2";
function ProductsBySubcategory({
  products,
  subcategory,
  wishlist,
  category,
  basket,
  dispatch,
}) {
  const { id } = useParams();
  const [filter, setFilter] = useState({
    search: "",
  });
  const handleChange = (e) => {
    let n = e.target.name;
    let c = e.target.checked;
    let v = +e.target.value;
    if (c) {
      setFilter({ ...filter, [n]: [...filter[n], v] });
      return;
    }
    setFilter({ ...filter, [n]: [...filter[n].filter((a) => a !== v)] });
  };
  const filteredSubcategory = products.filter(
    (a) =>
      a.subcategory_id === +id &&
      a.name.toLowerCase().includes(filter.search.toLowerCase())
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
  const subcategoryName = subcategory.find((cat) => cat.id === +id)?.name;

  const handleSearchChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  return (
    <div className="product">
      <h2 className="product__text" data-aos="zoom-in">
        {subcategoryName}
      </h2>
      <div className={styles.container}>
        <div className={styles.filtercat}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search products..."
              value={filter.search}
              onChange={handleSearchChange}
              name="search"
            />
          </div>
        </div>
        <div className="category__wrapper">
          <div className={styles.productspag}>
            <div
              className={styles.products}
              data-aos="zoom-in"
              style={{ paddingBottom: "10px" }}
            >
              {filteredSubcategory.length ? (
                filteredSubcategory.map((a) => {
                  const checkBasket = basket.find((b) => b.id === a.id);
                  const checkWishlist = wishlist.find((w) => w.id === a.id);
                  return (
                    <div className={styles.product}>
                      <div className={styles.image}>
                        <img src={a.images[0]} alt="" />
                        <img src={a.images[1]} alt="" />
                        <div className={styles.buttons}>
                          {!checkBasket ? (
                            <button
                              className={styles.btn}
                              onClick={() => addBasket(a.id)}
                            >
                              <i class="fa-solid fa-basket-shopping"></i>
                            </button>
                          ) : (
                            <button
                              className={styles.btn}
                              onClick={() => removeBasket(a.id)}
                            >
                              <i class="fa-solid fa-xmark"></i>
                            </button>
                          )}
                          {!checkWishlist ? (
                            <button
                              className={styles.btn}
                              onClick={() => addWishlist(a.id)}
                            >
                              <i class="fa-solid fa-heart"></i>
                            </button>
                          ) : (
                            <button
                              className={styles.btn}
                              onClick={() => removeWishlist(a.id)}
                            >
                              <i class="fa-solid fa-heart-crack"></i>
                            </button>
                          )}
                          <Link to={`/products/${a.id}`} className={styles.btn}>
                            <i class="fa-solid fa-eye"></i>
                          </Link>
                        </div>
                      </div>
                      <div className={styles.data}>
                        <p>{a.name}</p>
                        <p>${a.price}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2>No results</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const t = (a) => a;
export default connect(t)(ProductsBySubcategory);
