import React from "react";
import "./Creators.scss";
const Creators = () => {
  return (
    <section id="creators">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 ">
            <div className="left_side">
              <span>We are proud of the works we’ve done.</span>
              <h2>We’re design creators.</h2>
              <p>More Projects</p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="crt_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__demo1__1.png"
                alt=""
              />
              <div className="crt_content">
                <span>Featured project:</span>
                <h4>Unique Bowls From the South Pacific.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creators;
