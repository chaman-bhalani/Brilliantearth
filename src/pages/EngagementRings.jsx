import React from "react";
import "../styles/EngagementRings.css";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Card from "../components/Cards";
import DesignYourJewelry from "../components/DesignYourJewelry";
import CollectionCards from "../components/CollectionCards";
import AboutPoster from "../components/AboutPoster";
import EthicMessageEngagementRing from "../components/EhicsMessageEngagementRing";
import Footer from "../components/Footer";
import ToggleCard from "../components/ToggleCard";

import {
  logoData,
  bgImgGftData,
  diamondShapes,
  yourEngRingData,
  shopEngRingByStyle,
  engagementJewelryData,
  signatureCollectionData,
  learnMoreData,
  engagementRingReviewData,
  appointmentData,
  engagementRingsEducation,
  EngRingTgcData,
} from "../assets/data";

const EngagementRings = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");
  const ssUrl = getUrl(appointmentData, 0, "imgUrl");
  const bgData = learnMoreData[3];

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[4]
    : bgImgGftData;

  const set2Images = filterImageByCategory(diamondShapes, "set2");
  const set23Images = filterImageByCategory(yourEngRingData, "set23");
  const set24Images = filterImageByCategory(shopEngRingByStyle, "set24");
  const set27Images = filterImageByCategory(engagementRingReviewData, "set27");

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

  const renderToggleCards = (data) => {
    return <ToggleCard data={EngRingTgcData} />;
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

      <div>
        <h1>Popular Engagement Rings</h1>
        <div className="app-container">{renderToggleCards(EngRingTgcData)}</div>
      </div>

      <section className="shapes">
        <h1 className="shape-heading">Shop Diamonds by Shape</h1>
        <div className="shape-cards">{renderCards(set2Images)}</div>
      </section>
      <section>
        <h1 className="your-engagement-ring-head">
          Design Your Own Engagement Ring
        </h1>
        <div className="your-engagement-ring-cards">
          {renderCards(set23Images)}
        </div>
      </section>
      <section>
        <h1 className="ser-by-style-head">Shop Engagement Rings By Style</h1>
        <div className="ser-by-style-cards">{renderCards(set24Images)}</div>
      </section>
      <DesignYourJewelry data={engagementJewelryData} />
      <section>
        <h1 className="our-signature-collection-head">
          Explore Our Signature Collections
        </h1>
        <CollectionCards
          data={signatureCollectionData}
          containerClass="our-signature-collection-container"
          cardClass="our-signature-collection-cards"
          imageClass="our-signature-collection-card-img"
          headingTag="h5"
          textClass="our-signature-collection-text"
        />
      </section>
      <AboutPoster
        imageSrc={bgData.imgUrl}
        heading={bgData.heading}
        paragraph={bgData.paragraph}
      />
      <section>
        <h1 className="err-review-head">Engagement Ring Reviews</h1>
        <div className="err-review-cards">{renderCards(set27Images)}</div>
      </section>
      <div className="engagement-ring-education">
        <h1 className="engagement-ring-education-head">
          Engagement Ring Education
        </h1>

        <CollectionCards
          data={engagementRingsEducation}
          containerClass="eng-education"
          cardClass="eng-education-cards"
          imageClass="eng-education-img"
          headingTag="h5"
          textClass="eng-educatioin-text"
        />
      </div>
      <div className="ss-div">
        <img className="ss-img" src={ssUrl} alt="Appointment Banner" />
      </div>
      <section className="appointment">
        <h1 className="ap-heading">Our Experts Are Here For You</h1>
        <p className="ap-pera">
          Appointments curated just for you. Start your stack, find your fit,
          design the perfect engagement ring.
        </p>
        <div className="ap-btn">
          <button className="ap-btn1">Visit a Showroom</button>
          <button className="ap-btn2">Book a Virtual Appointment</button>
        </div>
      </section>
      <EthicMessageEngagementRing />
      <Footer />
    </>
  );
};

export default EngagementRings;
