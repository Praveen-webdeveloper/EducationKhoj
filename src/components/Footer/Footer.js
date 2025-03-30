import React from "react";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="container-fluid footer pb-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <img src={logo} alt="img" className="footer_logo" />

              <div className="footer_main_title py-3"> About</div>
              <div className="footer_sub_about pb-3">
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </div>
              <div className="d-flex">
                <a className="footer_icons">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a className="footer_icons">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a className="footer_icons">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a className="footer_icons">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2">
              <div className="footer_main_title py-3"> Category</div>
              <ul className="footer_menu">
                <li>
                  <a href="#" className="">
                    <i className="fa fa-angle-right"></i>&nbsp;&nbsp; Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    <i className="fa fa-angle-right"></i>&nbsp;&nbsp; Job
                    vacancies
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    <i className="fa fa-angle-right"></i>&nbsp;&nbsp; Interviews
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    <i className="fa fa-angle-right"></i>&nbsp;&nbsp; University
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    <i className="fa fa-angle-right"></i>&nbsp;&nbsp; Schools
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-5 col-lg-3 position-relative">
              <div className="footer_main_title py-3"> Latest News</div>
              <div className="footer_makes_sub_font"> Dec 31, 2016</div>
              <a href="#" className="footer_post pb-4">
                {" "}
                Success is not a good teacher failure makes you humble{" "}
              </a>
              <div className="footer_makes_sub_font"> Dec 31, 2016</div>
              <a href="#" className="footer_post pb-4">
                {" "}
                Success is not a good teacher failure makes you humble{" "}
              </a>
              <div className="footer_makes_sub_font"> Dec 31, 2016</div>
              <a href="#" className="footer_post pb-4">
                {" "}
                Success is not a good teacher failure makes you humble{" "}
              </a>
            </div>
            <div className="col-12 col-md-12 col-lg-4 ">
              <div className="footer_main_title py-3"> Latest Interviews</div>
              <a href="#" className="footer_img_post_6">
                <img src="https://via.placeholder.com/200" alt="img" />
              </a>
              <a href="#" className="footer_img_post_6">
                <img src="https://via.placeholder.com/200" alt="img" />
              </a>
              <a href="#" className="footer_img_post_6">
                <img src="https://via.placeholder.com/200" alt="img" />
              </a>
              <a href="#" className="footer_img_post_6">
                <img src="https://via.placeholder.com/200" alt="img" />
              </a>
              <a href="#" className="footer_img_post_6">
                <img src="https://via.placeholder.com/200" alt="img" />
              </a>
              <a href="#" className="footer_img_post_6">
                <img src="https://via.placeholder.com/200" alt="img" />
              </a>
              <a href="#" className="footer_img_post_6">
                <img src="https://via.placeholder.com/200" alt="img" />
              </a>
              <a href="#" className="footer_img_post_6">
                <img src="https://via.placeholder.com/200" alt="img" />
              </a>
              <a href="#" className="footer_img_post_6">
                <img src="https://via.placeholder.com/200" alt="img" />
              </a>
            </div>
          </div>
          <div className="row justify-content-center pt-2 pb-4">
            <div className="col-12 col-md-8 col-lg-7 ">
              <div className="input-group border-0">
                <span
                  className=" subscribe_icon"
                  id="basic-addon1"
                >
                  <i className="fa fa-envelope"></i>
                </span>
                <input
                  type="text"
                  className="form-control footer_textbox"
                  placeholder="Enter your email..."
                  aria-describedby="basic-addon1"
                />
                <a
                  href="#"
                  className="footer_subcribe"
                  id="basic-addon12"
                >
                  {" "}
                  <i className="fa-solid fa-paper-plane"></i>
                  &nbsp;&nbsp;Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid downFooter">
        <div className="container">
          <div className="row  ">
            <div className="col-12  py-4 text-center">
              {" "}
              © Copyright 2018, All rights reserved. Design by{" "}
              <a href="/" title="Praveen Kumar">
                Praveen Kumar
              </a>
              .{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
