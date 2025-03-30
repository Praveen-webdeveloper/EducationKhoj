import React from "react";
import "./LatestJobs.css";
function LatestJobs() {
  return (
    <>
      <div className="card m-5 jobCardContainer">
        <div className="card-body text-start job-card">
          <div className="job-details">
            <div className="company-logo-img">
              <img src="https://via.placeholder.com/60x60" />
            </div>
            <div className="job-content">
              <div className="job-title">Software Engineer</div>
              <div className="company-name">Hays</div>
            </div>
          </div>
          <div className="job-discription">
            Well qualified english teacher required for class 5-8. Good communi
          </div>
          <div className="skills-container">
            <div className="skill">Teacher</div>
            <div className="skill">Delhi</div>
            <div className="skill">5-7 Years</div>
            <div className="skill">Negotiable</div>
            <div className="skill">Negotiable</div>
          </div>
        </div>
        <div className="card-footer bg-transparent jobContainerFooter">
          <div className="btn-container">
            <button className="apply btn ">Apply</button>
            <button className="moreDetails">More Details</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestJobs;
