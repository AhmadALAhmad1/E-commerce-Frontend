import React from "react";
import './About.scss'
const About = () => {
  return (
    <>
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About Us</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>May 2023</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
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
