import React from "react";
import "../styles/RecycledGold.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import AboutNavbar from "../components/AboutNavbar";
import Collection from "../components/Collection";
import CollectionCards from "../components/CollectionCards";
import Card from "../components/Cards";

import {
  logoData,
  bgImgGftData,
  shopByData,
  ourSpData,
  mteDataAboutPage,
} from "../assets/data";
import Footer from "../components/Footer";

const RecycledGold = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };
  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[10]
    : bgImgGftData;

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
      <div>
        <Logo logoSrc={logoUrl} altText="" />
      </div>
      <Navbar />

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
        customClass="recycled-bg"
      />
      <AboutNavbar />
      <div className="sustain-msg">
        <p className="msg-para">
          We use recycled and sustainable materials, apply energy-efficient
          practices, and minimize our carbon footprint. We've set ambitious
          goals to protect the planet, and we work every day to achieve them.
        </p>
      </div>
      <div className="goals">
        <h1 className="goals-head">OUR GOALS</h1>
        <div className="recycled">
          <div className="metals">
            <h3 className="metal-head">Recycled Metals</h3>
            <p className="metal-para">
              Today, almost all of our gold and silver is recycled. By 2025,
              100% will be recycled or Fairmined.
            </p>
          </div>
          <div className="circularity">
            <h3 className="circularity-head">Circularity</h3>
            <p className="circularity-para">
              Today, almost all of our gold and silver is recycled. By 2025,
              100% will be recycled or Fairmined.
            </p>
          </div>
          <div className="zero-waste">
            <h3 className="zero-waste-head">Zero West</h3>
            <p className="zero-waste-para">
              Today, almost all of our gold and silver is recycled. By 2025,
              100% will be recycled or Fairmined.
            </p>
          </div>
          <div className="emission-reductions">
            <h3 className="emission-reductions-head">Emission Reductions</h3>
            <p className="emission-reductions-para">
              Today, almost all of our gold and silver is recycled. By 2025,
              100% will be recycled or Fairmined.
            </p>
          </div>
        </div>

        <div className="goals-btn-container">
          <button className="goals-btn">Learn More</button>
        </div>
      </div>

      <div className="sustainable-materials">
        <h1 className="sm-head">Our Sustainable Materials</h1>
        <Collection data={shopByData[41]} />
        <Collection data={shopByData[42]} className="sm-reverse" />
        <Collection data={shopByData[43]} />
      </div>

      <div className="our-sustainable-practices"></div>
      <h1 className="osp-head">Our Sustainable Practice</h1>
      <CollectionCards
        data={ourSpData}
        containerClass="osp-container"
        cardClass="osp-cards"
        imageClass="osp-img"
        headingTag="h5"
        textClass="osp-text"
      />
      <div className="ttt">
        <h1 className="ttt-head">Today, Tomorrow & Always</h1>

        <div>
          <div>
            <h3>Lifetime Diamond Upgrades</h3>
            <p>Learn More</p>
          </div>

          <div>
            <h3>Lifetime Warranty</h3>
            <p>Learn More</p>
          </div>

          <div>
            <h3>Recycled Diamonds</h3>
            <p>Learn More</p>
          </div>

          <div>
            <h3>Recycle your Jewelry</h3>
            <p>Learn More</p>
          </div>
        </div>
      </div>

      <div className="more-about-mission">
        <h1 className="mam-head">MORE ABOUT OUR MISSION</h1>
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

export default RecycledGold;
