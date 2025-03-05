import React from "react";
import "../styles/EngagementRingTrends.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Collection from "../components/Collection";
import CollectionWithTopPara from "../components/CollectionWithTopPara";
import Card from "../components/Cards";
import Footer from "../components/Footer";

import {
  logoData,
  bgImgGftData,
  WeddingRingTrendsData,
  topEightRingsData,
  topEngRingsCardData,
} from "../assets/data";

const EngagementRingTrends = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[18]
    : bgImgGftData;

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const clOneImages = filterImageByCategory(topEngRingsCardData, "cl-one");
  const clTwoImages = filterImageByCategory(topEngRingsCardData, "cl-two");
  const clThreeImages = filterImageByCategory(topEngRingsCardData, "cl-three");
  const clFourImages = filterImageByCategory(topEngRingsCardData, "cl-four");
  const clFiveImages = filterImageByCategory(topEngRingsCardData, "cl-five");
  const clSixImages = filterImageByCategory(topEngRingsCardData, "cl-six");
  const clSevenImages = filterImageByCategory(topEngRingsCardData, "cl-seven");
  const clEightImages = filterImageByCategory(topEngRingsCardData, "cl-eight");

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

  const cardSets = [
    clOneImages,
    clTwoImages,
    clThreeImages,
    clFourImages,
    clFiveImages,
    clSixImages,
    clSevenImages,
    clEightImages,
  ];
  return (
    <>
      <Logo logoSrc={logoUrl} altText="Logo" />
      <Navbar />

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
        customClass="enr-buying-guide-bg"
      />

      <Collection data={WeddingRingTrendsData[0]} className="enr-cl-reverse" />

      <div className="top-eight-en-rings">
        <div className="top-eight-en-rings-text">
          <h1 className="top-eight-en-rings-head">
            Top 8 Engagement Ring Trends of 2025
          </h1>
          <p className="top-eight-en-rings-para">
            In 2025, trends will continue to embrace bold expressions of
            individuality, perfectly mirroring the distinctive engagement ring
            styles that are gaining in popularity. From the resurgence of
            vintage-inspired halo settings that add a touch of romance to sleek
            and contemporary solitaire rings that speak to modern
            sophistication, there's a trend to match every aesthetic.
          </p>
        </div>

        {topEightRingsData.map((data, index) => (
          <React.Fragment key={index}>
            <CollectionWithTopPara
              data={data}
              className={
                index % 2 === 1 ? "reverse-eng-rings-cl" : "eng-rings-cl"
              }
            />
            <div className="top-eight-enr-cards">
              {renderCards(cardSets[index])}
            </div>
          </React.Fragment>
        ))}
      </div>

      <Footer />
    </>
  );
};
export default EngagementRingTrends;
