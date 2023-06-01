import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "./Home.scss";
// import image from "../assets/image-protein.png";
import image1 from "../assets/bag2.png";
import image2 from "../assets/gym-fitness-water-bottle-6762933-5559739.png";
import image3 from "../assets/kettlebell-7460628-6137272.png";
import image4 from "../assets/protein.png";
import image5 from "../assets/proteingold.png";
import { BiSearch } from "react-icons/bi";
import LogoSlider from "../components/LogoSlider";
import { FcApproval } from "react-icons/fc";
import Slider from "../components/Carousel";
import Carousel from "../components/Carousel";
import Review from "../components/Review";
import Caro from "../components/Caro";
import { Link } from "react-router-dom";


import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";

const Home = () => {

const [loading,setLoading]=useState(true)

  function scrollToSection() {
    const section = document.getElementById("section2");
    section.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },3000)
  },[])

  if(loading){
    return <Loader/>
  }

  return (
    <>
      <div className="container-hero">
        <div className="hero-sec1">
          <p className="hero-p">Power-Performance-Results</p>

          <h1 className="hero-h1">
            Unleash Your
            <br />
            Fitness <span className="potential">Potential</span>,
            <br />
            Elevate Your <span className="performance">Performance</span>.
          </h1>
          <p className="hero-p hero-p1">
            Fuel Your Fitness Journey with Premium Quality Supplements Tailored
            for Optimal Results.
          </p>
          <div className="hero-btn">
            <button onClick={scrollToSection}>START</button>
          </div>
        </div>

        <div className="hero-sec2">
          <div className="img-1">
            <img className="img-protein1" src={image1} alt="" />
          </div>

          <div className="img-2">
            <img className="img-protein2" src={image2} alt="" />
          </div>

          <div className="img-3">
            <img className="img-protein3" src={image3} alt="" />
          </div>

          <div className="img-4">
            <img className="img-protein4" src={image4} alt="" />
          </div>
        </div>
      </div>

      <div className="container-content-caro" id="section2">
        <Caro />
      </div>

      <div className="home-about">
        <div className="about-sec1">
          <h1 className="about-h1">Feel Healthier and Strong Today</h1>
          <p>
            Fuel your fitness journey with our curated range of high-quality
            supplements. Unlock your true potential and embrace a stronger,
            healthier you. Join us as we partner in achieving greatness
            together.
          </p>
          <ul className="ul-about">
            <li>
              <FcApproval /> High Quality Supplements
            </li>
            <li>
              <FcApproval /> Fast and convenient delivery{" "}
            </li>
            <li>
              <FcApproval /> Variety in Products
            </li>
          </ul>

          <div className="home-about-btn">
            <Link to="/about">
              <button>Know More</button>
            </Link>
          </div>
        </div>

        <div className="box1"></div>

        <div className="about-sec2">
          <img src={image5} alt="" />
          <div className="box2"></div>
        </div>
      </div>

      <div className="Review-Home">
        <h1 className="review-title">
          What the <br /> World is saying
        </h1>
        <Review />
      </div>

      <div className="logo">
        <LogoSlider />
      </div>


    </>
  );
};

export default Home;
