import React from "react";
import "../styles/WeddingRingTrends.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Collection from "../components/Collection";
import Card from "../components/Cards";

import { logoData, bgImgGftData, WeddingRingTrendsData } from "../assets/data";
import CollectionWithTopPara from "../components/CollectionWithTopPara";
import Footer from "../components/Footer";

const WeddingRingTrends = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[13]
    : bgImgGftData;

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const categories = [
    {
      data: WeddingRingTrendsData[1],
      images: filterImageByCategory(WeddingRingTrendsData, "first-cl"),
      reverseClass: true,
    },
    {
      data: WeddingRingTrendsData[2],
      images: filterImageByCategory(WeddingRingTrendsData, "second-cl"),
      reverseClass: false,
    },
    {
      data: WeddingRingTrendsData[3],
      images: filterImageByCategory(WeddingRingTrendsData, "third-cl"),
      reverseClass: true,
    },
    {
      data: WeddingRingTrendsData[4],
      images: filterImageByCategory(WeddingRingTrendsData, "fourth-cl"),
      reverseClass: false,
    },
    {
      data: WeddingRingTrendsData[5],
      images: filterImageByCategory(WeddingRingTrendsData, "fifth-cl"),
      reverseClass: true,
    },
    {
      data: WeddingRingTrendsData[6],
      images: filterImageByCategory(WeddingRingTrendsData, "sixth-cl"),
      reverseClass: false,
    },
    {
      data: WeddingRingTrendsData[7],
      images: filterImageByCategory(WeddingRingTrendsData, "seventh-cl"),
      reverseClass: true,
    },
    {
      data: WeddingRingTrendsData[8],
      images: filterImageByCategory(WeddingRingTrendsData, "eighth-cl"),
      reverseClass: false,
    },
  ];

  const mteWrtImages = filterImageByCategory(WeddingRingTrendsData, "mte-wrt");

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
      />

      <Collection data={WeddingRingTrendsData[0]} />

      <div className="top-wedding-ring-trends">
        <h1 className="twrt-head">Top 8 Wedding Ring Trends of 2025</h1>
        <p className="twrt-para">
          Wedding ring trends are continuously evolving, with 2025 bringing a
          fresh wave of unique styles. This guide explores the latest wedding
          band trends, highlighting options that allow each individual to find
          something that fits their personal style while symbolizing their
          commitment. Whether you’re drawn to alternative metals or textured
          styles, 2025’s wedding rings embody innovation and individuality.
        </p>
      </div>

      <div className="twrt-collection">
        {categories.map((item, index) => (
          <React.Fragment key={index}>
            <CollectionWithTopPara
              data={item.data}
              className={item.reverseClass ? "reverse-twrt-cl" : ""}
            />
            <div className="first-cl-cards">{renderCards(item.images)}</div>
          </React.Fragment>
        ))}
      </div>

      <div className="mte-wedding-ring-trends">
        <h1 className="mte-wrt-head">More To Explore</h1>
        <div className="jewelry-reviews-cards">{renderCards(mteWrtImages)}</div>
      </div>

      <Footer />
    </>
  );
};

export default WeddingRingTrends;
