import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


function Interviews() {
  const cards = [
    {
      title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
      category: "Politics",
      image:
        "https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=",
      discription: "this is text",
    },
    {
      title: "Dr. Abdullah's Presidential Campaign Speech",
      category: "Politics",
      image:
        "https://media.gettyimages.com/photos/during-his-presidential-campaign-dr-abdullah-talks-to-thousands-of-picture-id1179613429?k=6&m=1179613429&s=612x612&w=0&h=un38o3CsqcAD4kUIjsd49UdTyJcfn2l_mndjnmD9qMQ=",
    },
    {
      title: "Campaign Rally with Thousands of Supporters",
      category: "Politics",
      image:
        "https://media.gettyimages.com/photos/during-his-presidential-campaign-dr-abdullah-talks-to-thousands-of-picture-id1179613401?k=6&m=1179613401&s=612x612&w=0&h=HFj4Uzls-FEDs1AkxspY2nmhKrZ3ITIjuew7YOHN6eI=",
    },
    {
      title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
      category: "Politics",
      image:
        "https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=",
    },
    {
      title: "Dr. Abdullah's Presidential Campaign Speech",
      category: "Politics",
      image:
        "https://media.gettyimages.com/photos/during-his-presidential-campaign-dr-abdullah-talks-to-thousands-of-picture-id1179613429?k=6&m=1179613429&s=612x612&w=0&h=un38o3CsqcAD4kUIjsd49UdTyJcfn2l_mndjnmD9qMQ=",
    },
    {
      title: "Campaign Rally with Thousands of Supporters",
      category: "Politics",
      image:
        "https://media.gettyimages.com/photos/during-his-presidential-campaign-dr-abdullah-talks-to-thousands-of-picture-id1179613401?k=6&m=1179613401&s=612x612&w=0&h=HFj4Uzls-FEDs1AkxspY2nmhKrZ3ITIjuew7YOHN6eI=",
    },
  ];

  return (
    <div className="container py-5">
      {/* Section Header */}
      <div className="row interviewHeading my-5">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <h2>Views / Reviews / Interviews</h2>
        </div>
      </div>
        <div className="interviewContainer">
      <div className="row g-0 justify-content-center">
        {cards.map((card, index) => (
          <div className="col-lg-3 col-md-6 m-5" key={index}>
            <div className="card text-bg-dark border-none">
              <img src={card.image} className="card-img" alt="..."></img>
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end"
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
                    {card.title}
                  </a>
                </h4>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    </div>
  )
}

export default Interviews;
