import React from "react";
import "../styles/DiamondColorGuide.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import DiamondCutCollection from "../components/DiamondCutCollection";
import BackgroundImage from "../components/PosterPhoto";
import VideoCard from "../components/VideoCard";

import { logoData, diamondColorData, bgImgGftData } from "../assets/data";
import CollectionWithLinks from "../components/CollectionWithLinks";
import Collection from "../components/Collection";
const DiamondColorGuide = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };
  const logoUrl = getUrl(logoData, 0, "logoUrl");
  const colorChartImg = getUrl(diamondColorData, 5, "imgUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[24]
    : bgImgGftData;

  const renderCards = (imageArray) => {
    return imageArray.map((item) => (
      <VideoCard
        key={item.id}
        url={item.videoUrl}
        alt={item.alt}
        footer={item.footer}
      />
    ));
  };

  return (
    <>
      <div>
        <Logo logoSrc={logoUrl} altText="Logo" />
      </div>
      <Navbar />

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
        customClass="dmd-cut-guide-bg"
      />

      <DiamondCutCollection
        data={diamondColorData[0]}
        className="color-guide-cl"
      />

      <div className="color-scale">
        <h1>Diamond Color Scale</h1>
        <p>
          The Gemological Institute of America (GIA) developed the diamond color
          scale in the 1940s to standardize diamond color grading
          internationally. The scale begins with the letter D, which represents
          colorless, and increases in color presence to the letter Z, which
          represents as light yellow, grey, pink, or brown.
        </p>
      </div>

      <CollectionWithLinks
        data={diamondColorData[1]}
        className="color-guide-cl-reverse"
      />
      <CollectionWithLinks
        data={diamondColorData[2]}
        className="color-guide-cl"
      />
      <CollectionWithLinks
        data={diamondColorData[3]}
        className="color-guide-cl-reverse"
      />

      <Collection data={diamondColorData[4]} className="color-guide-cl" />

      <div className="color-chart-img">
        <h1 className="cci-head">Diamond Color Chart</h1>
        <img src={colorChartImg} alt="Diamond Color Chart Image" />
      </div>

      <Collection
        data={diamondColorData[6]}
        className="color-guide-cl-reverse"
      />
    </>
  );
};
export default DiamondColorGuide;
