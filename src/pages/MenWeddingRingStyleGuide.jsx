import React from "react";
import "../styles/MenWeddingRingStyleGuide.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import CollectionWithLinks from "../components/CollectionWithLinks";
import Card from "../components/Cards";

import {
  logoData,
  bgImgGftData,
  menWeddingRingStyleData,
  menWeddingRingStyleCardData,
} from "../assets/data";
import Collection from "../components/Collection";
import Footer from "../components/Footer";

const MenWeddingRingStyleGuide = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[20]
    : bgImgGf;

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const topMwrsImages = filterImageByCategory(
    menWeddingRingStyleCardData,
    "top-mwrs"
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
        <Logo logoSrc={logoUrl} altText="Logo" />
      </div>
      <Navbar />

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
        customClass="enr-buying-guide-bg"
      />

      <div className="mwrsg-msg">
        <p>
          Often a man’s first piece of highly considered jewelry, men’s wedding
          band styles are available in a wide range of designs that offer
          personal expression without sacrificing comfort. Learn about the many
          different types of men’s wedding bands.
        </p>
      </div>

      {menWeddingRingStyleData.map((data, index) => (
        <CollectionWithLinks
          key={index}
          data={data}
          className={`men-wedding-band-style-cl${
            index % 2 === 0 ? "-reverse" : ""
          }`}
        />
      ))}

      <div className="popular-eng-rings">
        <div className="per-text">
          <h2 className="per-head">Top Twenty Men's Wedding Ring Styles</h2>
          <button className="per-btn">Shop Customer Favorites</button>
        </div>

        <div className="per-collection-cards">{renderCards(topMwrsImages)}</div>
      </div>

      <div className="matching-wed-band">
        <h1>Need Help Finding a Matching Wedding Band?</h1>
        <Collection data={menWeddingRingStyleCardData[20]} />
      </div>

      <div className="mens-wedding-band-custom">
        <h1>Men's Wedding Band Engraving</h1>
        <p>
          A time-honored tradition, adding engravings to the inside of the men’s
          wedding band is a sentimental way to add a personal touch to the ring.
          Engravings can include quotes, initials, or even dates that hold
          sentimental value to the couple. With the possibility to personalize
          individual touches, engraving transforms a ring into a one-of-a-kind
          piece.
        </p>
        <button>Ring Engraving Guide</button>

        <h1>Custom Men's Wedding Bands</h1>
        <p>
          Brilliant Earth offers men’s custom wedding rings for any style. From
          choosing the ideal metal type and design elements, every aspect of the
          ring can be tailored to bring your vision to life. Whether it's
          incorporating intricate details, adding personal engravings, or
          creating a one-of-a-kind design from scratch, Brilliant Earth's custom
          ring design service ensures that each man’s wedding ring is as special
          and meaningful as the commitment it symbolizes.
        </p>
        <button>Custom Ring Process</button>
      </div>

      <Footer />
    </>
  );
};

export default MenWeddingRingStyleGuide;
