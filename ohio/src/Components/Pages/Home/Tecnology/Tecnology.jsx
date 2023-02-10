import React from "react";
import "./Tecnology.scss";
const Tecnology = () => {
  return (
    <section id="tecnology">
      <div className="container mb-3">
        <div className="row">
          <div className="col-lg-4">
            <span id="header">CAPABILITIES</span>
            <h3>Creative studio with art and technologies.</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-lg-7 p-0 bg_img"></div>

          <div className="col-lg-5 p-0 ">
            <div className="acardion">
              <img
                src="https://community.adobe.com/t5/image/serverpage/image-id/45229i4C951E379A470D7E/image-size/large?v=v2&px=999"
                alt=""
              />
              <h3>We work in the fields of UI/UX design and art direction.</h3>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Website & Mobile App Design
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Using year-over-year design approaches and latest techs,
                      we will ensure that your new website{" "}
                      <strong>
                        will be visible, accessible, and treads lightly.
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Motion Graphics & Animation
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Cepteur sint occaecat cupidatat proident, taken possession
                      of my entire soul, like these sweet mornings of spring
                      which I enjoy with my whole.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      User Experience
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Cepteur sint occaecat cupidatat proident, taken possession
                      of my entire soul, like these sweet mornings of spring
                      which I enjoy with my whole.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnology;
