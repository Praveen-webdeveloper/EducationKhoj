import React from 'react'

function NewsInBrief() {
  return (
    <>
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
  )
}

export default NewsInBrief