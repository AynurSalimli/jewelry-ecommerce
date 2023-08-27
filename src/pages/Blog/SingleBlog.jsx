import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import "./blog.scss";
import Like from "./components/Like";
import { connect } from "react-redux";

const SingleBlog = ({ blogcomment, blog }) => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState({});
  const [newComment, setNewComment] = useState({
    blog_id: +id,
    name: "",
    email: "",
    text: "",
    image:
      "https://www.gravatar.com/avatar/e647b85d28047927c3259f77bc48e16?d=identicon&s=30",
    status: 0,
  });

  useEffect(() => {
    fetch(`http://localhost:2709/blog/${id}`)
      .then((a) => a.json())
      .then((a) => setBlogDetail(a));
  }, [id]);
  const filteredComments = blogcomment.filter((a) => a.blog_id === +id);
  const handleChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };
  const saveComment = () => {
    blogcomment.push({ ...newComment, id: blogcomment.length + 1 });
    fetch("http://localhost:2709/blogcomment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
    setNewComment({
      blog_id: +id,
      name: "",
      email: "",
      text: "",
      image:
        "https://www.gravatar.com/avatar/e647b85d28047927c3259f77bc48e16?d=identicon&s=30",
      status: 0,
    });
  };

  if (!blogDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singleblog">
      <div className="singleblog--image">
        <img className="singleblog--image--img" src={blogDetail.image} alt="" />
      </div>
      <div className="singleblog--text">
        <h1 className="singleblog--text--title">{blogDetail.title}</h1>
        <div className="singleblog--text--desc">
          <p className="singleblog--text--desc--item">
            <i class="fa-regular fa-calendar"></i> Apr 09 2023
          </p>
          <p className="singleblog--text--desc--item">
            <i class="fa-regular fa-user"></i> {blogDetail.author}
          </p>
          <p className="singleblog--text--desc--item">
            <i class="fa-regular fa-comment"></i> 2 comments
          </p>
        </div>
      </div>
      <div className="singleblog--words">
        <p className="singleblog--words--first">{blogDetail.first}</p>
        <p className="singleblog--words--second">{blogDetail.second}</p>
        <p className="singleblog--words--third">{blogDetail.third}</p>
      </div>
      <div className="singleblog--social">
        <div className="singleblog--social__left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20"
          >
            <path d="M80 136C80 122.7 90.75 112 104 112C117.3 112 128 122.7 128 136C128 149.3 117.3 160 104 160C90.75 160 80 149.3 80 136zM204.1 32C216.8 32 229.1 37.06 238.1 46.06L410.7 218.7C435.7 243.7 435.7 284.3 410.7 309.3L277.3 442.7C252.3 467.7 211.7 467.7 186.7 442.7L14.06 270.1C5.057 261.1 0 248.8 0 236.1V80C0 53.49 21.49 32 48 32H204.1zM36.69 247.4L209.4 420.1C221.9 432.6 242.1 432.6 254.6 420.1L388.1 286.6C400.6 274.1 400.6 253.9 388.1 241.4L215.4 68.69C212.4 65.69 208.4 64 204.1 64H48C39.16 64 32 71.16 32 80V236.1C32 240.4 33.69 244.4 36.69 247.4V247.4zM308.4 36.95C314.5 30.56 324.7 30.33 331.1 36.43L472.4 171.5C525.1 221.9 525.1 306.1 472.4 356.5L347.8 475.6C341.4 481.7 331.3 481.4 325.2 475.1C319.1 468.7 319.3 458.5 325.7 452.4L450.3 333.4C489.8 295.6 489.8 232.4 450.3 194.6L308.9 59.57C302.6 53.46 302.3 43.34 308.4 36.95V36.95z"></path>
          </svg>
          <p className="singleblog--social__left--name">{blogDetail.jewelry}</p>
        </div>
        <div className="singleblog--social__right">
          <div className="singleblog--social__right--item">
            <i class="fa-brands fa-facebook-f"></i>
            <p className="singleblog--social__right--item--name">Paylaş</p>
          </div>
          <div className="singleblog--social__right--item">
            <i class="fa-brands fa-twitter"></i>
            <p className="singleblog--social__right--item--name">Tvitlə</p>
          </div>
          <div className="singleblog--social__right--item">
            <i class="fa-brands fa-pinterest"></i>
            <p className="singleblog--social__right--item--name">Pinlə</p>
          </div>
        </div>
      </div>

      <div className="singleblog--comments">
        <h2>Şərh yaz</h2>
        <p>
          Sizin şərhiniz başqaları tərəfindən görünəcək. Bütün xanaları
          doldurmaq zəruridir*
        </p>
        {!newComment.status && (
          <button
            className="writecomment"
            onClick={() => setNewComment({ ...newComment, status: 1 })}
          >
            Rəy yazmaq
          </button>
        )}
        {!newComment.status ? (
          <div className="singleblog--comments--comment">
            {filteredComments.length ? (
              filteredComments.map((c) => {
                return (
                  <div key={c.id} className="single-comment">
                    <div className="single-comment-top">
                      <img src={c.image} alt="" />
                      <p>{c.name}</p>
                    </div>

                    <p className="single-comment-bottom">{c.text}</p>
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
            <div className="singleblog--comments--mail">
              <input
                type="text"
                placeholder="Adınız"
                name="name"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Emailiniz"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="singleblog--comments--comment">
              <textarea
                placeholder="Rəyiniz"
                name="text"
                onChange={handleChange}
              />
            </div>
            <div className="buttons--comment">
              <button onClick={saveComment}>Paylaş</button>
              <button
                onClick={() => setNewComment({ ...newComment, status: 0 })}
              >
                Geri
              </button>
            </div>
          </form>
        )}
      </div>
      {console.log(filteredComments.length)}
      <Like id={id} filteredComments={filteredComments} />
    </div>
  );
};
const t = (a) => a;
export default connect(t)(SingleBlog);
