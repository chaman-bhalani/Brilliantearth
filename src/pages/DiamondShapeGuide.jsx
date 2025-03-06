import React from "react";
import "../styles/DiamondShapeGuide.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Card from "../components/Cards";
import Collection from "../components/Collection";
import CollectionWithList from "../components/CollectionWithList";

import {
  logoData,
  bgImgGftData,
  diamondShapes,
  diamondShapeClData,
  learnMoreAbtDiamondsCardData,
} from "../assets/data";
import Footer from "../components/Footer";

const DiamondShapeGuide = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[22]
    : bgImgGftData;

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };
  const set2Images = filterImageByCategory(diamondShapes, "set2");
  const lmaDiamondsImages = filterImageByCategory(
    learnMoreAbtDiamondsCardData,
    "lma-diamonds"
  );

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

      <div className="diamond-shape">
        <h1>What Is Diamond Shape?</h1>
        <p>
          Diamond shape refers to the geometric form or outline of a diamond
          when viewed from above. It is the primary visual characteristic that
          influences a diamond's overall appearance and style. The shape of a
          diamond can greatly affect how light is reflected and refracted,
          thereby impacting its brilliance and sparkle.
        </p>
        <p>
          Shape is often one of the first attributes considered when shopping
          for a diamond. While round diamonds are the most traditional choice,
          many people are also drawn to the distinctive look of fancy-shaped
          diamonds, like oval, cushion, princess, pear, emerald, marquise,
          asscher, radiant, or heart-shaped diamonds.
        </p>
      </div>

      <section className="shapes">
        <h1 className="shape-heading">Shop Diamonds by Shape</h1>
        <div className="shape-cards">{renderCards(set2Images)}</div>
      </section>

      <Collection data={diamondShapeClData[0]} className="diamond-shape-cl" />
      <CollectionWithList
        data={diamondShapeClData[1]}
        className="diamond-shape-cl-reverse"
      />

      <div className="lma-diamonds">
        <h1 className="lma-diamonds-head">Learn More About Diamonds</h1>
        <div className="lma-diamonds-card">
          {renderCards(lmaDiamondsImages)}
        </div>
      </div>

      <Footer />
    </>
  );
};
export default DiamondShapeGuide;
