import React  from "react";
import "./Caro.scss";
import image1 from "../assets/wheyBlack.jpg";
import image2 from "../assets/blueprotein.jpg";
import image3 from "../assets/redprotein.jpg";
import image4 from "../assets/plantprotein.jpg";
import image5 from "../assets/casein.jpg";
import { useEffect } from "react";
// Rest of your code

function Caro() {
  useEffect(() => {
    const root = document.documentElement;
    const marqElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marq-elements-displayed",
    );
    const marqContent = document.querySelector("ul.marq-content");

    root.style.setProperty(
      "--marq-elements",
      marqContent.children.length,
    );

    for (let i = 0; i < marqElementsDisplayed; i++) {
      marqContent.appendChild(marqContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <div className="marq">
        
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
          </div>
      <ul className="marq-content">
        <li>
          <i className="marqoo">
            <img className="img-marq" src={image1} />
          </i>
        
        </li>
   

        <li>
          <i >
            <img className="img-marq" src={image2} />
          </i>
        </li>
        <li>
          <i >
            <img className="img-marq" src={image3} />
          </i>
        </li>
        <li>
          <i >
            <img className="img-marq" src={image4} />
          </i>
        </li>
        <li>
          <i >
            <img className="img-marq" src={image5} />
          </i>
        </li>
      
      </ul>
    </div>
  );
}

export default Caro;
