import React from "react";
import "../components/latestNews/LatestNews.css";

function News() {
  return (
    <>
      {/* Latest News Section */}
      <div className="container">
        <div className="LatestNews">
          <div className="row">
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
                <div className="col-md-12 mb-4">
                  <div className="card bg-dark text-white BigNewsCard">
                    <img
                      src="https://picsum.photos/id/530/1000"
                      className="card-img img-fluid"
                      style={{ height: "400px", objectFit: "cover" }}
                      alt="Big News"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="card-title">
                        <span className="badge bg-primary">Breaking News</span>
                      </h5>
                      <p className="card-text">
                        This is a short description of the big news. It
                        highlights the most important Information.
                        <a href="NewsInBrief" className="text-success">
                          Read more...
                        </a>
                      </p>
                      <p className="card-text">
                        <small>Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Small Card Below Big Card */}
                <div className="col-lg-12">
                  <div className="row">
                    {[1, 2, 3, 4].map((_, index) => (
                      <div className="col-lg-6  mb-4" key={index}>
                        <div className="card">
                          <div className="row g-0">
                            <div className="col-4">
                              <img
                                src={`https://picsum.photos/id/45${index}/200`}
                                className="img-fluid rounded-start"
                                style={{ height: "100px" }}
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
      {/* Advertisement Section */}
      <div className="container d-flex justify-content-center">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="card bg-light text-center p-3 mb-4">
            <h5>Advertisement</h5>
            <p>Place your ad here</p>
          </div>
        </div>
      </div>

      {/* College & University News Section */}

      <div className="container my-5 py-5">
        {/* Section Header */}
        <div className="row interviewHeading">
          <div className="col-12 my-2 d-flex justify-content-between align-items-center">
            <h2>College & University News </h2>
            <button className="btn btn-primary btn-sm headingBtn">
              See All
            </button>
          </div>
          <hr />
        </div>
        <div className="col-lg-12">
          <div className="row">
            {[1, 2, 3, 4].map((_, index) => (
              <div className="col-lg-3 col-md-6  mb-4" key={index}>
                <div className="card text-bg-dark border-none">
                  <img
                    src={`https://picsum.photos/id/53${index}/1000`}
                    class="card-img"
                    alt="..."
                  ></img>
                  <div
                    class="card-img-overlay h-100 d-flex flex-column justify-content-end"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, rgba(0,0,0,1))",
                    }}
                  >
                    <h4>
                      <a
                        href="#"
                        className="text-white"
                        style={{ lineHeight: "1.6", textDecoration: "none" }}
                      >
                        BHU- Banaras Hindu University: Compre
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* School and Play School News Section */}
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-lg-9 col-md-8">
            <div className="row mb-4">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h2>School & Play School News</h2>
                <button className="btn btn-primary btn-sm headingBtn">
                  See All
                </button>
              </div>
              <hr className="my-2" />
            </div>

            <div className="row">
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-6">
                    <img
                      src="https://picsum.photos/id/730/1000"
                      className="card-img img-fluid"
                      style={{ height: "300px", objectFit: "cover" }}
                      alt="Big News"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <h3 class="card-title">
                        HBSE Classes 10, 12 board exam 2025 registration
                        deadline extended
                      </h3>
                      <p class="card-text">
                        The HBSE Board Examination 2025 registration deadline
                        for both Class 10 and Class 12...
                      </p>
                      <button className="btn my-4">Read More</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Card Below Big Card */}
              <div className="col-lg-12">
                <div className="row">
                  {[1, 2, 3, 4].map((_, index) => (
                    <div className="col-lg-6  mb-4" key={index}>
                      <div className="card">
                        <div className="row g-0">
                          <div className="col-4">
                            <img
                              src={`https://picsum.photos/id/70${index}/200`}
                              className="img-fluid rounded-start"
                              style={{ height: "100px" }}
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

      {/* ###### Sports News */}
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12  d-flex justify-content-between align-items-center">
            <h2>Sports News</h2>
            <button className="btn btn-primary btn-sm headingBtn">
              See All
            </button>
          </div>
          <hr className="my-2" />
        </div>

        <div className="row gap-0 ">
          {[1, 2, 3].map((_, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="NewsCard card">
                <img
                  src={`https://picsum.photos/id/65${index}/500`}
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <div className="data">
                    <div className="content">
                      <span
                        className="badge bg-primary mb-2"
                        style={{ fontSize: "12px" }}
                      >
                        Sports
                      </span>
                      <h3 className="card-title">
                        <a href="#">
                          Everything You Need to Know About Gold Medals
                        </a>
                      </h3>
                      <p className="card-text">
                        Olympic gold medals contain only about 1.34 percent
                        gold, with the rest composed of sterling silver.
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Abroad News Section */}
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-lg-12 col-md-8">
            <div className="row mb-4">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h2>Study Abroad News</h2>
                <button className="btn btn-primary btn-sm headingBtn">
                  See All
                </button>
              </div>
              <hr className="my-2" />
            </div>

            <div className="row">
              <div className="col-md-12 mb-4">
                <div className="card bg-dark text-white BigNewsCard">
                  <img
                    src="https://picsum.photos/id/580/1000"
                    className="card-img img-fluid"
                    style={{ height: "400px", objectFit: "cover" }}
                    alt="Big News"
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 className="card-title">
                      <span className="badge bg-primary">STUDY ABROAD</span>
                    </h5>
                    <h3 className="card-text text-white">
                      This is a short description of the big news. It highlights
                      the most important Information.
                      <a href="#" className="text-success">
                        Read more...
                      </a>
                    </h3>
                    <p className="card-text">
                      <small>Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
              {/* Small Card Below Big Card */}
              <div className="col-lg-12">
                <div className="row gap-0 ">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                    <div className="col-lg-3 col-md-6 my-5" key={index}>
                      <div className="card text-bg-dark border-none">
                        <img
                          src={`https://picsum.photos/id/53${index}/1000`}
                          class="card-img"
                          alt="..."
                        ></img>
                        <div
                          class="card-img-overlay h-100 d-flex flex-column justify-content-end"
                          style={{
                            background:
                              "linear-gradient(to bottom, transparent, rgba(0,0,0,1))",
                          }}
                        >
                          <div className="content">
                            <span
                              className="badge bg-primary mb-2"
                              style={{ fontSize: "12px" }}
                            >
                              STUDY ABROAD
                            </span>
                            <h4>
                              <a
                                href="#"
                                className="text-white"
                                style={{
                                  lineHeight: "1.6",
                                  textDecoration: "none",
                                }}
                              >
                                Indians form the largest international s
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other News */}

      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="row mb-4">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h2>Other News</h2>
                <button className="btn btn-primary btn-sm headingBtn">
                  See All
                </button>
              </div>
              <hr className="my-2" />
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  {[1, 2, 3, 4].map((_, index) => (
                    <div class="card mb-3" key={index}>
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src={`https://picsum.photos/id/49${index}/1000`}
                            className="card-img img-fluid"
                            style={{ height: "200px", objectFit: "cover" }}
                            alt="Big News"
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h3 class="card-title">
                              HBSE Classes 10, 12 board exam 2025 registration
                              deadline extended
                            </h3>
                            <p class="card-text">
                              The HBSE Board Examination 2025 registration
                              deadline for both Class 10 and Class 12...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            {/* Advertisement Section */}
            <div className="card bg-light text-center p-3 h-50 mb-4">
              <h5>Advertisement</h5>
              <p>Place your ad here</p>
            </div>
            <div class="row">
              {[1,2,3,4].map((index)=>(
              <div class="col-lg-12 col-md-12 my-1" key={index}>
                <div class="card overflow-hidden border border-0 border-bottom">
                    <div class="card-body py-2">
                          <h4>Total Posts</h4>
                          <span>Monthly blog posts</span>
                  </div>
                </div>
              </div>
             ) ) }
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

export default News;
