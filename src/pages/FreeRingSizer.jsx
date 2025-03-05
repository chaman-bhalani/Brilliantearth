import React from "react";
import "../styles/FreeRingSizer.css"
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import CollectionWithForm from "../components/CollectionWithForm";

import { logoData, bgImgGftData, freeRingSizerData } from "../assets/data";

const FreeRingSizer = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };
  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[19]
    : bgImgGf;

  const logoUrl = getUrl(logoData, 0, "logoUrl");

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

      <div className="req-free-ring-sizer">
        <h1 className="req-free-ring-sizer-head">Use Our Free Ring Sizer</h1>
      </div>

      <CollectionWithForm data={freeRingSizerData[0]} className="free-ring-sizer-form" />
    </>
  );
};
export default FreeRingSizer;
