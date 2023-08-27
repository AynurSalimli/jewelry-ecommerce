import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./blog.scss";
const Blog = ({ blog, blogcomment }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      <div className="allblogs">
        {blog.map((blog) => (
          <div className="blog" key={blog.id} data-aos="fade-up">
            <div className="blog__left">
              <img className="blog__left--image" src={blog.image} alt="" />
            </div>
            <div className="blog__right">
              <p className="blog__right--jewelry">
                {blog.jewelry} | <i class="fa-regular fa-comment"></i> {blogcomment.length}
                comments
              </p>
              <h4 className="blog__right--name">{blog.title}</h4>
              <p className="blog__right--desc">{blog.subtitle}</p>
              <Link className="blog__right--more" to={`/blog/${blog.id}`}>
                Daha çox
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const t = (a) => a;
export default connect(t)(Blog);
