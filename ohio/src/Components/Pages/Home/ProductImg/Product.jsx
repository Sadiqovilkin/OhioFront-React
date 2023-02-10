import React from "react";
import "./Product.scss";
const Product = () => {
  return (
    <section id="product">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 p-0">
            <div className="product_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/zdfLZADL-oh__demo31__1.jpeg"
                alt=""
              />
              <div className="product_txt">
                <h4>Stickers Pack</h4>
                <p id="txt">Identity, Mockup</p>
                <p id="hover_txt">Show Project</p>
              </div>
              <img
                id="play_img"
                src="https://community.adobe.com/t5/image/serverpage/image-id/45229i4C951E379A470D7E/image-size/large?v=v2&px=999"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-8 p-0">
            <div className="product_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__img25-1920x1076.jpeg"
                alt=""
              />
              <div className="product_txt">
                <h4>Stickers Pack</h4>
                <p id="txt">Identity, Mockup</p>
                <p id="hover_txt">Show Project</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 p-0">
            <div className="product_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/drZ4vTCS-oh__img95-1920x1076.jpeg"
                alt=""
              />
              <div className="product_txt">
                <h4>Stickers Pack</h4>
                <p id="txt">Identity, Mockup</p>
                <p id="hover_txt">Show Project</p>
              </div>
              <img
                id="play_img"
                src="https://community.adobe.com/t5/image/serverpage/image-id/45229i4C951E379A470D7E/image-size/large?v=v2&px=999"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="product_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/zxDVPhmF-oh__img31.jpeg"
                alt=""
              />
              <div className="product_txt">
                <h4>Stickers Pack</h4>
                <p id="txt">Identity, Mockup</p>
                <p id="hover_txt">Show Project</p>
              </div>
              <img
                id="play_img"
                src="https://community.adobe.com/t5/image/serverpage/image-id/45229i4C951E379A470D7E/image-size/large?v=v2&px=999"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
