import React, { useRef, useEffect } from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";
import photo from'../assets/profile-pic.jpg'

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// Import your custom CSS styles
import "./Review.css";

// Install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const Review = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const slideCount = swiper.slides.length;

      if (slideCount % 2 === 0) {
        const middleIndex = slideCount / 2 - 1;
        swiper.slideTo(middleIndex, 0);
      } else {
        const middleIndex = Math.floor(slideCount / 2);
        swiper.slideTo(middleIndex, 0);
      }
    }
  }, []);

  return (
    <div className="mama">
      <section className="swiper mySwiper">
        <Swiper
          ref={swiperRef}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true, // Make pagination dots clickable
          }}
        >
     
          <SwiperSlide className="card">
           
            <div className="card-content">
              <div className="icon-rev">
                <FaQuoteRight />
              </div>

              <div className="comment">
                <h3>Highly Recomnded</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                  provident dolorem reiciendis ipsum esse saepe, alias enim
                 
                </p>
              </div>

              <div className="comment-writer">
                <div className="image-writer">
                  <img src={photo} alt="" />
                </div>
                <div className="writer">
                  <h3 className="writer-name">Ahmad Al Ahmad</h3>
                  <p>Fitness Trainer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="card">
            <div className="card-content">
              <div className="icon-rev">
                <FaQuoteRight />
              </div>

              <div className="comment">
                <h3>Highly Recomnded</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                  provident dolorem reiciendis ipsum esse saepe, alias enim
                  
                </p>
              </div>
              <div className="comment-writer">
                <div className="image-writer">
                <img src={photo} alt="" />

                </div>
                <div className="writer">
                  <h3 className="writer-name">Ahmad Al Ahmad</h3>
                  <p>Fitness Trainer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="card">
            <div className="card-content">
              <div className="icon-rev">
                <FaQuoteRight />
              </div>

              <div className="comment">
                <h3>Highly Recomnded</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                  provident dolorem reiciendis ipsum esse saepe, alias enim
                  
                </p>
              </div>
              <div className="comment-writer">
                <div className="image-writer">
                <img src={photo} alt="" />

                </div>
                <div className="writer">
                  <h3 className="writer-name">Ahmad Al Ahmad</h3>
                  <p>Fitness Trainer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>{" "}
        {/* Add the pagination dots container */}
      </section>
    </div>
  );
};

export default Review;
