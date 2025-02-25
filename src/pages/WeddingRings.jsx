import React from "react";
import "../styles/WeddingRings.css";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import DesignYourJewelry from "../components/DesignYourJewelry";
import CollectionCards from "../components/CollectionCards";
import Footer from "../components/Footer";
import VideoCollection from "../components/VideoCollection";
import Collection from "../components/Collection";
import AboutPoster from "../components/AboutPoster";
import Card from "../components/Cards";

import {
  logoData,
  bgImgGftData,
  weddingringsData,
  shopByStyle,
  shopByData,
  signatureCollectionWedRings,
  learnMoreData,
  weddingringsReviewData,
  weddingRingEducation,
} from "../assets/data";

const WeddingRings = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };
  const logoUrl = getUrl(logoData, 0, "logoUrl");
  const bgData = learnMoreData[3];

  const set28Images = filterImageByCategory(weddingringsReviewData, "set28");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[5]
    : bgImgGftData;

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

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
      />

      <DesignYourJewelry data={weddingringsData} />

      <h1 className="shop-by-style-head">Shop by Style</h1>
      <div className="shop-by-style">
        <CollectionCards
          data={shopByStyle}
          containerClass="sbs-education"
          cardClass="sbs-cards"
          imageClass="sbs-img"
          headingTag="h5"
          textClass="sbs-text"
        />
      </div>
      <VideoCollection data={shopByData[7]} />

      <h1 className="signature-collection-head">
        Explore Our Signature Collections
      </h1>
      <div className="signature-collection">
        <CollectionCards
          data={signatureCollectionWedRings}
          containerClass="sgc-contaier"
          cardClass="sgc-card"
          imageClass="sgc-img"
          headingTag="h5"
          textClass="sgc-text"
        />
      </div>

      <Collection data={shopByData[8]} className="ring-stack-collection"/>

      <AboutPoster
        imageSrc={bgData.imgUrl}
        heading={bgData.heading}
        paragraph={bgData.paragraph}
      />

      <section>
        <h1 className="wedr-review-head">Wedding Ring Reviews</h1>
        <div className="wedr-review-cards">{renderCards(set28Images)}</div>
      </section>

      <div className="Wedding-ring-education">
        <h1 className="Wedding-ring-education-head">Wedding Ring Education</h1>

        <CollectionCards
          data={weddingRingEducation}
          containerClass="wed-education"
          cardClass="wed-education-cards"
          imageClass="wed-education-img"
          headingTag="h5"
          textClass="wed-educatioin-text"
        />
      </div>

      <Footer />
    </>
  );
};
export default WeddingRings;
