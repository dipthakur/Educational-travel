import React from "react";
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      {/* About Us Section */}
      <section className="aboutus-header-section light-theme">
        <div className="aboutus-header-wrapper">
          <div className="aboutus-header-content">
            <h1 className="aboutus-header-heading">About Us</h1>
            <p className="aboutus-header-description">
            We specialize in organizing educational tours that combine learning with adventure. Our carefully designed trips offer students and travelers the opportunity to explore new destinations, engage with diverse cultures, and gain hands-on experience beyond the classroom. We believe that travel is one of the best ways to enhance education and inspire lifelong learning.            </p>
          </div>
          <div className="aboutus-header-image">
            <div className="aboutus-header-image-wrapper">
              <img 
                src="../src/assets/card-img/about-us-img-page.avif" alt="img"
                className="aboutus-header-image-img"
                width="701"
                height="468"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="aboutus-header-section light-theme">
        <div className="aboutus-header-wrapper">
          <div className="aboutus-header-image d-none d-md-block">
            <div className="aboutus-header-image-wrapper">
              <img 
                src="../src/assets/card-img/mission.avif" alt="img"
                className="aboutus-header-image-img"
                width="701"
                height="468"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>
          <div className="aboutus-header-content">
            <h2 className="aboutus-header-heading">Our Mission</h2>
            <p className="aboutus-header-description">
            Our mission is to provide immersive and enriching educational travel experiences that foster knowledge, cultural appreciation, and personal growth. We aim to create meaningful journeys that encourage curiosity, broaden perspectives, and make learning exciting and memorable.            </p>
          </div>
          
        </div>
      </section>

      {/* Our Story Section */}
      <section className="aboutus-header-section light-theme">
        <div className="aboutus-header-wrapper">
          <div className="aboutus-header-content">
            <h2 className="aboutus-header-heading">Our Story</h2>
            <p className="aboutus-header-description">
            Founded by a team of passionate educators and travel enthusiasts, we started with a vision to make learning more interactive and engaging through travel. Over the years, we have successfully guided students, teachers, and explorers on impactful educational journeys that open minds and create unforgettable experiences.            </p>
          </div>
          <div className="aboutus-header-image">
            <div className="aboutus-header-image-wrapper">
              <img 
                src="../src/assets/card-img/our-story-img.avif" alt="img"
                className="aboutus-header-image-img"
                width="701"
                height="468"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
