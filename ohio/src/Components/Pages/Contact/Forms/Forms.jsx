import React from "react";
import { Link } from "react-router-dom";
import "./Forms.scss";
const Forms = () => {
  return (
    <section id="forms">
      <div className="container my-5">
        <div aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Library
            </li>
          </ol>
        </div>
        <div className="row my-5">
          <div className="col-lg-6">
            <div className="header">
              <h3>Get in touch</h3>
            </div>
            <div className="divs">
              <div className="lists">
                <ul>
                  <li>Work Inquiries</li>
                  <li id="dark">+1.809.120.6705</li>
                  <li>Assistance hours:</li>
                  <li>Monday – Friday</li>
                  <li>6 am to 8 pm EST</li>
                </ul>
              </div>
              <div className="lists">
                <ul>
                  <li>Work Inquiries</li>
                  <li id="dark">+1.809.120.6705</li>
                  <li>Assistance hours:</li>
                  <li>Monday – Friday</li>
                  <li>6 am to 8 pm EST</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header">
              <h3>Post address</h3>
              <h3>Social media</h3>
            </div>
            <div className="contents">
              <div className="list">
                <ul>
                  <li>541 Melville Ave, Palo Alto,</li>
                  <li>CA 94301,</li>
                  <li>United States</li>
                </ul>
              </div>
              <div className="link">
                <ul>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row border-top py-5">
          <div className="col-lg-4">
            <form action="">
              <label htmlFor="">Name (required)</label>
              <input type="text" required placeholder="Your name" />
              <br />
              <br />
              <label htmlFor="">Phone (optional)</label>
              <input
                type="text"
                required
                placeholder="Your actual phone number"
              />
            </form>
          </div>
          <div className="col-lg-4">
            <form action="">
              <label htmlFor="">Company (required)</label>
              <input type="text" required placeholder="Your company name" />
              <br />
              <br />
              <label htmlFor="">Subject (optional)</label>
              <input type="text" required placeholder="Choose a subject" />
            </form>
          </div>
          <div className="col-lg-4">
            <form action="">
              <label htmlFor="">Email (required)</label>
              <input type="email" required placeholder="Your working email" />
              <br />
              <br />
              <label htmlFor="">Choose a Budged (USD)</label>
              <input type="text" required placeholder="Less than 5K" />
            </form>
          </div>
          <div className="col-lg-12">
            <form action="">
              <label htmlFor="">Project details</label>
              <textarea
                name=""
                id=""
                placeholder="Brief project details"
              ></textarea>
            </form>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I’m okay with getting emails and having that activity tracked to
                improve my experience.
              </label>
            </div>
            <button>Get aQuote</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
