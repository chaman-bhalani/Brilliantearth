import React from "react";
import "../styles/AboutPage.css";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundVideoWithLogo from "../components/BackroundVideoWithLogo";
import AboutNavbar from "../components/AboutNavbar";
import CollectionWithFooter from "../components/CollectionWithFooter";
import CollectionCards from "../components/CollectionCards";
import Footer from "../components/Footer";
import Card from "../components/Cards";
import ToggleCard from "../components/ToggleCard";

import {
  logoData,
  AboutBgVideoData,
  ourBeginningData,
  missionPillarsData,
  shopByData,
  mteDataAboutPage,
} from "../assets/data";
import Collection from "../components/Collection";

const About = () => {
  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");
  const videoUrl = getUrl(AboutBgVideoData, 0, "videoSrc");
  const imgUrl = getUrl(AboutBgVideoData, 0, "imgSrc");
  const set30Images = filterImageByCategory(mteDataAboutPage, "set30");

  const renderCards = (imageArray) => {
    return imageArray.map((item) => (
      <Card
        key={item.id}
        url={item.imgUrl}
        alt={item.alt}
        footer={item.footer}
        hoverUrl={item.hoverUrl}
      />
    ));
  };
  return (
    <>
      <Logo logoSrc={logoUrl} altText="Company Logo" />

      <Navbar />

      <div>
        <BackgroundVideoWithLogo
          videoSrc={videoUrl}
          logoSrc={imgUrl}
          className="aboutpage-poster"
        />
      </div>

      <AboutNavbar />

      <CollectionWithFooter
        data={ourBeginningData[0]}
        className="our-beginning"
      />

      <div className="mission-pillars">
        <h1 className="mission-pillard-message">
          Our Mission to cultivate a more transparent, sustainable,
          compassionate, and inclusive jewelry industry has been at the core of
          everything we do from day one. It's in our DNA.
        </h1>
        <h1 className="mission-pillar-head">Our Mission Pillars</h1>

        <div className="mission-pillars-cards">
          <CollectionCards
            data={missionPillarsData}
            containerClass="mission-pillars-contaier"
            cardClass="mission-pillars-card"
            imageClass="mission-pillars-img"
            headingTag="h5"
            textClass="mission-pillars-text"
          />
        </div>
      </div>

      <div className="forever-forward">
        <h1 className="forevre-forward-head">Forever Forward</h1>
        <h2 className="ff-head2">
          We take pride in our successes and focus on the future. We constantly
          look for new ways to push our Mission forward, leading the industry to
          greater heights by setting ambitious goals — and achieving them.
        </h2>
        <div>
          <div>
            <h2>RECYCLED METALS</h2>
            <p>
              Today, 96% of our gold and 97% of our silver is recycled. By 2025,
              100% will be recycled or Fairmined.
            </p>
          </div>

          <div>
            <h2>CIRCULARITY</h2>
            <p>
              Recycled materials. Timeless designs. Lifetime warranties. And
              trade-in programs that give your jewelry new life.
            </p>
          </div>

          <div>
            <h2>ZERO WASTE</h2>
            <p>
              No single-use plastics by 2025. Zero waste in showrooms and
              offices by 2030.
            </p>
          </div>

          <div>
            <h2>EMISSION REDUCTION</h2>
            <p>
              We have committed to setting near-term company-wide emission
              reductions.
            </p>
          </div>
        </div>
      </div>

      <div className="the-difference">
        <h1 className="the-difference-head">The Brilliant Earth Difference</h1>
        <Collection data={shopByData[9]} className="first-cl" />
        <Collection data={shopByData[10]} className="reverse-cl" />
        <Collection data={shopByData[11]} className="second-cl" />
      </div>

      <div className="the-experience">
        <h1 className="the-experience-head">The Brilliant Earth Experience</h1>
        <Collection data={shopByData[12]} className="experience-cl" />
      </div>

      <div className="spprt">
        <div>
          <h4>Free Shipping Both Ways</h4>
          <a href="">Learn More</a>
        </div>

        <div>
          <h4>Free 30-Day Returns & Exchanges</h4>
          <a href="">Learn More</a>
        </div>

        <div>
          <h4>24/7 Customer Support</h4>
          <a href="">Learn More</a>
        </div>

        <div>
          <h4>Free 60-Day Resizes</h4>
          <a href="">Learn More</a>
        </div>

        <div>
          <h4>Free Diamond Upgrades</h4>
          <a href="">Learn More</a>
        </div>
      </div>

      <div className="more-about-mission">
        <h1 className="more-about-mission-head">MORE ABOUT OUR MISSION</h1>
        <AboutNavbar />
      </div>

      <section className="mte">
        <h1 className="mte-heading">More to Explore</h1>
        <div className="mh-cards">{renderCards(set30Images)}</div>
      </section>

      <Footer />
    </>
  );
};
export default About;
