import React from "react";
import "../styles/WeddingRingBudgetGuide.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Collection from "../components/Collection";
import CollectionWithList from "../components/CollectionWithList";

import { logoData, bgImgGftData, WeddinRingGuideData } from "../assets/data";
import Footer from "../components/Footer";

const WeddingRingBudgetGuide = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[14]
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

      <div className="wrbg-msg">
        <p className="wrbg-msg-para">
          The traditions and "rules" around wedding rings are evolving—modern
          couples now enjoy much more flexibility. These days, there are no
          strict standards about which partner should purchase the wedding band.
          Instead, shopping for wedding bands has become a joint decision-making
          process, and the cost of wedding rings is determined by the couple's
          budget, personal style, and shared values.
        </p>
      </div>
      <div className="wrbg-cl-container">
        <Collection data={WeddinRingGuideData[0]} />
        <Collection data={WeddinRingGuideData[1]} className="wrbg-cl-reverse" />
        <Collection data={WeddinRingGuideData[2]} />
        <CollectionWithList
          data={WeddinRingGuideData[3]}
          className="wrbg-cl-li-reverse"
        />
      </div>

      <div className="flexible-po">
        <div>
          <h1 className="flexible-po-head">Flexible Payment Options</h1>
          <p className="flexible-po-para">
            From layaway to flexible payment plans, we offer several options for
            financing your order. Financing options are subject to credit
            approval and can allow you to make monthly payments on any purchase
            after an initial deposit. You can visit our financing page for more
            information.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default WeddingRingBudgetGuide;
