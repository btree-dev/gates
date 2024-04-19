import React, { useState } from "react";
import Discover from "../src/components/Discover";
import About from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import FunFacts from "../src/components/FunFacts";
import HeroSlider from "../src/components/HeroSlider";
import News from "../src/components/News";
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Hero4Slider } from "../src/sliderProps";

const Index = () => {
  const [showDiscoverModal, setShowDiscoverModal] = useState(false);

  const handleDiscoverClick = () => {
    setShowDiscoverModal(true);
  };

  const handleCloseModal = () => {
    setShowDiscoverModal(false);
  };

  return (
    <Layout pageTitle={"Home"}>
      {/* Home Section */}
      <div className="container"></div>
      <section id="hero4">
        <div className="fn_cs_hero_slider ripple">
          <div className="bg_overlay"></div>
          <div className="slider_part">
            <p
              className="fn__maintitle big"
              data-text="Your GATE to WEB3"
              data-align="center"
            >
              your GATE TO WEB3
            </p>
            <Swiper {...Hero4Slider} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img_holder">
                      <div
                        className="abs_img"
                        data-bg-img="/img/slider/1.png"
                        style={{}}
                      />
                      <img src="/img/1x1.jpg" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img_holder">
                      <div
                        className="abs_img"
                        data-bg-img="/img/slider/2.png"
                        style={{}}
                      />
                      <img
                        src="/img/1x1.jpg"
                        alt=""
                        onClick={handleDiscoverClick}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <center>
                <br></br>
                <h1>Learn how to unlock GATEs.</h1>
                <p>Tap a locked GATE to see the requirements for unlock.</p>
              </center>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Discover Modal */}
      {showDiscoverModal && (
        <div className="modal-wrapper">
          <div className="modal">
            <button className="modal-close" onClick={handleCloseModal}>Close</button>
            <Discover />
          </div>
        </div>
      )}

      {/* !Fun Facts */}
    {/*  <About />*/}
      {/* !About Section */}
      {/* Section Divider */}
      {/*<SectionDivider />*/}
      {/* !Section Divider */}
      {/* Collection Section */}
     {/* <Collection /> */}
      {/* !Collection Section */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section RoadMap */}
      <RoadMapSlider />
      {/* !Section RoadMap */}
      {/* Section Divider */}
      {/* !Section Divider */}
      {/* Section News */}
      {/* !Section News */}
      {/* Section Divider */}
      {/*<SectionDivider />*/}
      {/* !Section Divider */}
      {/* Section */}
   {/*   <Contact /> */}
    </Layout>
  );
};

export default Index;
