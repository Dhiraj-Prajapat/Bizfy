import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonial.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We are delighted with our AI development subscription from Nebula.",
      para: "Cannot recommend Nebula enough, they absolutely transformed us into a productive machine!",
      name: "Peter Davis",
      title: "CTO - Atomic",
      avatar: "https://via.placeholder.com/50",
    },
    {
      quote: "Their AI-development consulting report was absolutely eye-opening.",
      para: "Their flexible subscription-based model is so innovative that we can just pause it whenever we want!",
      name: "Sofie Bezos",
      title: "CEO - Tobri",
      avatar: "https://via.placeholder.com/50",
    },
    {
      quote: "Nebula's development has increased our productivity by 54%.",
      para: "Nebula's chatbot is an absolute game-changer for our customer service!",
      name: "John Fisher",
      title: "CEO - TBB Real Estate",
      avatar: "https://via.placeholder.com/50",
    },
    {
      quote: "Nebula's development has increased our productivity by 54%.",
      para: "Nebula's chatbot is an absolute game-changer for our customer service!",
      name: "John Fisher",
      title: "CEO - TBB Real Estate",
      avatar: "https://via.placeholder.com/50",
    },
    {
      quote: "Nebula's development has increased our productivity by 54%.",
      para: "Nebula's chatbot is an absolute game-changer for our customer service!",
      name: "John Fisher",
      title: "CEO - TBB Real Estate",
      avatar: "https://via.placeholder.com/50",
    },

  ];

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title"  data-aos="fade-right">
        What our <span className="highlight">clients</span> say
      </h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1} // Adjust for smaller screens
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-para">{testimonial.para}</p>
              <div className="testimonial-details">
                <img
                  className="testimonial-avatar"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div className="testimonial-name">
                  <span>{testimonial.name}</span>
                  <br />
                  <small>{testimonial.title}</small>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
