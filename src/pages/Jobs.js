import React, { useState } from "react";
import LatestJobs from "../components/LatestJobs/LatestJobs";

function Jobs() {
  // Sample job data
  const jobData = [
    { id: 1, title: "Frontend Developer", category: "Development" },
    { id: 2, title: "Backend Developer", category: "Development" },
    { id: 3, title: "Project Manager", category: "Management" },
    { id: 4, title: "UI/UX Designer", category: "Design" },
    { id: 5, title: "QA Engineer", category: "Testing" },
    { id: 6, title: "HR Specialist", category: "HR" },
    { id: 7, title: "DevOps Engineer", category: "Development" },
    { id: 8, title: "Product Owner", category: "Management" },
    { id: 9, title: "Graphic Designer", category: "Design" },
    { id: 10, title: "Recruiter", category: "HR" },
    { id: 11, title: "QA Engineer", category: "Testing" },
    { id: 12, title: "QA Engineer", category: "Testing" },
  ];

  // State for selected filter
  const [filter, setFilter] = useState("All");

  // Filtered job list based on selected category
  const filteredJobs =
    filter === "All"
      ? jobData
      : jobData.filter((job) => job.category === filter);

  // Indices to show advertisement after
  const adIndices = [5, 11]; // Show ad after 3rd, 6th, and 9th items

  return (
    
    <div className="container">
      <div className="row my-5">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h2>Latest Jobs</h2>
          {/* Filter Dropdown */}
          <div className="row mb-4">
            <div className="col-12 d-flex justify-content-end">
              <select
                className="form-select form-select-sm"
                style={{ width: "200px" }}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Development">Development</option>
                <option value="Management">Management</option>
                <option value="Design">Design</option>
                <option value="Testing">Testing</option>
                <option value="HR">HR</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12 mb-4">
          <div className="row g-0">
            {filteredJobs.map((job, index) => (
              <React.Fragment key={job.id}>
                <div className="col-lg-4 col-md-6">
                  <LatestJobs job={job} />
                </div>
                {/* Advertisement Section After Specific Indices */}
                {adIndices.includes(index) && (
                  <div className="col-12">
                    <div className="container d-flex justify-content-center">
                      <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="card bg-light text-center p-3 mb-4">
                          <h5>Advertisement</h5>
                          <p>Place your ad here</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
