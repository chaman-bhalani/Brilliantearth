import React from "react";
import "../styles/SignatureCollections.css";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Collection from "../components/Collection";
import Card from "../components/Cards";

import {
  logoData,
  shopByData,
  signatureCollectionImgData,
  secretGardenCardData,
} from "../assets/data";

const SignatureCollections = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");
  const firstUrl = getUrl(signatureCollectionImgData, 0, "imgUrl");
  const secondUrl = getUrl(signatureCollectionImgData, 1, "imgUrl");
  const thirdUrl = getUrl(signatureCollectionImgData, 2, "imgUrl");

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };
  const sgcImages = filterImageByCategory(
    secretGardenCardData,
    "secret_garden_collection"
  );
  const mlovImages = filterImageByCategory(
    secretGardenCardData,
    "olivetta-card-collection"
  );

  const renderCards = (imageArray) => {
    return imageArray.map((item) => (
      <Card
        key={item.id}
        url={item.imgUrl}
        alt={item.alt}
        footer={item.footer}
      />
    ));
  };

  return (
    <>
      <Logo logoSrc={logoUrl} altText="Company Logo" />
      <Navbar />
      <img
        src={firstUrl}
        alt="poster image"
        className="singnature-page-poster"
      />

      <div>
        <div className="secret-garden-collection">
          <h1 className="secret-garden-collection-head">
            The Secret Garden Collection
          </h1>
          <Collection data={shopByData[13]} />
        </div>

        <div>
          <img src={secondUrl} alt="abcd" className="secret-garden-photo1" />
          <h2>Proportion & Scale</h2>
          <p>
            Taking inspiration from the asymmetry of nature and its lush
            foliage, we based Secret Garden on blooms, buds, and intertwining
            vines.
          </p>
        </div>

        <div className="most-loved-secret-garden">
          <h1 className="mlsc-head">Most Loved Secret Garden Styles</h1>
          <div className="mlsc-cards">{renderCards(sgcImages)}</div>
        </div>
      </div>

      <div>
        <div className="olivetta-collection"></div>
        <h1 className="olivetta-collection-head">
          The Secret Garden Collection
        </h1>
        <Collection data={shopByData[14]} />
        <img src={secondUrl} alt="abcd" className="the-olivetta-photo1" />
        <h2>Timeless & Evocative</h2>
        <p>
          Capturing the elegant angles of the Mediterranean olive tree, Olivetta
          echoes the light that weaves through branches and sculpted, slender
          leaves
        </p>
        <div className="most-loved-olivetta">
          <h1 className="mlov-head">Most Loved Olivetta Styles</h1>
          <div className="mlov-cards">{renderCards(mlovImages)}</div>
        </div>
      </div>
    </>
  );
};
export default SignatureCollections;
