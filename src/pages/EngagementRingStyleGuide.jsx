import React from "react";
import "../styles/EngagementRingStyleGuide.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Collection from "../components/Collection";
import Card from "../components/Cards";

import {
  logoData,
  bgImgGftData,
  EngRingStyleGuideData,
  popularEnRings,
} from "../assets/data";

const EngagementRingStyleGuide = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[15]
    : bgImgGftData;

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const popularEnRingImages = filterImageByCategory(
    popularEnRings,
    "plr-en-rings"
  );

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
      <Logo logoSrc={logoUrl} altText="" />
      <Navbar />

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
      />

      <div className="enr-style-vs-settings">
        <h1 className="enr-st-vs-se-head">
          Engagement Ring Styles vs. Settings
        </h1>
        <p className="enr-st-vs-se-para">
          When picking the perfect engagement ring, it's essential to understand
          the terminology of and difference between style and setting. Though it
          can be difficult to distinguish between the two, style refers to the
          general look or feeling a ring evokes — be it vintage or
          nature-inspired, for example. The setting of a ring is more technical,
          referring to the actual manner in which a center stone is set (bezel
          or prong-set) and what kind of accents it features — or lack thereof
          (solitaires). To dive into the distinctive details between style vs.
          setting, read on.
        </p>
      </div>

      <div className="en-ri-styles">
        <h1 className="en-ri-styles-head">Engagement Ring Styles</h1>
        {EngRingStyleGuideData.map((data, index) => (
          <Collection
            key={index}
            data={data}
            className={index % 2 === 1 ? "en-ri-sty-reverse" : "en-ri-sty-cl"}
          />
        ))}
      </div>

      <div className="popular-eng-rings">
        <div className="per-text">
          <h2 className="per-head">Popular Engagement Rings</h2>
          <p className="per-para">
            Discover our most popular engagement ring settings.
          </p>
          <button className="per-btn">Top 20 Engagement Rings</button>
        </div>

        <div className="per-collection-cards">
          {renderCards(popularEnRingImages)}
        </div>
      </div>

      <div className="en-ri-settings">
        <h1 className="en-ri-settings-head">
          Types of Engagement Ring Setting
        </h1>
      </div>
    </>
  );
};
export default EngagementRingStyleGuide;
