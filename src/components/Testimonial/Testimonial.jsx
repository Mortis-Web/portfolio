import React, { useEffect, useRef, useState } from "react";
import "./Testimonial.css";
import ME from "../../assets/download.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Keyboard, Autoplay } from "swiper/modules";

const Testimonial = () => {
  const swiperRef = useRef(null);
  // const [onView, setOnView] = useState(true);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];
  //       if(entry.isIntersecting){

  //         setOnView(true);
  //       }
  //     },
  //     {
  //       threshold: 0.5,
  //     }
  //   );
  //   if (swiperRef.current) {
  //     observer.observe(swiperRef.current);
  //   }
  //   return () => {
  //     if (swiperRef.current) {
  //       observer.unobserve(swiperRef.current);
  //     }
  //   };
  // }, []);
  return (
    <section id="testimonial" ref={swiperRef}>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          // enabled:onView,
          disableOnInteraction: true,
        }}
        loop={true}
        spaceBetween={40}
        modules={[Pagination, Keyboard, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container"
      >
        <SwiperSlide className="testimonial">
          <div className="clientImg">
            <img src={ME} />
          </div>
          <h5>Lorem, ipsum dolor.</h5>
          <div className="clientReview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            doloribus architecto et voluptates quod nobis alias ipsum nihil
            earum odio. Veniam eligendi ex amet expedita recusandae debitis,
            odio ullam enim.
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clientImg">
            <img src={ME} />
          </div>
          <h5>Lorem, ipsum dolor.</h5>
          <div className="clientReview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            doloribus architecto et voluptates quod nobis alias ipsum nihil
            earum odio. Veniam eligendi ex amet expedita recusandae debitis,
            odio ullam enim.
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="testimonial">
          <div className="clientImg">
            <img src={ME} />
          </div>
          <h5>Lorem, ipsum dolor.</h5>
          <div className="clientReview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            doloribus architecto et voluptates quod nobis alias ipsum nihil
            earum odio. Veniam eligendi ex amet expedita recusandae debitis,
            odio ullam enim.
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
