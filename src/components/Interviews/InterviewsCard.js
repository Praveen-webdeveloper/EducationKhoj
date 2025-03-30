import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const InterviewsCard = () => {
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
    <div className="container">
      {/* Section Header */}
      <div className="row interviewHeading">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h2>Interviews</h2>
          <button className="btn btn-primary btn-sm headingBtn">See All</button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          576: { slidesPerView: 1 }, // Small screens
          768: { slidesPerView: 2 }, // Medium screens
          1200: { slidesPerView: 4 }, // Large screens
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="card text-bg-dark border-none">
              <img src={card.image} class="card-img" alt="..."></img>
              <div class="card-img-overlay h-100 d-flex flex-column justify-content-end"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InterviewsCard;
