import React from "react";
import "./About.scss";

const About = () => {
  return (
    <>
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About Us</h2>
            <h3 className="section-subheading text-muted">
              Enriching Your Fitness Lifestyle
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2018-2019</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    We are an online supplement store with a focus on providing
                    high-quality products and a wide variety of options. Our
                    journey started in 2018 with the aim to offer fitness
                    enthusiasts access to premium supplements that support their
                    goals and overall health.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2020</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    As our customer base grew, we expanded our operations and
                    evolved into a comprehensive supplement agency. We strive to
                    provide exceptional service, expert advice, and an extensive
                    range of products to cater to the diverse needs of our
                    customers.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2022</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    In December 2022, we made a significant transition and
                    expanded our services to become a full-service supplement
                    store. This allowed us to offer a comprehensive range of
                    products, including protein powders, creatine, pre-workouts,
                    fat burners, vitamins, and more, all under one roof.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>May 2023</h4>
                  <h4 className="subheading">Continued Growth and Success</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    We are committed to our customers' satisfaction and
                    continuously strive to enhance their shopping experience.
                    Our dedication to quality, customer service, and a diverse
                    product selection has helped us grow and become a trusted
                    destination for fitness enthusiasts seeking top-notch
                    supplements.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
