import React from "react";
import "./Navbar.scss";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav id="nav">
      <div className="container-fluid p-3">
        <div className="row justify-content-between">
          <div className="col-3">
            <div className="left_side">
              <div className="menu-all">
                <RiMenu2Fill style={{ fontSize: "25px", cursor: "pointer" }} />
              </div>
              <div className="img">
                <Link to="/">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/YbUt6che-OhioLogo.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="middle_side">
                <ul>
                  <li>
                    <p>01</p>
                    <Link to="/">Home</Link>
                  </li>
                  <li id="elements">
                    <p>02</p>
                    Elements
                    <div className="container list-hover">
                      <div className="row">
                        <div className="col-lg-2">
                          <ul>
                            <p>WIDGETS</p>
                            <li> Accordion</li>
                            <li>Banner</li>
                            <li>Blog Posts</li>
                            <li>Button</li>
                            <li>Call to Action</li>
                            <li>Carousel</li>
                            <li>Circle Progress Bar</li>
                            <li>Clients Logo</li>
                            <li>Compare</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>WIDGETS</p>
                            <li>Contact Form</li>
                            <li>Countdown</li>
                            <li>Counter</li>
                            <li>Dynamic Text</li>
                            <li>Fullscreen Slider</li>
                            <li>Gallery</li>
                            <li>Google Map</li>
                            <li>Heading</li>
                            <li>Horizontal Accordion</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>WIDGETS</p>
                            <li>Icon Box</li>
                            <li>Instagram Feed</li>
                            <li>Message</li>
                            <li>Parallax</li>
                            <li>Portfolio Projects</li>
                            <li>Pricing List</li>
                            <li>Pricing Table</li>
                            <li>Process</li>
                            <li>Progress Bar</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>WIDGETS</p>
                            <li>Services Table</li>
                            <li>Shop Category</li>
                            <li>Social Networks</li>
                            <li>Subscribe Form</li>
                            <li>Team Group</li>
                            <li>Team Member</li>
                            <li>Testimonial</li>
                            <li>Video</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>MENUS</p>

                            <li>Standard</li>
                            <li>Centered</li>
                            <li>With Center Logo</li>
                            <li>With Top Logo</li>
                            <li>Sidebar Wide</li>
                            <li>Sidebar Top Hamburger</li>
                            <li>Sidebar Center Hamburger</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p> HAMBURGER MENUS</p>

                            <li>Standard Hamburger</li>
                            <li>Centered Hamburger</li>
                            <li>Creative Hamburger</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id="portfolio">
                    <p>03</p>
                    Portfolio
                    <div className="container list-hover">
                      <div className="row">
                        <div className="col-lg-2">
                          <ul>
                            <p>Archive</p>
                            <li>
                              {" "}
                              <Link to="/portfolio">Classic</Link>
                            </li>
                            <li>Classic Contained</li>
                            <li>Classic Metro</li>
                            <li>Button</li>
                            <li>Call to Action</li>
                            <li>Carousel</li>
                            <li>Circle Progress Bar</li>
                            <li>Clients Logo</li>
                            <li>Compare</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>Sliders</p>
                            <li>Horizontal Slider</li>
                            <li>Vertical Slider</li>
                            <li>Counter</li>
                            <li>Dynamic Text</li>
                            <li>Fullscreen Slider</li>
                            <li>Gallery</li>
                            <li>Google Map</li>
                            <li>Heading</li>
                            <li>Horizontal Accordion</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>Single Project</p>
                            <li>Details with Left Gallery</li>
                            <li>Details with Right Gallery</li>
                            <li>Message</li>
                            <li>Parallax</li>
                            <li>Portfolio Projects</li>
                            <li>Pricing List</li>
                            <li>Pricing Table</li>
                            <li>Process</li>
                            <li>Progress Bar</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>Pagination Types</p>
                            <li>Standart</li>
                            <li>Standart: Outlined</li>
                            <li>Social Networks</li>
                            <li>Subscribe Form</li>
                            <li>Team Group</li>
                            <li>Team Member</li>
                            <li>Testimonial</li>
                            <li>Video</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>Hover Effects</p>

                            <li>Classics:Image Scale</li>
                            <li>Classics:Image Overlay</li>
                            <li>With Center Logo</li>
                            <li>With Top Logo</li>
                            <li>Sidebar Wide</li>
                            <li>Sidebar Top Hamburger</li>
                            <li>Sidebar Center Hamburger</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p> Appear Effects</p>

                            <li>Fade Up Effect</li>
                            <li>Fade Down Effect</li>
                            <li>Fade Left Effect</li>
                            <li>Fade Right Effect</li>
                            <li>Flip Up Effect</li>
                            <li>Flip Down Effect</li>
                            <li>Zoom Up Effect</li>
                            <li>Zoom Down Effect</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id="blog">
                    <p>04</p>
                    Blog
                    <div className="container list-hover">
                      <div className="row">
                        <div className="col-lg-2">
                          <ul>
                            <p>Archive</p>
                            <li>
                              {" "}
                              <Link to="/blog">Classic</Link>
                            </li>
                            <li>Classic Contained</li>
                            <li>Classic Metro</li>
                            <li>Button</li>
                            <li>Call to Action</li>
                            <li>Carousel</li>
                            <li>Circle Progress Bar</li>
                            <li>Clients Logo</li>
                            <li>Compare</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>Sliders</p>
                            <li>Horizontal Slider</li>
                            <li>Vertical Slider</li>
                            <li>Counter</li>
                            <li>Dynamic Text</li>
                            <li>Fullscreen Slider</li>
                            <li>Gallery</li>
                            <li>Google Map</li>
                            <li>Heading</li>
                            <li>Horizontal Accordion</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>Single Project</p>
                            <li>Details with Left Gallery</li>
                            <li>Details with Right Gallery</li>
                            <li>Message</li>
                            <li>Parallax</li>
                            <li>Portfolio Projects</li>
                            <li>Pricing List</li>
                            <li>Pricing Table</li>
                            <li>Process</li>
                            <li>Progress Bar</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>Pagination Types</p>
                            <li>Standart</li>
                            <li>Standart: Outlined</li>
                            <li>Social Networks</li>
                            <li>Subscribe Form</li>
                            <li>Team Group</li>
                            <li>Team Member</li>
                            <li>Testimonial</li>
                            <li>Video</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>Hover Effects</p>

                            <li>Classics:Image Scale</li>
                            <li>Classics:Image Overlay</li>
                            <li>With Center Logo</li>
                            <li>With Top Logo</li>
                            <li>Sidebar Wide</li>
                            <li>Sidebar Top Hamburger</li>
                            <li>Sidebar Center Hamburger</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p> Appear Effects</p>

                            <li>Fade Up Effect</li>
                            <li>Fade Down Effect</li>
                            <li>Fade Left Effect</li>
                            <li>Fade Right Effect</li>
                            <li>Flip Up Effect</li>
                            <li>Flip Down Effect</li>
                            <li>Zoom Up Effect</li>
                            <li>Zoom Down Effect</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id="shop">
                    <p>05</p>
                    Shop
                    <div className="container list-hover">
                      <div className="row">
                        <div className="col-lg-2">
                          <ul>
                            <p>Archive</p>
                            <li> Classic</li>
                            <li>Classic Contained</li>
                            <li>Classic Metro</li>
                            <li>Button</li>
                            <li>Call to Action</li>
                            <li>Carousel</li>
                            <li>Circle Progress Bar</li>
                            <li>Clients Logo</li>
                            <li>Compare</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>Product Types</p>
                            <li>
                              <Link to="/product">Standart Product</Link>
                            </li>
                            <li>Grouped Product </li>
                            <li>Counter</li>
                            <li>Dynamic Text</li>
                            <li>Fullscreen Slider</li>
                            <li>Gallery</li>
                            <li>Google Map</li>
                            <li>Heading</li>
                            <li>Horizontal Accordion</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>Single Project</p>
                            <li>Details with Left Gallery</li>
                            <li>Details with Right Gallery</li>
                            <li>Message</li>
                            <li>Parallax</li>
                            <li>Portfolio Projects</li>
                            <li>Pricing List</li>
                            <li>Pricing Table</li>
                            <li>Process</li>
                            <li>Progress Bar</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>Pagination Types</p>
                            <li>Standart</li>
                            <li>Standart: Outlined</li>
                            <li>Social Networks</li>
                            <li>Subscribe Form</li>
                            <li>Team Group</li>
                            <li>Team Member</li>
                            <li>Testimonial</li>
                            <li>Video</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p>Hover Effects</p>

                            <li>Classics:Image Scale</li>
                            <li>Classics:Image Overlay</li>
                            <li>With Center Logo</li>
                            <li>With Top Logo</li>
                            <li>Sidebar Wide</li>
                            <li>Sidebar Top Hamburger</li>
                            <li>Sidebar Center Hamburger</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <p> Category Layout </p>
                            <li>Classic Category</li>
                            <li>Offset Category</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id="pages">
                    <p>06</p>
                    <ul>
                      <li id="hover_about">
                        About <AiOutlinePlus />
                        <ul>
                          <li>About Us</li>
                          <li>About Us 2</li>
                          <li>Our Berau</li>
                          <li>Our Studio</li>
                          <li>Error Page</li>
                        </ul>
                      </li>
                      <li id="hover_about">
                        Contact <AiOutlinePlus />
                        <ul>
                          <li>
                            <Link to="/contact">Contact Agency</Link>
                          </li>
                          <li>About Us 2</li>
                          <li>Our Berau</li>
                          <li>Our Studio</li>
                          <li>Error Page</li>
                        </ul>
                      </li>
                      <li>
                        Special Page <AiOutlinePlus />
                      </li>
                    </ul>
                    Pages
                  </li>
                  <li>
                    <p>07</p>
                    Help
                  </li>
                </ul>
                <div className="right_side">
                  <button>Let's talk</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
