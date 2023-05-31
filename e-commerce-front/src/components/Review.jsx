import React, { useRef, useEffect } from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";
import avatar1 from '../assets/avatar-1.jpg'
import avatar2 from '../assets//avatar-2.png'
import avatar3 from '../assets/avatar-3.png'
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
                  I had a fantastic experience with their customer service. . I
                  will definitely be a returning customer.
                </p>
              </div>

              <div className="comment-writer">
                <div className="image-writer">
                  <img src={avatar1} alt="" />
                </div>
                <div className="writer">
                  <h3 className="writer-name">Rana</h3>
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
                <h3>Great Experience</h3>
                <p>
                  I couldn't be happier with the amazing results I've seen after
                  using their top-notch supplements. The quality is unmatched,
                  and I've experienced significant improvements.
                </p>
              </div>
              <div className="comment-writer">
                <div className="image-writer">
                  <img src={avatar2} alt="" />
                </div>
                <div className="writer">
                  <h3 className="writer-name">Bob adham</h3>
                  <p>Developer</p>
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
                <h3>High Quality</h3>
                <p>
                  This store has an incredible variety of products.Whether
                  you're looking to build muscle, lose weight, or improve
                  endurance, they have it all.
                </p>
              </div>
              <div className="comment-writer">
                <div className="image-writer">
                  <img src={avatar3} alt="" />
                </div>
                <div className="writer">
                  <h3 className="writer-name">John kai</h3>
                  <p>Trainer</p>
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
