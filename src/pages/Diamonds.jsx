import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundImage from "../components/PosterPhoto";
import Card from "../components/Cards";
import Collection from "../components/Collection";
import AboutPoster from "../components/AboutPoster";
import DesignYourJewelry from "../components/DesignYourJewelry";
import "../styles/Diamond.css";
import CollectionCards from "../components/CollectionCards";

import {
  logoData,
  bgImgGftData,
  diamondShapes,
  shopByData,
  learnMoreData,
  designJwlGiftData,
  colletionData,
  shopDiamondData,
  dmdReviewData,
  dmdEduData,
} from "../assets/data";
import EthicMessageDiamond from "../components/EthicsMessageDiamond";

const Diamonds = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const set2Images = filterImageByCategory(diamondShapes, "set2");
  const set18Images = filterImageByCategory(dmdReviewData, "set18");

  const logoUrl = getUrl(logoData, 0, "logoUrl");
  const flUrl = getUrl(colletionData, 2, "imgUrl");
  const invUrl = getUrl(colletionData, 3, "imgUrl");
  const bgData = learnMoreData[2];

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[2]
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
        customClass="diamond-bg"
      />

      <section className="shapes">
        <h1 className="shape-heading">Shop Diamonds by Shape</h1>
        <div className="shape-cards">{renderCards(set2Images)}</div>
      </section>

      <Collection data={shopByData[2]} className="reverse-layout" />
      <Collection data={shopByData[3]} />

      <div className="fl-collection">
        <img className="fl-img" src={flUrl} alt="The Flawless Collection" />
      </div>

      <Collection data={shopByData[4]} className="reverse-layout2" />

      <DesignYourJewelry data={shopDiamondData} customClass="shop-dmd" />

      <div className="fl-collection">
        <img className="fl-img" src={invUrl} alt="The Flawless Collection" />
        <p className="inv-para">
          Transforming an industry with diamond innovation and artistry since
          day one.
        </p>
        <div className="inv-btn-div">
          <button className="inv-btn">Learn More</button>
        </div>
      </div>

      <Collection data={shopByData[5]} customClass="blockchain-dmd" />

      <AboutPoster
        imageSrc={bgData.imgUrl}
        heading={bgData.heading}
        paragraph={bgData.paragraph}
      />

      <DesignYourJewelry data={designJwlGiftData} />

      <section className="diamond-reviews">
        <h1 className="dmd-review-heading">Diamond Reviews</h1>
        <div className="dmd-review-cards">{renderCards(set18Images)}</div>
      </section>

      <div className="dmd-education">
        <h1 className="dmd-edu-head">Diamond Education</h1>
        <CollectionCards
          data={dmdEduData}
          containerClass="dmd-edu-container"
          cardClass="dmd-edu-cards"
          imageClass="dmd-edu-card-img"
          headingTag="h5"
          textClass="dmd-edu-text"
        />
      </div>

      <EthicMessageDiamond />

      <Footer />
    </>
  );
};
export default Diamonds;
