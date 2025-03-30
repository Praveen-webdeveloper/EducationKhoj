import React from "react";
import "../assets/css/style.css";
import LatestNews from "../components/latestNews/LatestNews";
import Events from "../components/Events/Events";
import InterviewsCard from "../components/Interviews/InterviewsCard";
import LatestJobs from "../components/LatestJobs/LatestJobs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import headerImg from "../assets/images/du.png";

function Home() {
  return (
    <>
      <div className="hero" style={{ position: "relative" }}>
        <Swiper
          modules={Autoplay}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="card bg-dark text-white heroCard">
                <img
                  src={headerImg}
                  className="card-img"
                  alt={`Hero Image ${index + 1}`}
                />
                <div className="card-img-overlay p-0 d-flex flex-column justify-content-end">
                  <div
                    className="text-white d-flex flex-wrap align-items-center heroSec z-2"
                    style={{ padding: "0 7rem" }}
                  >
                    <div className="col-md-5">
                      <h1 className="mb-4 mt-2 display-4 font-weight-bold text-white">
                        Delhi <span className="headline">University</span>
                      </h1>
                      <p className="para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptatem eos ea, cum quae facilis optio impedit
                        tempora aliquam at eveniet?
                      </p>
                      <div className="mt-5">
                        <a
                          href="https://www.du.ac.in"
                          className="btn px-5 py-3 text-white mt-3 mt-sm-0 button"
                        >
                          Reach Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="ticket-form p-5 position-absolute z-2"
          style={{ right: "10%", top: "6rem" }}
        >
          <h2 className="text-light mb-4">Search Your Education Provider</h2>
          <form className="p-4">
            {/* Selection 1 */}
            <div className="form-group mx-2 my-4">
              <select id="option1" className="form-control">
                <option value="">Select Option 1</option>
                <option value="option1a">Option 1A</option>
                <option value="option1b">Option 1B</option>
                <option value="option1c">Option 1C</option>
              </select>
            </div>

            {/* Selection 2 */}
            <div className="form-group mx-2 my-4">
              <select id="option2" className="form-control">
                <option value="">Select Option 2</option>
                <option value="option2a">Option 2A</option>
                <option value="option2b">Option 2B</option>
                <option value="option2c">Option 2C</option>
              </select>
            </div>

            {/* Selection 3 */}
            <div className="form-group mx-2 my-4">
              <select id="option3" className="form-control">
                <option value="">Select Option 3</option>
                <option value="option3a">Option 3A</option>
                <option value="option3b">Option 3B</option>
                <option value="option3c">Option 3C</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="d-grid gap-2">
              <button className="btn btn-primary heroFormButton" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Latest News */}
      <LatestNews />

      {/* Event Section */}
      <Events />

      {/* Interview Section */}
      <div className="interviewContainer">
        <InterviewsCard />
      </div>

      {/* Latest Jobs */}
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h2>Latest Jobs</h2>
            <button className="btn btn-primary btn-sm headingBtn">
              See All
            </button>
          </div>
        </div>
        <hr />
        <div className="row mb-5">
          <div className="col-12 mb-4">
            <div className="row g-0">
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <LatestJobs />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advertisement Section */}
      <div className="container d-flex justify-content-center">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="card bg-light text-center p-3 mb-4">
            <h5>Advertisement</h5>
            <p>Place your ad here</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
