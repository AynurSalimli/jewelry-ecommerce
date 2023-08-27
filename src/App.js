import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Cancel from "./pages/Cancel/Cancel";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import ShippingDetail from "./pages/ShippingDetail/ShippingDetail";
import Contact from "./pages/Contact/Contact";
import SingleProduct from "./pages/Shop/SingleProduct";
import About from "./pages/About/About";
import SingleBlog from "./pages/Blog/SingleBlog";
import Refund from "./pages/Refund/Refund";
import Faq from "./pages/Faq/Faq";
import Damaged from "./pages/Damaged/Damaged";
import { connect } from "react-redux";
import ProductsByCategory from "./pages/Shop/ProductsByCategory";
import ProductsBySubcategory from "./pages/Shop/ProductsBySubcategory";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"

const App = ({
  dispatch,
  products,
  category,
  subcategory,
  blog,
  blogcomment,
}) => {
  let loc = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [loc.pathname]);
  useEffect(() => {
    fetch("http://localhost:2709/subcategory")
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_SUBCATEGORY",
          payload: [...a],
        });
      })
      .then(() => {
        fetch("http://localhost:2709/category")
          .then((a) => a.json())
          .then((a) =>
            dispatch({
              type: "SET_CATEGORY",
              payload: [...a],
            })
          );
      })
      .then(() => {
        fetch("http://localhost:2709/color")
          .then((a) => a.json())
          .then((a) => {
            dispatch({
              type: "SET_COLOR",
              payload: [...a],
            });
          });
      })
      .then(() => {
        fetch("http://localhost:2709/products")
          .then((a) => a.json())
          .then((a) =>
            dispatch({
              type: "SET_PRODUCTS",
              payload: [...a],
            })
          );
      })
      .then(() => {
        fetch("http://localhost:2709/blogcomment")
          .then((a) => a.json())
          .then((a) =>
            dispatch({
              type: "SET_BLOGCOMMENT",
              payload: [...a],
            })
          );
      })
      .then(() => {
        fetch("http://localhost:2709/blog")
          .then((a) => a.json())
          .then((a) =>
            dispatch({
              type: "SET_BLOG",
              payload: [...a],
            })
          );
      })
      .then(() => {
        fetch("http://localhost:2709/productcomment")
          .then((a) => a.json())
          .then((a) =>
            dispatch({
              type: "SET_PRODUCTCOMMENT",
              payload: [...a],
            })
          );
      });
  }, []);
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/shipping" element={<ShippingDetail />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/category/:id/:name" element={<ProductsByCategory />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/damaged" element={<Damaged />} />
        <Route
          path="/subcategory/:id/:name"
          element={<ProductsBySubcategory />}
        />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
      <ScrollToTop />

      <Footer />
    </>
  );
};
const t = (a) => a;
export default connect(t)(App);
