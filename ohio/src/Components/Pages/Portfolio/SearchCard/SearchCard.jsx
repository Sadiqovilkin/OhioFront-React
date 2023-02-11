import React from "react";
import "./SearchCard.scss";

const SearchCard = () => {
  return (
    <section id="searchcard">
      <div className="container">
        <div className="row my-5 py-5 justify-content-center">
          <div className="col-lg-3">
            <div className="port_head">
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
      </div>
    </section>
  );
};

export default SearchCard;
