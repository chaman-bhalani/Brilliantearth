import React from "react";
import "../styles/SignatureCollections.css";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Collection from "../components/Collection";
import Card from "../components/Cards";
import Footer from "../components/Footer";

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
  const fourthUrl = getUrl(signatureCollectionImgData, 3, "imgUrl");

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
  const mlcmImages = filterImageByCategory(
    secretGardenCardData,
    "camellia-card-collection"
  );
  const mteImages = filterImageByCategory(
    secretGardenCardData,
    "mte-signature"
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
          <h2 className="collection-head">Proportion & Scale</h2>
          <p className="collection-para">
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
        <Collection data={shopByData[14]} className="reverse-sngr" />
        <img src={thirdUrl} alt="abcd" className="the-olivetta-photo1" />
        <h2 className="collection-head">Timeless & Evocative</h2>
        <p className="collection-para">
          Capturing the elegant angles of the Mediterranean olive tree, Olivetta
          echoes the light that weaves through branches and sculpted, slender
          leaves
        </p>
        <div className="most-loved-olivetta">
          <h1 className="mlov-head">Most Loved Olivetta Styles</h1>
          <div className="mlov-cards">{renderCards(mlovImages)}</div>
        </div>
      </div>

      <div>
        <div className="camellia-collection">
          <h1 className="camellia-collection-head">The Camellia Collection</h1>
          <Collection data={shopByData[15]} />

          <img src={fourthUrl} alt="abcd" className="the-camellia-photo1" />

          <h2 className="collection-head">Balance & Beauty</h2>
          <p className="collection-para">
            Inspired by their namesake flower, Camellia designs feature textural
            details, unique petal motifs, and delicate diamond leav
          </p>
        </div>

        <div className="most-loved-camellia">
          <h2 className="mlcm">Most Loved Camellia Styles</h2>
          <div className="mlcm-cards">{renderCards(mlcmImages)}</div>
        </div>
      </div>

      <div className="more-to-exp-signature">
        <h1 className="mte-signature-head">More to Explore</h1>
        <div className="mte-signature-cards">{renderCards(mteImages)}</div>
      </div>

      <Footer />
    </>
  );
};
export default SignatureCollections;
