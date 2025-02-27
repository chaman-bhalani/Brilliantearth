import React from "react";
import "../styles/CustomEngagementRing.css";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import DesignYourJewelry from "../components/DesignYourJewelry";
import Card from "../components/Cards";
import Collection from "../components/Collection";
import Footer from "../components/Footer";

import {
  logoData,
  bgImgGftData,
  customizeRingData,
  shopByData,
} from "../assets/data";

const CustomEngagementRing = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[7]
    : bgImgGftData;

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const customRing = filterImageByCategory(customizeRingData, "customize-ring");
  const customRingProcess = filterImageByCategory(
    customizeRingData,
    "customize-ring-process"
  );
  const ecrCollection = filterImageByCategory(
    customizeRingData,
    "ecr-collection"
  );
  const ecrWeddingRings = filterImageByCategory (customizeRingData, "ecr-wedding");

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

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
      />

      <div>
        <h1 className="customize-ring-head">
          Completely Custom or Design it Yourself
        </h1>

        <p className="customize-ring-para">
          When designing an engagement ring, we know it’s important to have
          options. Whether you’d like our experts to craft a completely custom
          piece for you or design it yourself from the settings on our site,
          your perfect piece awaits.
        </p>

        <DesignYourJewelry data={customRing} />
      </div>

      <div>
        <h1 className="custom-ring-process-head">The Custom Ring Process</h1>
        <p className="custom-ring-process-para">
          Creating one-of-a-kind custom jewelry celebrates your unique
          personality and passions. In four steps, our experts will bring your
          exact vision to life by combining the latest design technology with
          artistry and careful craftsmanship. Generally, each piece takes 4-6
          weeks to complete from start to finish. Our custom designs start at
          $2,000.
        </p>
        <div className="crp-btn">
        <button className="custom-ring-process-btn">Request a Quote</button>
        </div>
        <DesignYourJewelry data={customRingProcess} />
      </div>

      <div className="explore-custom-rings">
        <div className="ecr-text">
          <h2 className="ecr-head">Custom Engagement Rings</h2>
          <p className="ecr-para">
            Each custom engagement ring represents a one-of-a-kind love story.
          </p>
          <button className="ecr-btn">Explore Custom Engagement Rings</button>
        </div>
        <div className="ecr-collection-cards">{renderCards(ecrCollection)}</div>
      </div>

      <Collection data={shopByData[36]} className="uer" />

      <div className="explore-custom-rings">
        <div className="ecr-text">
          <h2 className="ecr-head">Custom Wedding Rings</h2>
          <p className="ecr-para">
            We craft each custom wedding ring to last forever—just like your
            love.
          </p>
          <button className="ecr-btn">Explore Custom Wedding Rings</button>
        </div>
        <div className="ecr-collection-cards">{renderCards(ecrWeddingRings)}</div>
      </div>

      <Footer />
    </>
  );
};
export default CustomEngagementRing;
