import React from "react";
import "../styles/LabDiamondGuide.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Card from "../components/Cards";
import CollectionWithLinks from "../components/CollectionWithLinks";
import ToggleCard from "../components/ToggleCard";
import CollectionWithVideoAndButtons from "../components/VideoCollectioWithMultipleHead";
import Footer from "../components/Footer";

import {
  logoData,
  bgImgGftData,
  diamondShapes,
  labDiamondClData,
  labDiamondTgCardData,
  rtsRingData,
} from "../assets/data";
import Collection from "../components/Collection";
import CollectionWithList from "../components/CollectionWithList";

const LabDiamondGuide = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[21]
    : bgImgGftData;

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };
  const set2Images = filterImageByCategory(diamondShapes, "set2");
  const rtsRingsImages = filterImageByCategory(rtsRingData, "rts-rings");
  const mteLabDmdImages = filterImageByCategory(rtsRingData, "mte-lab-dmd");

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
        <Logo logoSrc={logoUrl} altText="Logo" />
      </div>
      <Navbar />

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
      />

      <section className="shapes">
        <h1 className="shape-heading">Shop Lab Diamonds by Shape</h1>
        <div className="shape-cards">{renderCards(set2Images)}</div>
      </section>

      <Collection
        data={labDiamondClData[0]}
        className="lab-diamond-cl-reverse"
      />
      <Collection data={labDiamondClData[1]} className="lab-diamond-cl" />
      <CollectionWithLinks
        data={labDiamondClData[2]}
        className="lab-diamond-cl-reverse"
      />

      <div>
        <h1>Popular Engagement Rings</h1>
        <div className="app-container">
          {labDiamondTgCardData.map((card, index) => (
            <ToggleCard key={index} data={card.data} />
          ))}
        </div>
      </div>

      <CollectionWithVideoAndButtons
        data={labDiamondClData[3]}
        className="lab-diamond-cl-reverse-video"
      />

      <div className="popular-eng-rings">
        <div className="per-text">
          <h2 className="per-head">Ready to Ship Engagement Rings</h2>
          <p className="per-para">
            Shop our preset designs crafted with hand-picked lab diamonds that
            perfectly complement their settings. These top-selling styles are
            ready to ship your way, stat — so you can propose now.
          </p>
          <button className="per-btn">Shop Ready to Ship Rings</button>
        </div>

        <div className="per-collection-cards">
          {renderCards(rtsRingsImages)}
        </div>
      </div>

      <CollectionWithList
        data={labDiamondClData[4]}
        className="lab-diamond-cl-reverse"
      />

      <div className="lab-diamond-benifits">
        <h1>Benefits of Lab Grown</h1>

        <div className="benefit-section">
          <div className="benefit-item">
            <h3>Mining Free</h3>
            <p>
              Lab diamonds are a responsible choice as they are grown with
              precise technology that doesn't involve mining.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Beauty</h3>
            <p>
              Lab diamonds have the same physical, chemical, and optical
              properties as natural diamonds.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Value</h3>
            <p>
              Lab diamonds offer excellent value—so you can maximize your budget
              across the 4 C's.
            </p>
          </div>
        </div>
      </div>

      <div className="jwl-with-meaning">
        <h1 className="jwm-head">More to Explore</h1>
        <div className="jwm-cards">{renderCards(mteLabDmdImages)}</div>
      </div>

      <Footer />
    </>
  );
};
export default LabDiamondGuide;
