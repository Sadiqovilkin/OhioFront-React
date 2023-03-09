import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Projects.scss";
const Project = () => {
  return (
    <section id="project">
      <div className="container">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-lg-8">
            <div className="left_side">
              <span>COLLABORATION</span>
              <h3>
                Got a project?
                <br />
                Let’s talk.
              </h3>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="right_side">
              <Link to={"/contact"}>
                Contact Us <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="row border-top mt-4">
          <p>
            We’re a team of creatives who are excited about unique ideas and
            help fin-tech companies to create amazing identity by crafting
            top-notch UI/UX.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
