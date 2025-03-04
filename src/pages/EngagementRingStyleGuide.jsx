import React from "react";
import "../styles/EngagementRingStyleGuide.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Collection from "../components/Collection";
import Card from "../components/Cards";
import CollectionCards from "../components/CollectionCards";
import Footer from "../components/Footer";

import {
  logoData,
  bgImgGftData,
  EngRingStyleGuideData,
  popularEnRings,
  engRingSettingData,
} from "../assets/data";

const EngagementRingStyleGuide = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[15]
    : bgImgGftData;

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const popularEnRingImages = filterImageByCategory(
    popularEnRings,
    "plr-en-rings"
  );
  const prongTypeImages = filterImageByCategory(popularEnRings, "prong-type");
  const ctrGemImages = filterImageByCategory(popularEnRings, "ctrGemImages");
  const accentGemImages = filterImageByCategory(popularEnRings, "accentGemImages");
  const bandTypeImages = filterImageByCategory(popularEnRings, "bandTypeImages");
  const fnshDetailsImages = filterImageByCategory(popularEnRings, "fnshDetailsImages");

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
      <Logo logoSrc={logoUrl} altText="" />
      <Navbar />

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
      />

      <div className="enr-style-vs-settings">
        <h1 className="enr-st-vs-se-head">
          Engagement Ring Styles vs. Settings
        </h1>
        <p className="enr-st-vs-se-para">
          When picking the perfect engagement ring, it's essential to understand
          the terminology of and difference between style and setting. Though it
          can be difficult to distinguish between the two, style refers to the
          general look or feeling a ring evokes — be it vintage or
          nature-inspired, for example. The setting of a ring is more technical,
          referring to the actual manner in which a center stone is set (bezel
          or prong-set) and what kind of accents it features — or lack thereof
          (solitaires). To dive into the distinctive details between style vs.
          setting, read on.
        </p>
      </div>

      <div className="en-ri-styles">
        <h1 className="en-ri-styles-head">Engagement Ring Styles</h1>
        {EngRingStyleGuideData.map((data, index) => (
          <Collection
            key={index}
            data={data}
            className={index % 2 === 1 ? "en-ri-sty-reverse" : "en-ri-sty-cl"}
          />
        ))}
      </div>

      <div className="popular-eng-rings">
        <div className="per-text">
          <h2 className="per-head">Popular Engagement Rings</h2>
          <p className="per-para">
            Discover our most popular engagement ring settings.
          </p>
          <button className="per-btn">Top 20 Engagement Rings</button>
        </div>

        <div className="per-collection-cards">
          {renderCards(popularEnRingImages)}
        </div>
      </div>

      <div className="en-ri-settings">
        <h1 className="en-ri-settings-head">
          Types of Engagement Ring Setting
        </h1>
        {engRingSettingData.map((data, index) => (
          <Collection
            key={index}
            data={data}
            className={index % 2 === 1 ? "en-ri-sty-reverse" : "en-ri-sty-cl"}
          />
        ))}
      </div>

      <div className="enr-style-vs-settings">
        <h1 className="enr-st-vs-se-head">
          Engagement Ring Setting Design Details
        </h1>
        <p className="enr-st-vs-se-para">
          When selecting an engagement ring, it's important to understand what
          features to consider. From prong type to shank finish, learn all the
          details of engagement ring settings to pick the perfect piece.
        </p>
      </div>

      <div className="enr-settings-designs">
        <div className="per-text">
          <h2 className="per-head">Prong Type</h2>
          <p className="per-para">
            Prongs refer to the metal that secures the center gemstone atop the
            setting. They are an essential feature in the overall look of a ring
            and a critical feature in ensuring your center stone stays put.
          </p>
        </div>

        <div className="prong-type">
          <CollectionCards
            data={prongTypeImages}
            containerClass="prong-type-container"
            cardClass="prong-type cards"
            imageClass="prong-type-image"
            headingTag="h5"
            textClass="prong-type-text"
          />
        </div>
      </div>

      <div className="enr-settings-designs">
        <div className="per-text">
          <h2 className="per-head">Center Gemstone Setting</h2>
          <p className="per-para">
            The center gemstone setting, commonly referred to as the 'head' in
            ring anatomy, is the metal that connects the prongs to the shank of
            the design, keeping the center stone in place. Beyond security, the
            center gemstone setting determines how high or low your ring will
            sit on your finger.
          </p>
        </div>

        <div className="prong-type">
          <CollectionCards
            data={ctrGemImages}
            containerClass="prong-type-container"
            cardClass="prong-type cards"
            imageClass="prong-type-image"
            headingTag="h5"
            textClass="prong-type-text"
          />
        </div>
      </div>

      <div className="enr-settings-designs">
        <div className="per-text">
          <h2 className="per-head">Accent Gemstone Setting</h2>
          <p className="per-para">
            The accent gemstone setting refers to how other accents besides the
            center gemstone are set. These accents could be along the band of a
            ring, surprise elements that rest on the inner edge of the band, or
            a hidden halo underneath the head.
          </p>
        </div>

        <div className="prong-type">
          <CollectionCards
            data={accentGemImages}
            containerClass="prong-type-container"
            cardClass="prong-type cards"
            imageClass="prong-type-image"
            headingTag="h5"
            textClass="prong-type-text"
          />
        </div>
      </div>

      <div className="enr-settings-designs">
        <div className="per-text">
          <h2 className="per-head">Types of Bands</h2>
          <p className="per-para">
            The ring shank, commonly called the band, is the part of the ring
            that encircles the finger. It's an important design element that
            affects both the appearance of the ring and how it feels to the
            wearer.
          </p>
        </div>

        <div className="prong-type">
          <CollectionCards
            data={bandTypeImages}
            containerClass="prong-type-container"
            cardClass="prong-type cards"
            imageClass="prong-type-image"
            headingTag="h5"
            textClass="prong-type-text"
          />
        </div>
      </div>

      <div className="enr-settings-designs">
        <div className="per-text">
          <h2 className="per-head">Finishing Details</h2>
          <p className="per-para">
            Precious metal details are a great way to add interest or
            embellishment to your ring. Finishing details can affect the ring's
            overall appearance, giving it either a more contemporary or vintage
            look.
          </p>
        </div>

        <div className="prong-type">
          <CollectionCards
            data={fnshDetailsImages}
            containerClass="prong-type-container"
            cardClass="prong-type cards"
            imageClass="prong-type-image"
            headingTag="h5"
            textClass="prong-type-text"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default EngagementRingStyleGuide;
