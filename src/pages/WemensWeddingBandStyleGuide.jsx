import React from "react";
import "../styles/WomensWeddingBandStyleGuide.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Collection from "../components/Collection";
import VideoCollection from "../components/VideoCollection";
import Card from "../components/Cards";
import Footer from "../components/Footer";

import {
  logoData,
  bgImgGftData,
  shopByData,
  womensWeddingBandData,
} from "../assets/data";
const WomensWeddingBandStyleGuide = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const wwbImages = filterImageByCategory(womensWeddingBandData, "wwb-rings");
  const wrTrendsImages = filterImageByCategory(
    womensWeddingBandData,
    "w-ring-trends"
  );

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[11]
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
        <Logo logoSrc={logoUrl} altText="" />
      </div>

      <Navbar />

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
        customClass="top-twenty-bg"
      />

      <div className="wwb-msg">
        <p className="wwb-msg-para">
          From plain metal bands to unique gemstone wedding bands, it’s
          important to consider how the wedding band complements the engagement
          ring and expresses individual style. See below for a guide that will
          help you discover the ideal match.
        </p>
      </div>

      {shopByData.slice(45, 52).map((data, index) => (
        <Collection
          key={index}
          data={data}
          className={index % 2 === 0 ? "Wwb-style" : "wwb-style-reverse"}
        />
      ))}

      <div className="top-twenty-wwb-styles">
        <div className="top-twenty-text">
          <h2 className="top-twinty-wwb-head">
            Top Twenty Women's Wedding Band Styles
          </h2>
          <button className="top-twenty-wwb-btn">
            Shop Customers Favorites
          </button>
        </div>
        <div className="top-twenty-wwb-cards">{renderCards(wwbImages)}</div>
      </div>

      <VideoCollection
        data={shopByData[44]}
        className="reverse-video-collection"
      />

      <div className="wedding-ring-trends">
        <h1 className="wr-trends-head">Popular Wedding Ring Trends</h1>
        <div className="wr-trends-cards">{renderCards(wrTrendsImages)}</div>
      </div>

      <div className="wwd-engraving">
        <div>
          <h1 className="wwd-engraving-head">Women's Wedding Band Engraving</h1>
          <p className="wwd-engraving-para">
            Adding engravings to the interior of a women's wedding band is a
            meaningful way to personalize and enhance the significance of the
            ring. Engravings can include special dates, initials, meaningful
            quotes, or even symbols that hold sentimental value to the couple.
            With the option to customize and add personal touches, engraving
            transforms a wedding band into a cherished keepsake.
          </p>
          <button className="wwd-engraving-btn">Ring Engraivng Guide</button>
        </div>
      </div>

      <div className="cww-bands">
        <div>
          <h1 className="cww-bands-head">Custom Women's Wedding Bands</h1>
          <p className="cww-bands-para">
            Brilliant Earth offers a range of custom design options for women's
            wedding rings, allowing customers to create unique and personalized
            pieces that reflect their style and preferences. With our custom
            design service, customers can collaborate with Brilliant Earth's
            expert jewelry designers to bring their vision to life. From
            selecting the perfect ethically sourced gemstones to choosing the
            ideal metal type and design elements, every aspect of the ring can
            be tailored to meet your desires. Whether it's incorporating
            intricate details, adding personal engravings, or creating a
            one-of-a-kind design from scratch, Brilliant Earth's custom ring
            design service ensures that each woman's wedding ring is as special
            and meaningful as the love it symbolizes.
          </p>
          <button className="cww-bands-btn">Custom Ring Process</button>
        </div>
      </div>

      <div className="wwd-explore-more">
        <h1 className="wwd-explore-more-head">Explore More</h1>
        <div className="wwd-er-more-btn-container">
          <button className="wwd-er-more-btn1">Wedding Ring Guide</button>
          <button className="wwd-er-more-btn1">Wedding Ring Budget</button>
          <button className="wwd-er-more-btn1">
            Men's Wedding Ring Styles
          </button>
          <button className="wwd-er-more-btn1">
            What Hand Does a Wedding Ring Go On?
          </button>
          <button className="wwd-er-more-btn1">Wedding Ring Trends</button>
          <button className="wwd-er-more-btn1">How to Measure Ring Size</button>
          <button className="wwd-er-more-btn1">Platinum vs. Gold</button>
          <button className="wwd-er-more-btn1">Lab Grown Diamond Guide</button>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default WomensWeddingBandStyleGuide;
