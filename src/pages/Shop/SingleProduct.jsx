import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shipping from "./components/Shipping/Shipping";
import "./shop.scss";
import { connect } from "react-redux";
import styles from "./Product.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import FilteredSingleProducts from "./FilteredSingleProducts";

const SingleProduct = ({
  products,
  basket,
  wishlist,
  productcomment,
  dispatch,
}) => {
  const { productId } = useParams();
  const [singleproduct, setSingleProduct] = useState({});
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    text: false,
  });
  const [submissionError, setSubmissionError] = useState(false);
  const handleValidation = () => {
    const errors = {
      name: newComment.name.trim() === "",
      email: newComment.email.trim() === "",
      text: newComment.text.trim() === "",
    };
    setFormErrors(errors);
    return !Object.values(errors).some(Boolean);
  };
  const [newComment, setNewComment] = useState({
    product_id: +productId,
    name: "",
    email: "",
    text: "",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
    status: 0,
  });
  useEffect(() => {
    fetch(`http://localhost:2709/products/${productId}`)
      .then((data) => data.json())
      .then((data) => setSingleProduct(data));
  }, [productId]);
  const increaseCount = (id) => {
    let f = basket.find((a) => a.id === id);
    console.log(f);
    f.count += 1;
    dispatch({
      type: "SET_BASKET",
      payload: [...basket],
    });
  };
  const filteredProducts = products.filter(
    (a) =>
      a.id !== +productId &&
      a.category_id === singleproduct.category_id &&
      a.subcategory_id === singleproduct.subcategory_id
  );
  console.log(filteredProducts);
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
  const addBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: id, count: 1 }],
    });
  };
  const removeBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((a) => a.id !== id)],
    });
  };

  const addWishlist = (id) => {
    dispatch({
      type: "SET_WISHLIST",
      payload: [...wishlist, { id: id, count: 1 }],
    });
  };

  const removeWishlist = (id) => {
    dispatch({
      type: "SET_WISHLIST",
      payload: [...wishlist.filter((a) => a.id !== id)],
    });
  };
  const checkBasket = basket.find((a) => a.id === +productId);
  const checkWishlist = wishlist.find((a) => a.id === +productId);

  const filteredComments = productcomment.filter(
    (a) => a.product_id === +productId
  );
  const handleChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };
  const saveComment = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      productcomment.push({ ...newComment, id: productcomment.length + 1 });
      fetch("http://localhost:2709/productcomment", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      setNewComment({
        product_id: +productId,
        name: "",
        email: "",
        text: "",
        image:
          "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
        status: 0,
      });
      setSubmissionError(false);
    } else {
      setSubmissionError(true);
    }
  };

  return (
    <>
      {!singleproduct && <div className="loading"></div>}
      {singleproduct && (
        <div className="single">
          <div className="single__image">
            <Swiper
              style={{
                "--swiper-navigation-color": "#b6813c",
                "--swiper-pagination-color": "#b6813c",
                width: "500px",
                height: "600px",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {singleproduct.images?.map((img) => (
                <SwiperSlide className="up_slider">
                  <img src={img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              style={{ width: "500px", height: "150px" }}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {singleproduct.images?.map((img) => (
                <SwiperSlide className="down_slider">
                  <img src={img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="single__text">
            <p className="single__text--metal">{singleproduct.metal}</p>
            <p className="single__text--name ">{singleproduct.name}</p>
            <p className="single__text--subtext">{singleproduct.subtext}</p>

            <p className="single__text--price">${singleproduct.price}</p>
            <div className="single__buttons">
              <div className="single__buttons--add">
                <button
                  onClick={() => decreaseCount(+productId)}
                  y
                  disabled={basket.length === 0}
                >
                  -
                </button>
                {checkBasket?.count ? checkBasket?.count : 0}
                <button
                  onClick={() => increaseCount(+productId)}
                  disabled={!checkBasket}
                >
                  +
                </button>
              </div>
              {!checkBasket ? (
                <div
                  className="single__buttons--cart"
                  onClick={() => addBasket(singleproduct.id)}
                >
                  Səbətə əlavə et
                </div>
              ) : (
                <div
                  className="single__buttons--cart"
                  onClick={() => removeBasket(singleproduct.id)}
                >
                  Səbətdən sil
                </div>
              )}
            </div>
            <div className="single__wishlist">
              {!checkWishlist ? (
                <div
                  className="single__wish"
                  onClick={() => addWishlist(singleproduct.id)}
                >
                  <i className="fa-regular fa-heart"></i>
                  Sevimlilərə əlavə et
                </div>
              ) : (
                <div
                  className="single__wish"
                  onClick={() => removeWishlist(singleproduct.id)}
                >
                  <i class="fa-solid fa-heart" style={{ color: "#b6813c" }}></i>
                  Sevimlilərdən sil
                </div>
              )}
            </div>
            <div className="single__info">
              <div className="single__info--item">
                <p>Stok nömrəsi</p>
                <p>{singleproduct.stock}</p>
              </div>
              {singleproduct?.backing && (
                <div className="single__info--item">
                  <p>Dəstək</p>
                  <p>{singleproduct.backing}</p>
                </div>
              )}
              <div className="single__info--item">
                <p>Metal</p>
                <p>{singleproduct.metal}</p>
              </div>
              {singleproduct?.shape && (
                <div className="single__info--item">
                  <p>Forma</p>
                  <p>{singleproduct.shape}</p>
                </div>
              )}
              {singleproduct?.min_color && (
                <div className="single__info--item">
                  <p>Rəng</p>
                  <p>{singleproduct.min_color}</p>
                </div>
              )}
              {singleproduct?.luster && (
                <div className="single__info--item">
                  <p>Parıltı</p>
                  <p>{singleproduct.luster}</p>
                </div>
              )}
              {singleproduct?.dimensions && (
                <div className="single__info--item">
                  <p>Ölçü</p>
                  <p>{singleproduct.dimensions}</p>
                </div>
              )}
              {singleproduct?.enhancament && (
                <div className="single__info--item">
                  <p>Enhancament</p>
                  <p>{singleproduct.enhancament}</p>
                </div>
              )}
              {singleproduct?.setting_type && (
                <div className="single__info--item">
                  <p>Təyinat növü</p>
                  <p>{singleproduct.setting_type}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <Shipping />
      <div className={styles.container}>
        <div className={styles.product_comments}>
          <h2>Şərh yaz</h2>
          <p>
            Sizin şərhiniz başqaları tərəfindən görünəcək. Bütün xanaları
            doldurmaq zəruridir*
          </p>
          {!newComment.status && (
            <button
              className={styles.writtencomment}
              onClick={() => setNewComment({ ...newComment, status: 1 })}
            >
              Rəy yazmaq
            </button>
          )}
          {!newComment.status ? (
            <div className={styles.single_comment}>
              {filteredComments.length ? (
                filteredComments.map((c) => {
                  return (
                    <div key={c.id} className={styles.comment}>
                      <div className={styles.user}>
                        <div className={styles.user_image}>
                          <img src={c.image} alt="" />
                        </div>
                        <p className={styles.user_name}>{c.name}</p>
                      </div>
                      <p className={styles.user_comment}>{c.text}</p>
                      <hr />
                    </div>
                  );
                })
              ) : (
                <p>Rəy yoxdur</p>
              )}
            </div>
          ) : (
            <form>
              <div className= {styles.mail}>
                <div style={{ paddingBottom: "10px" }} className={styles.first}>
                  <input
                    type="text"
                    placeholder="Adınız"
                    name="name"
                    onChange={handleChange}
                    className={formErrors.name ? "error" : ""}
                  />
                  {formErrors.name && (
                    <span className="error-message">Name is required</span>
                  )}
                </div>
                <div className={styles.first}>
                  <input
                    type="email"
                    placeholder="Emailiniz"
                    name="email"
                    onChange={handleChange}
                    className={formErrors.email ? "error" : ""}
                  />
                  {formErrors.email && (
                    <span className="error-message">Email is required</span>
                  )}
                </div>
              </div>
              <div className={styles.second}>
                <textarea
                  className={`textarea ${formErrors.text ? "error" : ""}`}
                  placeholder="Rəyiniz"
                  name="text"
                  onChange={handleChange}
                />
                {formErrors.text && (
                  <span className="error-message">Comment is required</span>
                )}
              </div>

              <div className="buttons--comment">
                <button
                  className={styles.writtencomment_share}
                  onClick={saveComment}
                >
                  Paylaş
                </button>
                <button
                  className={styles.writtencomment_back}
                  onClick={() => setNewComment({ ...newComment, status: 0 })}
                >
                  Geri
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <FilteredSingleProducts id={productId} singleproduct={singleproduct} />
    </>
  );
};
const t = (a) => a;

export default connect(t)(SingleProduct);
