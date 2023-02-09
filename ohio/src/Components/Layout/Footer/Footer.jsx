import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="foot_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/YbUt6che-OhioLogo.svg"
                alt="lOGO"
              />
            </div>
            <div className="days">
              <span>Fb.</span>
              <span id="solid">.</span>
              <span>Ig.</span>
              <span id="solid">.</span>
              <span>Tw.</span>
              <span id="solid">.</span>
              <span>Be.</span>
            </div>
          </div>
          <div className="col-lg-3">
            <ul className="lists">
              <h3>Rotterdam</h3>
              <li>
                <h4>Ohio Digital Media LTD</h4>
              </li>
              <li>Graaf Florisstraat 22A,</li>
              <li>3021 CH Rotterdam</li>
              <li>Netherlands</li>
              <li>
                <h5>Barcelona</h5>
              </li>
              <li>
                <h4>Ohio Digital LTD</h4>
              </li>
              <li>365 Gran Via de Corts</li>
              <li>Catalanes, BA 08015</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <ul className="lists">
              <h3>Work inquiries</h3>
              <li>Interested in working with us?</li>
              <li>
                <h4>hello@clbthemes.com</h4>
              </li>

              <li>
                <h5>Career</h5>
              </li>

              <li>Looking for a job opportunity?</li>
              <li>
                <h4>See open Position</h4>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <div className="forms">
              <h2>Sign up for the newsletter</h2>
              <form action="">
                <div className="email">
                  <input type="email" id="email" placeholder="Email Adress" />
                  <button>Sign Up</button>
                </div>
                <div className="check">
                  <input type="checkbox" id="checkbox" name="checkbox" />
                  <label htmlFor="checkbox">
                    I’m okay with getting emails and having that activity
                    tracked to improve my experience.
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
