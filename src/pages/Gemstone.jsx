import React from "react";
import "../styles/Gemstone.css";

import {
  logoData,
  bgImgGftData,
  shopByGemstonedata,
  shopGemstoneByColor,
  gemstoneEngRingsData,
  shopByData,
  shopGemstoneJewelry,
  gemstoneReviewData,
  gemstoneEducationData,
} from "../assets/data";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Card from "../components/Cards";
import CollectionCards from "../components/CollectionCards";
import Collection from "../components/Collection";
import DesignYourJewelry from "../components/DesignYourJewelry";
import EthicMessageGemstone from "../components/EthicsMessageGemstone";
import Footer from "../components/Footer";

const Gemstone = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[3]
    : bgImgGftData;

  const set20Images = filterImageByCategory(shopByGemstonedata, "set20");
  const set22Images = filterImageByCategory(gemstoneReviewData, "set22");

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

      <section className="shop-by-gemstone">
        <h1 className="sbg-heading">Shop Diamonds by Shape</h1>
        <div className="sbg-cards">{renderCards(set20Images)}</div>
      </section>

      <section>
        <h1 className="shop-gemstone-by-color-head">Shop by Color</h1>
        <CollectionCards
          data={shopGemstoneByColor}
          containerClass="shop-by-color-container"
          cardClass="sbc-cards"
          imageClass="sbc-card-img"
          headingTag="h5"
          textClass="sbc-text"
        />
      </section>

      <section>
        <h1 className="ger-head">Gemstone Engagement Rings</h1>
        <CollectionCards
          data={gemstoneEngRingsData}
          containerClass="ger-container"
          cardClass="ger-cards"
          imageClass="ger-card-img"
          headingTag="h5"
          textClass="ger-text"
        />
      </section>

      <Collection data={shopByData[6]} className="rare-gemstone" />

      <DesignYourJewelry data={shopGemstoneJewelry} />

      <section className="gemstone-review">
        <h1 className="gemstone-review-heading">Gemstone Reviews</h1>
        <div className="gemstone-review-cards">{renderCards(set22Images)}</div>
      </section>

      <section>
        <h1 className="gemstone-education-head">Gemstone Education</h1>
        <CollectionCards
          data={gemstoneEducationData}
          containerClass="gemstone-education-container"
          cardClass="gemstone-education-cards"
          imageClass="gemstone-education-card-img"
          headingTag="h5"
          textClass="gemstone-education-text"
        />
      </section>

      <EthicMessageGemstone />

      <Footer />
    </>
  );
};
export default Gemstone;
