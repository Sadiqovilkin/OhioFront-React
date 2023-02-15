import React from "react";
import BlogMock from "../../../Mock/BlogMock";
import "./Blogcard.scss";

const Blogcard = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="row my-5 py-5 justify-content-center">
          <div className="col-lg-3">
            <div className="blog_head">
              <h2>Classic</h2>
              <div className="choose">
                <div className="black">
                  <p>WPBakery</p>
                </div>
                <div className="white">
                  <p>Elementor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {BlogMock &&
            BlogMock.map((el) => (
              <div className="col-lg-4 g-3">
                <div className="cards">
                  <div className="card_img">
                    <img src={el.ImgSrc} alt="" />
                    <div className="card_hover_img">
                      <img
                        src="https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=50&d=mm&r=g"
                        alt=""
                      />
                      <div className="author">
                        <p>posted by</p>
                        <h5>Colabrio</h5>
                      </div>
                    </div>
                  </div>
                  <div className="card_txt">
                    <div className="time">
                      <p>{el.Time}</p>
                    </div>
                    <div className="txt">
                      <h4>{el.Txt}</h4>
                    </div>
                    <div className="category">
                      <span>{el.CategoryOne}</span>
                      <span>{el.CategorySecond}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blogcard;
