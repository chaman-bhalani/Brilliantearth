import React from "react";
import "../styles/TopTwentyEngagementRings.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Collection from "../components/Collection";
import Card from "../components/Cards";
import Footer from "../components/Footer";

import {
  logoData,
  bgImgGftData,
  shopByData,
  mteTopRingsData,
} from "../assets/data";

const TopTwentyEngagementRings = () => {

  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };
  
  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[6]
    : bgImgGftData;

  const renderCards = (imageArray) => {
    return imageArray.map((item) => (
      <Card
        key={item.id}
        url={item.imgUrl}
        alt={item.alt}
        footer={item.footer}
      />
    ));
  };

  return (
    <>
      <Logo logoSrc={logoUrl} altText="Company Logo" />
      <Navbar />

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
        customClass="top-twenty-bg"
      />

      {shopByData.slice(16, 36).map((data, index) => (
        <Collection
          key={index}
          data={data}
          className={index % 2 === 0 ? "top-twenty-rings" : "reverse-top-rings"}
        />
      ))}

      <div className="mte-top-rings">
        <h2 className="mte-top-rings-head">More to Explore</h2>
        <div className="mte-top-rings-card">{renderCards(mteTopRingsData)}</div>
      </div>

      <Footer />
    </>
  );
};
export default TopTwentyEngagementRings;
