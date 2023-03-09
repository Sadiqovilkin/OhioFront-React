import React from "react";
import FilterMock from "../../../Mock/FilterMock";
import "./SearchCard.scss";

const SearchCard = () => {
  // filterSelection("all")
  // function filterSelection(c) {
  //   var x, i;
  //   x = document.getElementsByClassName("column");
  //   if (c == "all") c = "";

  //   for (i = 0; i < x.length; i++) {
  //     w3RemoveClass(x[i], "show");
  //     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  //   }
  // }
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
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="btns">
              <span>Filter by</span>
              <button>All</button>
              <button>Apps</button>
              <button>Branding</button>
              <button>Creative</button>
              <button>Identiy</button>
              <button>Mockup</button>
            </div>
          </div>
        </div>
        <div className="row my-5">
          {FilterMock &&
            FilterMock.map((el, index) => (
              <div key={index} className={el.filterClass}>
                <div className="cards">
                  <div className="cards_img">
                    <img src={el.ImgSrc} alt="" />
                  </div>
                  <div className="product_txt">
                    <h4>{el.Cardname}</h4>
                    <p id="txt">{el.filterName}</p>
                    <p id="hover_txt">Show Project</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SearchCard;
