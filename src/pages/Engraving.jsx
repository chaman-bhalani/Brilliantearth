import React from "react";
import "../styles/Engraving.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Collection from "../components/Collection";
import CollectionWithList from "../components/CollectionWithList";

import { logoData, bgImgGftData, shopByData } from "../assets/data";
import Footer from "../components/Footer";
const Engraving = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[12]
    : bgImgGftData;

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

      <div className="en-msg">
        <div>
          <p className="en-msg-para">
            Wedding, engagement, and promise rings symbolize your love and
            commitment — so they should be as unique and special as your
            one-of-a-kind love story. Adding an engraving, a secret message
            inscribed along a ring's inner edge, is a meaningful way to add a
            personalized touch to an already sentimental piece. Practiced for
            centuries, engraving is a popular and heartfelt way to write a love
            note to your partner.
          </p>
        </div>
      </div>
      <Collection data={shopByData[52]} />
      <Collection data={shopByData[53]} className="engraving-reverse-cl" />
      <Collection data={shopByData[54]} />

      <div className="engraving-ideas">
        <h1 className="engraving-idea-head">Ring Engraving Ideas</h1>
      </div>

      {shopByData.slice(55, 62).map((data, index) => (
        <CollectionWithList
          key={index}
          data={data}
          className={index % 2 === 0 ? "Wwb-style" : "wwb-style-reverse"}
        />
      ))}

      <div className="engraving-tips">
        <h1 className="engraving-tips-head">Ring Engraving Tips</h1>
        <p className="engraving-tips-para">
          1. Don't just consider what you want to say — consider the length of
          what you want to say. Generally, wedding ring engravings should be
          15-20 characters or less — so it's wise to keep your message short and
          sweet. At Brilliant Earth, 15 characters is the standard for women's
          rings, and 20 is the standard for men's rings. Extra characters are
          possible at an additional cost.
          <br />
          2. Make sure your ring is thick enough. Many jewelers will only
          engrave a ring that's more than 1.5mm in width. At Brilliant Earth, we
          engrave wedding rings at or above 1.4mm in width.
          <br />
          3. Most jewelers offer script or block font. Be sure to specify which
          you would like after considering them both. At Brilliant Earth, we
          offer both script and block fonts.
          <br />
          4. Some jewelers may be able to engrave special characters (such as
          Chinese symbols or a smiley face), be sure to ask what's possible
          before planning out your engraving. At Brilliant Earth, we offer the
          heart, infinity, and degree symbols. Other special characters may be
          available at an additional cost.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Engraving;
