import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import styles from "./Product.module.scss";
import Swal from "sweetalert2";
const ProductsByCategory = ({
  products,
  wishlist,
  category,
  subcategory,
  basket,
  dispatch,
}) => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
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
  const filteredCategory = products.filter(
    (a) =>
      a.category_id === +id &&
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

  const categoryName = category.find((cat) => cat.id === +id)?.name;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const handleSearchChange = (e) => {
    setCurrentPage(0);
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  const offset = currentPage * itemsPerPage;
  const paginatedProducts = filteredCategory.slice(
    offset,
    offset + itemsPerPage
  );
  return (
    <div className="product">
      <h2 className="product__text" data-aos="zoom-in">
        {categoryName}
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
            <div className={styles.products} data-aos="zoom-in" style={{paddingBottom: "10px"}}>
              {filteredCategory.length ? (
                paginatedProducts.map((a) => {
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
            <div className={styles.pagination}>
              {filteredCategory.length > itemsPerPage && (
                <ReactPaginate
                  previousLabel={currentPage === 0 ? null : "Prev"}
                  nextLabel={
                    currentPage ===
                    Math.ceil(filteredCategory.length / itemsPerPage) - 1
                      ? null
                      : "Next"
                  }
                  breakLabel={"..."}
                  pageCount={Math.ceil(filteredCategory.length / itemsPerPage)}
                  onPageChange={handlePageChange}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const t = (a) => a;
export default connect(t)(ProductsByCategory);
