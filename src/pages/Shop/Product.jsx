import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Product.module.scss";
import Swal from "sweetalert2";

const Product = ({
  products,
  basket,
  dispatch,
  wishlist,
  category,
  color,
  subcategory,
}) => {
  const Swal = require("sweetalert2");
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const [brands, setBrands] = useState(false);
  const [cat, setCat] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [filter, setFilter] = useState({
    search: "",
    category: [],
    subcategory: [],
    color: [],
    minPrice: 0,
    maxPrice: 0,
  });
  const { id } = useParams();
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
  useEffect(() => {
    const findPrice = products.length
      ? Math.max(...products.map((a) => +a.price))
      : 1000000;
    setFilter({ ...filter, maxPrice: findPrice });
  }, []);
  const changePrice = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
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
      title: "Məhsul səbətdən silindi",
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

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearchChange = (e) => {
    setCurrentPage(0);
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  const filteredProducts = products.filter(
    (a) =>
      (!filter.category.length || filter.category.includes(a.category_id)) &&
      (!filter.subcategory.length ||
        filter.subcategory.includes(a.subcategory_id)) &&
      (!filter.color.length || filter.color.includes(a.color_id)) &&
      a.name.toLowerCase().includes(filter.search.toLowerCase()) &&
      +a.price >= +filter.minPrice &&
      +a.price <= +filter.maxPrice
  );

  const offset = currentPage * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    offset,
    offset + itemsPerPage
  );

  return (
    <div className="product">
      <h2 className="product__text" data-aos="zoom-in">
        Bütün məhsullar
      </h2>
      <div className={styles.container}>
        <div className={styles.filtercat}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Axtarış edin..."
              value={filter.search}
              onChange={handleSearchChange}
              name="search"
            />
          </div>
          <div className={styles.prices}>
            <div className="min_price">
              <input
                type="number"
                name="minPrice"
                placeholder={filter.minPrice}
                value={filter.minPrice}
                onChange={changePrice}
                style={{ width: "80px" }}
              />
            </div>
            <div className="max_price">
              <input
                type="number"
                name="maxPrice"
                placeholder={filter.maxPrice}
                value={filter.maxPrice}
                onChange={changePrice}
                style={{ width: "80px" }}
              />
            </div>
          </div>
        </div>
        <div className="product__wrapper">
          <div className={styles.productspag}>
            <div
              className={styles.products}
              data-aos="zoom-in"
              style={{ paddingBottom: "20px" }}
            >
              {filteredProducts.length ? (
                paginatedProducts.map((a) => {
                  const checkBasket = basket.find((b) => b.id === a.id);
                  const checkWishlist = wishlist.find((w) => w.id === a.id);
                  return (
                    <div className={styles.product}>
                      <div className={styles.image}>
                        <img src={a.images[0]} alt="" />
                        <img
                          src={a.images[2] ? a.images[2] : a.images[1]}
                          alt=""
                        />
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
            <div className={styles.pagination}>
              {filteredProducts.length > itemsPerPage && (
                <ReactPaginate
                  previousLabel={currentPage === 0 ? null : "Prev"}
                  nextLabel={
                    currentPage ===
                    Math.ceil(filteredProducts.length / itemsPerPage) - 1
                      ? null
                      : "Next"
                  }
                  breakLabel={"..."}
                  pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
                  onPageChange={handlePageChange}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              )}
            </div>
          </div>

          <div className="allpro_filters">
            <div className="allpro_brands">
              <div className="allpro_title" onClick={() => setBrands(!brands)}>
                <p>Kateqoriya</p>
                <IoIosArrowDown
                  style={
                    brands
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0)" }
                  }
                />
              </div>
              <div className="allpro_overflow">
                <AnimatePresence>
                  {brands && (
                    <motion.div
                      initial={{ y: -500 }}
                      animate={{ y: 0 }}
                      exit={{ y: -500 }}
                      className="allpro_motion"
                    >
                      {category.length
                        ? category.map((cat) => {
                            return (
                              <div className="allpro_brand" key={cat.id}>
                                <input
                                  id={cat.name}
                                  type="checkbox"
                                  name="category"
                                  value={cat.id}
                                  checked={filter.category.includes(cat.id)}
                                  onChange={handleChange}
                                />
                                <label htmlFor={cat.name}>
                                  <div className="checkbox"></div>
                                  {cat.name}
                                </label>
                              </div>
                            );
                          })
                        : null}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="allpro_categories">
              <div className="allpro_title" onClick={() => setCat(!cat)}>
                <p>Subkateqoriya</p>
                <IoIosArrowDown
                  style={
                    cat
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0)" }
                  }
                />
              </div>
              <div className="allpro_overflow">
                <AnimatePresence>
                  {cat && (
                    <motion.div
                      initial={{ y: -500 }}
                      animate={{ y: 0 }}
                      exit={{ y: -500 }}
                      className="allpro_motion"
                    >
                      {subcategory.length
                        ? subcategory.map((cat) => {
                            return (
                              <div className="allpro_category" key={cat.id}>
                                <input
                                  type="checkbox"
                                  name="subcategory"
                                  id={cat.title.toUpperCase()}
                                  value={cat.id}
                                  checked={filter.subcategory.includes(cat.id)}
                                  onChange={handleChange}
                                />
                                <label htmlFor={cat.title.toUpperCase()}>
                                  {cat.name}
                                </label>
                              </div>
                            );
                          })
                        : null}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="allpro_categories">
              <div
                className="allpro_title"
                onClick={() => setColorOpen(!colorOpen)}
              >
                <p>Rəng</p>
                <IoIosArrowDown
                  style={
                    colorOpen
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0)" }
                  }
                />
              </div>
              <div className="allpro_overflow">
                <AnimatePresence>
                  {colorOpen && (
                    <motion.div
                      initial={{ y: -500 }}
                      animate={{ y: 0 }}
                      exit={{ y: -500 }}
                      className="allpro_motion"
                    >
                      {color.length
                        ? color.map((cat) => {
                            return (
                              <div className="allpro_category" key={cat.id}>
                                <input
                                  type="checkbox"
                                  name="color"
                                  id={cat.name}
                                  value={cat.id}
                                  checked={filter.color.includes(cat.id)}
                                  onChange={handleChange}
                                />
                                <label htmlFor={cat.name}>{cat.name}</label>
                              </div>
                            );
                          })
                        : null}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const t = (a) => a;
export default connect(t)(Product);
