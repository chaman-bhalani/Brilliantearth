import React from "react";
import BackgroundImage from "../components/PosterPhoto";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Card from "../components/Cards";
import CollectionCards from "../components/CollectionCards";
import AboutPoster from "../components/AboutPoster";
import Footer from "../components/Footer";
import "../styles/Jewellery.css";
import {
  logoData,
  jlcData,
  pljData,
  dyjData,
  jwlCollectionsData,
  learnMoreData,
  jwlReviewData,
  jwlEdData,
  bgImgGftData,
} from "../assets/data";
import JewelryWithMeaning from "../components/JewelryWithMeaning";
import DesignYourJewelry from "../components/DesignYourJewelry";
import EthicMessage from "../components/EthicsMessage";

const Jewellery = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const filterImageByCategory = (data, category) => {
    if (Array.isArray(data)) {
      return data.filter((item) => item.category === category);
    } else if (data && data.items && Array.isArray(data.items)) {
      return data.items.filter((item) => item.category === category);
    } else {
      console.error("Data is not in the expected format", data);
      return [];
    }
  };

  const set8Images = filterImageByCategory(jlcData, "set8");
  const set9Images = filterImageByCategory(pljData, "set9");
  const set13Images = filterImageByCategory(jwlReviewData, "set13");

  const logoUrl = getUrl(logoData, 0, "logoUrl");
  const bgData = learnMoreData[1];

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[1]
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

      <div className="jewellery-catagory">
        <h1 className="Jewellery-head">Shop Jewellery By Category</h1>
        <div className="jl-category-cards">{renderCards(set8Images)}</div>
      </div>

      <div className="popular-jewellery">
        <h1 className="jewellery-head">Most Popular Jewelry</h1>
        <div className="popular-cards">{renderCards(set9Images)}</div>
      </div>

      <DesignYourJewelry data={dyjData} />

      <JewelryWithMeaning />

      <div>
        <h1>Jewelry Collections</h1>
        <CollectionCards
          data={jwlCollectionsData}
          containerClass="jwl-collections"
          cardClass="jwl-collections-cards"
          imageClass="jwl-collections-img"
          headingTag="h5"
          textClass="jwl-collections-text"
        />
      </div>

      <AboutPoster
        imageSrc={bgData.imgUrl}
        heading={bgData.heading}
        paragraph={bgData.paragraph}
      />

      <div className="reviews">
        <h1 className="jewelry-reviews-head">Jewelry Reviews</h1>
        <div className="jewelry-reviews-cards">{renderCards(set13Images)}</div>
      </div>

      <div className="jleducation">
        <h1 className="jewelry-education-head">Jewelry Education</h1>
        <CollectionCards
          data={jwlEdData}
          containerClass="jwl-education"
          cardClass="jwl-education-cards"
          imageClass="jwl-education-img"
          headingTag="h5"
          textClass="jwl-educatioin-text"
        />
      </div>

      <EthicMessage />

      <Footer />
    </>
  );
};

export default Jewellery;
