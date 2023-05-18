import React from "react";
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
import {FcApproval} from 'react-icons/fc'
import Slider from "../components/Carousel";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <>
      <div className="container-hero">
        <div className="hero-sec1">
          <p className="hero-p">Train-smarter Get-stronger</p>

          <h1 className="hero-h1">
            Simple fitness
            <br />
            experince for
            <br />
            everyone.
          </h1>
          <p className="hero-p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in
            iure, repellendus.
          </p>
          <div className="hero-btn">
            <button>START </button>
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

      <div className="container-content">
        <div className="carousel">
          <div className="carousel-h1">
            <h1>OUR LATEST PRODUCTS</h1>
            <p className="carousel-p">
              Lorem ipsum amet consectetur adipisicing elit.
              <br />
              Voluptates et, praesentium vi , sit amet c
              <br />
              Lorem ipsum dolor
            </p>
          </div>
          <Carousel />
        </div>
      </div>
      <div className="home-about">
        <div className="about-sec1">
          <h1>
            Feel Healthier and Strong <br />
            Today
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            architecto consequuntur eveniet ulla Lorem ipsum, dolor sit amet
            corem.s corem.s corem.s
          </p>
          <ul className="ul-about">
            <li><FcApproval /> High Quality</li>
            <li><FcApproval /> Fast Delivery </li>
            <li><FcApproval /> Variety in Products</li>
            
          </ul>

          <div className="home-about-btn">
            <button>Know More</button>
          </div>
        </div>
          <div className="box1"></div>

        <div className="about-sec2">
          <img src={image5} alt="" />
          <div className="box2"></div>

        </div>
      </div>
    </>
  );
};

export default Home;
