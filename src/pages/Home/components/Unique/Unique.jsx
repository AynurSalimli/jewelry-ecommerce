import { useEffect } from "react";
import "./unique.scss";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper";
const Unique = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(4);

  useEffect(() => {
    fetchProductsByCategory(selectedCategory);
  }, [selectedCategory]);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await fetch(
        `http://localhost:2709/products?category_id=${category}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const groupProducts = (products, itemsPerGroup) => {
    const groupedProducts = [];
    for (let i = 0; i < products.length; i += itemsPerGroup) {
      groupedProducts.push(products.slice(i, i + itemsPerGroup));
    }
    return groupedProducts;
  };

  return (
    <div className="unique">
      <h2 className="unique__text">Sizin üçün unikal dizayn edilmiş</h2>
      <ul className="unique__categories">
        <li
          onClick={() => handleCategorySelect(4)}
          className={selectedCategory === 4 ? "selected" : ""}
        >
          Sırğalar
        </li>
        <li
          onClick={() => handleCategorySelect(2)}
          className={selectedCategory === 2 ? "selected" : ""}
        >
          Qolbaqlar
        </li>
        <li
          onClick={() => handleCategorySelect(3)}
          className={selectedCategory === 3 ? "selected" : ""}
        >
          Üzüklər
        </li>
      </ul>
      {products.length > 0 ? (
        <div className="unique__products">
          <ul>
            <Swiper
              scrollbar={{
                hide: true,
              }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              {groupProducts(products, 5).map((group, index) => (
                <SwiperSlide key={index}>
                  <ul className="unique__products-list">
                    {group.map((product) => (
                      <li key={product.id} className="unique--item">
                        <Link to={`/products/${product.id}`}>
                          <div className="product__images">
                            <img
                              className="first-image"
                              src={product.images[0]}
                              alt=""
                            />
                          </div>
                          <p className="unique__products--name">
                            {product.name}
                          </p>
                        </Link>
                        <p className="unique__products--price">
                          ${product.price}
                        </p>
                      </li>
                    ))}
                  </ul>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      ) : (
        <div>
          <h2>No products available for this category.</h2>
        </div>
      )}
    </div>
  );
};

export default Unique;
