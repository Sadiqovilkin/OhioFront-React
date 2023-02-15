import React from "react";
import "./Award.scss";
const Award = () => {
  return (
    <section id="awards">
      <div className="container ">
        <div className="row">
          <div className="col-lg-6">
            <div className="awards_left">
              <p>AWARDS & HONORS</p>
              <h1>The awards won by our project.</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="awards_right">
              <p>
                Our clients describe us as a product team which{" "}
                <strong>creates amazing UI/UX</strong> experiences,{" "}
                <strong>by crafting top-notch</strong> user experience.
              </p>
              <div className="award_day">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_awwwards-min.png"
                    alt=""
                  />
                </div>
                <p>
                  <strong>5x</strong> Developer Award
                </p>
              </div>
              <div className="award_day">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_awwwards-min.png"
                    alt=""
                  />
                </div>
                <p>
                  <strong>3x</strong> Site of the Day
                </p>
              </div>
              <div className="award_day">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_fwa-min.png"
                    alt=""
                  />
                </div>
                <p>
                  <strong>5x</strong> Mobile of the Day
                </p>
              </div>
              <div className="award_day">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_webby-min.png"
                    alt=""
                  />
                </div>
                <p>
                  <strong>2x</strong> Best Website
                </p>
              </div>
              <div className="award_day">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_webby-min.png"
                    alt=""
                  />
                </div>
                <p>
                  <strong>2x</strong> Best Website
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
