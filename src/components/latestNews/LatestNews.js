import React from "react";
import "./LatestNews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function LatestNews() {
  return (
    <>
      <div className="container">
        <div className="LatestNews">
          <div className="row">
            {/* Main News Section */}
            <div className="col-lg-9 col-md-8">
              <div className="row mb-4">
                <div className="col-12 d-flex justify-content-between align-items-center">
                  <h2>Latest News</h2>
                  <button className="btn btn-primary btn-sm headingBtn">
                    See All
                  </button>
                </div>
                <hr className="my-2" />
              </div>

              <div className="row">
                {/* Big Image Card */}
                <div className="col-lg-6 col-md-12 mb-4">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    autoplay={{
                      delay: 100000,
                      disableOnInteraction: false,
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                      <SwiperSlide>
                        <div className="card text-white BigNewsCard">
                          <img
                            src={`https://picsum.photos/id/10${index}/1000`}
                            className="card-img"
                            style={{height:'370px'}}
                            alt="Big News"/>
                          <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 className="card-title">Big News {index + 1}</h5>
                            <p className="card-text">
                              This is a short description of the big news. It
                              highlights the most important information.
                            </p>
                            <p className="card-text">
                              <small>Last updated 3 mins ago</small>
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {/* Three Vertical Cards Replaced with Small Card Design */}
                <div className="col-lg-6 col-md-12">
                  {[1, 2,3].map((_, index) => (
                    <div className="col-12 mb-4" key={index}>
                      <div className="card" >
                        <div className="row g-0">
                          <div className="col-4">
                            <img
                              src={`https://picsum.photos/id/39${index}/500`}
                              className="img-fluid rounded-start"
                              style={{height:'110px'}}
                              alt={`News ${index + 1}`}
                            />
                          </div>
                          <div className="col-8">
                            <div className="card-body">
                              {/* <h5 className="card-title">News {index + 1}</h5> */}
                              <p className="card-text">
                                A brief description of the smaller news.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Small Card Below Big Card */}
                <div className="col-lg-12">
                  <div className="row">
                    {[1, 2].map((_, index) => (
                      <div className="col-lg-6  mb-4" key={index}>
                        <div className="card">
                          <div className="row g-0">
                            <div className="col-4">
                              <img
                                src={`https://picsum.photos/id/99${index}/500`}
                                className="img-fluid rounded-start"
                                style={{height:'110px'}}
                                alt={`News ${index + 1}`}
                              />
                            </div>
                            <div className="col-8">
                              <div className="card-body">
                                {/* <h5 className="card-title">News {index + 1}</h5> */}
                                <p className="card-text">
                                  A brief description of the smaller news.
                                </p>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Advertisement Section */}
            <div className="col-lg-3 col-md-4">
              <div className="card bg-light text-center p-3 h-50 mb-4">
                <h5>Advertisement</h5>
                <p>Place your ad here</p>
              </div>
              <div className="card bg-light text-center p-3 h-50">
                <h5>Advertisement</h5>
                <p>Place your ad here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestNews;
