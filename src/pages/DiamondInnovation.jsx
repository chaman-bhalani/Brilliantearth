import React from "react";
import "../styles/DiamondInnovation.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import DesignYourJewelry from "../components/DesignYourJewelry";
import Card from "../components/Cards";
import CollectionCards from "../components/CollectionCards";
import Collection from "../components/Collection";
import Footer from "../components/Footer";

import {
  logoData,
  bgImgGftData,
  innovationData,
  dydrData,
} from "../assets/data";

const DiamondInnovation = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };
  const logoUrl = getUrl(logoData, 0, "logoUrl");
  const clImg = getUrl(innovationData, 4, "imgUrl");
  const jgImg = getUrl(innovationData, 5, "imgUrl");
  const msgImg = getUrl(innovationData, 19, "imgUrl");

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const firstSet = filterImageByCategory(innovationData, "first");
  const secondSet = filterImageByCategory(innovationData, "second");
  const jgCollection = filterImageByCategory(innovationData, "jg-collection");
  const mteDiData = filterImageByCategory(
    innovationData,
    "mte-diamond-innovation"
  );
  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[9]
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
      <div>
        <Logo logoSrc={logoUrl} altText="Company Logo" />
      </div>
      <Navbar />

      <div>
        <BackgroundImage
          imageSrc={backgroundData.imgUrl}
          heading={backgroundData.heading}
          paragraph={backgroundData.paragraph}
          buttons={backgroundData.buttons}
        />
      </div>

      <div className="innovation-info">
        <h2 className="innovation-info-head">
          Innovation, artistry, planet-first.
        </h2>
        <p className="innovation-info-para1">
          Since day one, we've challenged an industry to rethink how diamonds
          are sourced and how jewelry is made.
        </p>
        <p className="innovation-info-para2">
          Two decades later, we're still at the forefront of that
          transformation.
        </p>

        <DesignYourJewelry data={firstSet} />

        <div className="ss-div">
          <img className="ss-img" src={clImg} alt="Appointment Banner" />
        </div>
        <div className="flcl">
          <p className="fl-cl-para">
            Exceptionally rare, perfectly graded, and always ethically sourced.
            Only the rarest make the cut for this premium diamond collection.​
          </p>
          <button className="fl-cl-btn">Shop Now</button>
        </div>

        <DesignYourJewelry data={secondSet} />
      </div>

      <div className="ss-div">
        <img className="ss-img" src={jgImg} alt="Appointment Banner" />
      </div>

      <div className="jane-goodall-collection">
        <h1 className="jgc-head">The Jane Goodall Collection</h1>
        <div className="jgc-cards">{renderCards(jgCollection)}</div>
      </div>

      <div className="design-your-deam-ring">
        <h1 className="dydr-head">Design Your Dream Ring</h1>
        <CollectionCards
          data={dydrData}
          containerClass="dydr-container"
          cardClass="dydr-cards"
          imageClass="dydr-img"
          headingTag="h5"
          textClass="dydr-text"
        />
        <div className="dydr-btns">
          <button className="dydr-btn1">Start With a Setting</button>
          <button className="dydr-btn2">Start With a Diamond</button>
        </div>

        <Collection data={innovationData[14]} />
      </div>

      <div className="mte-diamond-innovation">
        <h1 className="mte-diamond-innovation-head">More to Explore</h1>
        <div className="mte-di-in-cards">{renderCards(mteDiData)}</div>
      </div>

      <div className="ss-div">
        <img className="ss-img" src={msgImg} alt="Appointment Banner" />
      </div>

      <Footer />
    </>
  );
};

export default DiamondInnovation;
