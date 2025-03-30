import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Events.css";

const VideoSection = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [VideoTitle, setVideoTitle] = useState("");

  // Dummy video data
  const videos = [
    {
      id: 1,
      title: "Video 1",
      thumbnail: "https://picsum.photos/id/400/200",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "Video 2",
      thumbnail: "https://picsum.photos/id/200/200",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 3,
      title: "Video 3",
      thumbnail: "https://picsum.photos/id/320/200",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 4,
      title: "Video 4",
      thumbnail: "https://picsum.photos/id/520/200",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  // Function to handle video click
  const handleVideoClick = (videoUrl,videoTitle) => {
    setCurrentVideo(videoUrl);
    setVideoTitle(videoTitle);
    setModalShow(true);
  };

  return (
    <div className="container my-5 EventContainer">
      {/* Heading */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h2>Latest Events</h2>
          <button className="btn btn-primary btn-sm">See All</button>
        </div>
        <hr className="my-2" />
      </div>

      {/* Video Cards */}
      <div className="row" >
        {videos.map((video) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 " key={video.id}>
            <div className="card border-none">
              <img
                src={video.thumbnail}
                className="card-img-top eventHeaderImg"
                alt={video.title}
              />
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <button className="eventButton" aria-label="Play Video" onClick={() => handleVideoClick(video.videoUrl,video.title)}>
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
            </div>
              <div className="card-body text-center">
                <h5 className="card-title m-0">{video.title}</h5>
              </div>
          </div>
        ))}
        
      </div>

      {/* Modal for Playing Video */}
      {modalShow && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{VideoTitle}</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setModalShow(false)}
                ></button>
              </div>
              <div className="modal-body">
                <video
                  controls
                  autoPlay
                  src={currentVideo}
                  className="w-100"
                ></video>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
