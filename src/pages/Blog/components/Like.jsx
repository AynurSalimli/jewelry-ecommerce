import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../blog.scss";
const Like = ({ blog, id,filteredComments }) => {
  const filteredBlogs = blog.filter((a) => a.id !== +id);
  return (
    <div className="like">
      <h2 className="like__title">Bunları da bəyənə bilərsən</h2>
      <div className="like__posts">
        {filteredBlogs.map((blog) => (
          <Link
            className="like__posts--items"
            to={`/blog/${blog.id}`}
            key={blog.id}
          >
            <img src={blog.image} alt="" />
            <p className="like__posts--items--date">
              Aprel 09, 2023 <i className="fa-regular fa-comment"></i> {filteredComments.length} rəy
            </p>
            <p className="like__posts--items--name">{blog.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
const t = (a) => {
  return {
    blog: a.blog,
  };
};
export default connect(t)(Like);
