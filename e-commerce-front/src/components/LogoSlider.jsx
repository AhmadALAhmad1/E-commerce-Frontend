import "./LogoSlider.scss";
import React, { useEffect } from 'react';
import brand1 from '../assets/brand-1.png'
import brand2 from '../assets/brand-2.png'
import brand3 from '../assets/brand-3.png'
import brand4 from '../assets/brand-4.png'
import brand5 from '../assets/brand-5.png'
import brand6 from '../assets/brand-6.png'
// Rest of your code


function LogoSlider() {
  

    useEffect(() => {
      const root = document.documentElement;
      const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
      const marqueeContent = document.querySelector("ul.marquee-content");
  
      root.style.setProperty("--marquee-elements", marqueeContent.children.length);
  
      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }, []);
  
    return (
      <div className="marquee">
        <ul className="marquee-content">
          <li><i> <img src={brand1} /> </i></li>
          <li><i> <img src={brand2} /> </i></li>
          <li><i> <img src={brand3} /> </i></li>
          <li><i> <img src={brand4} /> </i></li>
          <li><i> <img src={brand5} /> </i></li>
          <li><i> <img src={brand6} /> </i></li>
 
         
        </ul>
      </div>
    );
  }
  

export default LogoSlider;
