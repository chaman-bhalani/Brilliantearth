import React from "react";
import "../styles/Gift.css";
import {
  logoData,
  bgImgGftData,
  topJwlGiftData,
  jwlGiftListData,
  mwsData,
  learnMoreData,
  designJwlGiftData,
  shopByData,
} from "../assets/data";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundImage from "../components/PosterPhoto";
import Card from "../components/Cards";
import JewelryWithMeaning from "../components/JewelryWithMeaning";
import AboutPoster from "../components/AboutPoster";
import DesignYourJewelry from "../components/DesignYourJewelry";
import Collection from "../components/Collection";
import EthicMessageGifts from "../components/EthicsMessageGifts";

const Gift = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");
  const bgData = learnMoreData[1];

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[0]
    : bgImgGftData;

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const set15Images = filterImageByCategory(topJwlGiftData, "set15");
  const set16Images = filterImageByCategory(jwlGiftListData, "set16");
  const set17Images = filterImageByCategory(mwsData, "set17");

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

      <div className="top-jewelry-gifts">
        <h1 className="top-jwl-head">Top Jewelry Gifts</h1>
        <div className="top-jwl-gift-card">{renderCards(set15Images)}</div>
      </div>

      <Collection data={shopByData[0]} />

      <div className="jwl-gift-list">
        <h1 className="jwl-list-head">Jewelry Gifts on Everyone's List</h1>
        <div className="jwl-list-card">{renderCards(set16Images)}</div>
      </div>

      <DesignYourJewelry data={designJwlGiftData} />

      <JewelryWithMeaning />

      <Collection data={shopByData[1]} />

      <div className="mws-container">
        <h1 className="mws-head">More Ways to Shop</h1>
        <div className="mws-cards">{renderCards(set17Images)}</div>
      </div>

      <AboutPoster
        imageSrc={bgData.imgUrl}
        heading={bgData.heading}
        paragraph={bgData.paragraph}
      />
      
      <EthicMessageGifts />

      <Footer />
    </>
  );
};
export default Gift;
